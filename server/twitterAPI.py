import os
from dotenv import load_dotenv
load_dotenv()

# return items preprocessed/classified
import preProcessing as preP
import classification as clf

import tweepy
import json
import time

class MyStreamListener(tweepy.StreamListener):
    def __init__(self, time_limit=10):
        self.start_time = time.time()
        self.limit = time_limit
        self.tweets = []
        super(MyStreamListener, self).__init__()

    def on_data(self, data):
        if (time.time() - self.start_time) < self.limit:
            self.tweets.append(data)
            return True
        else:
            return False
        
    def on_error(self, status_code):
        print('Got an error with status code: ' + str(status_code))
        return True # To continue listening

class TweetsQuery(object):
    
    def __init__(self):
        API_KEY = os.environ.get("API_KEY")
        API_KEY_SECRET = os.environ.get("API_KEY_SECRET")
        ACESS_TOKEN = os.environ.get("ACESS_TOKEN")
        ACESS_TOKEN_SECRET = os.environ.get("ACESS_TOKEN_SECRET")

        auth = tweepy.OAuthHandler(API_KEY, API_KEY_SECRET)
        auth.set_access_token(ACESS_TOKEN, ACESS_TOKEN_SECRET)
        self.api = tweepy.API(auth, wait_on_rate_limit=True)
        self.classifier = clf.Classifiers()


    def queryOnTwitterAPI(self, query="pandemic"):
        
        # start stream
        myStreamListener = MyStreamListener()
        myStream = tweepy.Stream(auth = self.api.auth, listener=myStreamListener)
        myStream.filter(track=query.split(' '), languages=["en"])

        public_tweets = myStreamListener.tweets

        tweets = []
        for tweet in public_tweets:
            tweet = json.loads(tweet)
            if not tweet['retweeted'] and 'RT @' not in tweet['text']:
                # do something with standard tweets
                row = {}
                row["id"] = tweet['id_str']
                row["author_name"] = tweet['user']['name']
                    
                if not tweet['truncated']:
                    row["text"] = tweet['text']
                    pre_text = preP.text_prePro(row["text"])
                else:
                    row["text"] = tweet['extended_tweet']['full_text']
                    pre_text = preP.text_prePro(row["text"])
                    
                row["vader"] = self.classifier.classifyVader(pre_text)
                row["bow"] = self.classifier.classifyBow(pre_text)

                row["created_at"] = tweet['created_at']
                row["favourite_count"] = tweet['favorite_count']
                try:
                    row["hashtags"] = tweet.entities["hashtags"]
                except AttributeError:
                    row["hashtags"] = []
                tweets.append(row)
        data_obj = {"query":query, "count":len(tweets), "tweets": tweets}
        return data_obj
