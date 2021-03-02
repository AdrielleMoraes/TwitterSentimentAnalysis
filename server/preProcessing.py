import pandas as pd
from sklearn import preprocessing
import contractions
import nltk
from nltk.tokenize import word_tokenize 
import string
from spellchecker import SpellChecker
from nltk.corpus import wordnet
import nltk
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer 

# function to convert nltk tag to wordnet tag
def nltk_tag_to_wordnet_tag(nltk_tag):
    if nltk_tag.startswith('J'):
        return wordnet.ADJ
    elif nltk_tag.startswith('V'):
        return wordnet.VERB
    elif nltk_tag.startswith('R'):
        return wordnet.ADV
    else:          
        return wordnet.NOUN


def cleaning_email(data):
    return re.sub('@[^\s]+', '', data)


def cleaning_URLs(data):
    return re.sub('((www\.[^\s]+)|(https?://[^\s]+))',' ',data)


#import tweets
tweets_path = ""
tweets = pd.read_table(tweets_path, header=None)

#Label encode data - only use this if data is not encoded yet
le = preprocessing.LabelEncoder() # assaign tags to data as 0 for ham and 1 for spam 
y = tweets[0] #first column contains the label for a tweet
y_enc = le.fit_transform(y)

raw_text = tweets[1] # get text from database

# check for missing values
pd.isnull(tweets).count()

tweets.columns = ["label", "msg"] # assign labels to columns

# Contract the text data
tweets['msg'] = tweets['msg'].apply(lambda x: [contractions.fix(word) for word in x.split()]) # loop trough each word in db to remove contractions
tweets['msg'] = [' '.join(map(str, l)) for l in tweets['msg']] #joining back the list of items into one string

# Remove digits
tweets['msg'] = tweets['msg'].apply(lambda x: re.sub(r'\d+', '', x))

# lower case
tweets['msg'] = tweets['msg'].apply(lambda x: str.lower(x))

# Remove user mentions ( in case of tweet replies )
tweets['msg']= tweets['msg'].apply(lambda x: cleaning_email(x))

# Remove any URL
tweets['msg'] = tweets['msg'].apply(lambda x: cleaning_URLs(x))

# Remove punctuation
tweets['msg'] = tweets['msg'].apply(lambda x: re.sub(r'[^\w\d\s\']+', '', x))

# Remove duplicate white spaces
tweets['msg'] = tweets['msg'].apply(lambda x: re.sub(' +', ' ',x))

# Tokenization 
tweets['tokenized'] = tweets['msg'].apply(word_tokenize)

# Remove stop words
stop_words = set(stopwords.words('english'))
tweets['no_stop'] = tweets['tokenized'].apply(lambda x: [word for word in x if word not in stop_words])


# Tag words according to their classification
# noun, verb, adjectives, adverb...
tweets['pos_tag'] =  tweets['no_stop'].apply(nltk.tag.pos_tag)

# Lemmatization
#This step is more accurate if POS tag are given
lemmatizer=WordNetLemmatizer()
tweets['lemmatized']= tweets['pos_tag'].apply(lambda x: [lemmatizer.lemmatize(word[0], pos=nltk_tag_to_wordnet_tag(word[1])) for word in x])
tweets['total'] = [' '.join(map(str, l)) for l in tweets['lemmatized']] #joining back the list of items into one string