import joblib
import numpy as np

#Vader sentiment analysis tool
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

class Classifiers():
    def __init__(self):
        # load vader
        self.vader_model = SentimentIntensityAnalyzer()

        # load bow
        model_file = "models/model.pkl"
        # Load from file -  this uses tf idf to extract features from data
        self.bow_model = joblib.load(model_file)

    def calculateResult(self, score):
        result = "Neutral"
        if score >= 0.05:
            result = "Positive"

        if score <= -0.05:
            result = "Negative"
        
        return result

    def classifyBow(self, text):
        bow_score = self.calculateResult(self.bow_model.predict([text]))
        return bow_score

    def classifyVader(self, text):
        score = self.vader_model.polarity_scores(text)
        vader_score = self.calculateResult(score["compound"])
        return vader_score