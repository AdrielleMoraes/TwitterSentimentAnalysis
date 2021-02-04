from env import ACESS_TOKEN, ACESS_TOKEN_SECRET, API_KEY, API_KEY_SECRET
import tweepy

auth = tweepy.OAuthHandler(API_KEY, API_KEY_SECRET)
auth.set_access_token(ACESS_TOKEN, ACESS_TOKEN_SECRET)

api = tweepy.API(auth)

public_tweets = api.home_timeline()
for tweet in public_tweets:
    print(tweet.text)
