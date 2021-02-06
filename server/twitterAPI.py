from APIkeys import ACESS_TOKEN, ACESS_TOKEN_SECRET, API_KEY, API_KEY_SECRET
import tweepy

def queryOnTwitterAPI(query = "twitter", count= 3):
    auth = tweepy.OAuthHandler(API_KEY, API_KEY_SECRET)
    auth.set_access_token(ACESS_TOKEN, ACESS_TOKEN_SECRET)
    api = tweepy.API(auth)

    public_tweets = api.search(query, count= count)
    tweets = []
    for tweet in public_tweets:
        row = {}
        row["id"] = tweet.id
        row["author_name"] = tweet.author.name
        row["created_at"] = tweet.created_at
        row["favourite_count"] = tweet.favorite_count
        try:
            row["hashtags"] = tweet.entities["hashtags"]
        except AttributeError:
            row["hashtags"] = []
        row["text"] = tweet.text
        tweets.append(row)

    data_obj = {"completed_in": public_tweets.completed_in, "query":public_tweets.query, "count":public_tweets.count, "tweets": tweets}
    return data_obj

if __name__ == "__main__":
    print(queryOnTwitterAPI())
