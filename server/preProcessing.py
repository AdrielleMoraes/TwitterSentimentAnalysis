import numpy as np
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.corpus import wordnet
from nltk.stem import WordNetLemmatizer
from yellowbrick.text import PosTagVisualizer
import contractions
import re

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

def text_prePro(text):
    if isinstance(text, str):
        
        # Contract the text data
        text = [contractions.fix(word) for word in text.split()]
        text = ' '.join(map(str, text))

        # Remove digits
        text= re.sub(r'\d+', '', text)

        # lower case
        text= str.lower(text)

        # Remove user mentions ( in case of tweet replies )
        text=cleaning_email(text)

        # Remove any URL
        text = cleaning_URLs(text)

        # Remove punctuation
        text = re.sub(r'[^\w\d\s\']+', '', text)

        # Remove duplicate white spaces
        text = re.sub(' +', ' ',text)

        # Tokenization 
        text_token = word_tokenize(text)

        # Remove stop words
        stop_words = set(stopwords.words('english'))
        text_stop = [word for word in text_token if word not in stop_words]


        # Tag words according to their classification
        # noun, verb, adjectives, adverb...
        text_pos = nltk.tag.pos_tag(text_stop)

        # Lemmatization
        #This step is more accurate if POS tag are given
        lemmatizer=WordNetLemmatizer()
        text_lemmatised = [lemmatizer.lemmatize(word[0], pos=nltk_tag_to_wordnet_tag(word[1])) for word in text_pos]
        return ' '.join(map(str, text_lemmatised)) #joining back the list of items into one string

    else:
        print("Enter a valid string")

