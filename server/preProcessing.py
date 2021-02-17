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

#group them back together
tweets["msg_str"] = [' '.join(map(str,l)) for l in tweets['no_contract']]


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

#Get lnumber of likes as input? -- TODO

sms.to_csv('sms_span_collection.csv')