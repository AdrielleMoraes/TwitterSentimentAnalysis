from model import TweetPolarityModel
import numpy as np

model = TweetPolarityModel("Models/model.json", "Models/model_weights_v0.h5")

def predictText(text):
    return model.predict_polarity(text)