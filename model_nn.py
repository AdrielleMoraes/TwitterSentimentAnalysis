from model import FacialExpressionModel
import numpy as np

model = TweetPolarityModel("Models/model.json", "Models/model_weights.h5")

def predictText(text):
    return model.predict_polarity(text)