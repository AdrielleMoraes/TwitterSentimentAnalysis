from env import ACESS_TOKEN, ACESS_TOKEN_SECRET, API_KEY, API_KEY_SECRET
import tweepy
import pandas as pd


auth = tweepy.OAuthHandler(API_KEY, API_KEY_SECRET)
auth.set_access_token(ACESS_TOKEN, ACESS_TOKEN_SECRET)

api = tweepy.API(auth)

public_tweets = api.search(q="BBB21", count=3)
row = {}
for tweet in public_tweets:
    row["id"] = tweet.id
    row["author_name"] = tweet.author.name
    row["created_at"] = tweet.created_at
    try:
        print("has hashtags")
        row["hashtags"] = tweet.entities["hashtags"]
    except AttributeError:
        row["hashtags"] = []
    row["text"] = tweet.text

    print(row)

print(public_tweets.completed_in)
print(public_tweets.query)
print(public_tweets.count)
