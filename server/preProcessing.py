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
tweets["lenght"] = tweets["msg"].apply(len) ## assign a third column with the lenght of the messages

# Contract the text data
tweets['no_contract'] = tweets['msg'].apply(lambda x: [contractions.fix(word) for word in x.split()]) # loop trough each word in db to remove contractions
#joining back the list of items into one string
tweets['no_contract'] = [' '.join(map(str, l)) for l in tweets['no_contract']]

# Remove digits
data['text'] = data['text'].apply(lambda x: re.sub(r'\d+', '', x))

# lower case
data['text'] = data['text'].apply(lambda x: str.lower(x))

# Remove user mentions ( in case of tweet replies )
def cleaning_email(data):
    return re.sub('@[^\s]+', '', data)

data['text']= data['text'].apply(lambda x: cleaning_email(x))


# Remove any URL
def cleaning_URLs(data):
    return re.sub('((www\.[^\s]+)|(https?://[^\s]+))',' ',data)

data['text'] = data['text'].apply(lambda x: cleaning_URLs(x))

# Remove punctuation
data['text'] = data['text'].apply(lambda x: re.sub(r'[^\w\d\s\']+', '', x))

# Remove duplicate white spaces
data['text'] = data['text'].apply(lambda x: re.sub(' +', ' ',x))

# Tokenization 
data['tokenized'] = data['text'].apply(word_tokenize)


# Remove stop words
stop_words = set(stopwords.words('english'))

data['no_stop'] = data['tokenized'].apply(lambda x: [word for word in x if word not in stop_words])

# Stemming words
st = nltk.PorterStemmer()
data['stemmed']= data['no_stop'].apply(lambda x: [st.stem(word) for word in x])

# Tag words according to their classification
# noun, verb, adjectives, adverb...
data['pos_tag'] =  data['stemmed'].apply(nltk.tag.pos_tag)

# Lemmatization
#This step is more accurate if POS tag are given
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


lemmatizer=WordNetLemmatizer()

data['lemmatized']= data['pos_tag'].apply(lambda x: [lemmatizer.lemmatize(word[0], pos=nltk_tag_to_wordnet_tag(word[1])) for word in x])






# Tokenize text
tweets['tokenized'] = tweets['msg_str'].apply(word_tokenize)

# Lower case words
tweets['lower'] = tweets['tokenized'].apply(lambda x: [word.lower() for word in x])

# Removing the punctuations and special characters
punc = string.punctuation
tweets['no_punc'] = tweets['lower'].apply(lambda x:[word for word in x if word not in punc])

# Spellcheck words - TODO
spell = SpellChecker()

# Stemming
tweets['pos_tags'] =  tweets['no_contract'].apply(nltk.tag.pos_tag);

# Lemmatization | take the root out of these words

# classify each word
def get_wordnet_pos(tag):
    if tag.startswith('J'):
        return wordnet.ADJ
    if tag.startswith('V'):
        return wordnet.VERB
    if tag.startswith('N'):
        return wordnet.NOUN
    if tag.startswith('R'):
        return wordnet.ADV
    else:
        return wordnet.NOUN

tweets['wordnet_pos'] = tweets['pos_tags'].apply(lambda x: [(word, get_wordnet_pos(pos_tag)) for (word,pos_tag) in x]) 

#Stop words
stop_words = set(stopwords.words('english')) # set language
tweets['stopwords_removed'] = tweets['no_punc'].apply(lambda x: [word for word in x if word not in stop_words])

#Get lnumber of likes as input? -- TODO depending on ml model

sms.to_csv('sms_span_collection.csv')