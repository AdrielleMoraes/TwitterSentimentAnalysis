from tensorflow.keras.models import model_from_json
from tensorflow.python.keras.backend import set_session
import numpy as np

import tensorflow as tf

config = tf.compat.v1.ConfigProto()
config.gpu_options.per_process_gpu_memory_fraction = 0.15
session = tf.compat.v1.Session(config=config)
set_session(session)


class TweetPolarityModel(object):

    SENTIMENT_LIST = [-1,0, 1]

    def __init__(self, model_json_file, model_weights_file):
        # load model from JSON file
        with open(model_json_file, "r") as json_file:
            loaded_model_json = json_file.read()
            self.loaded_model = model_from_json(loaded_model_json)

        # load weights into the new model
        self.loaded_model.load_weights(model_weights_file)


    def predict_polarity(self, tweet):
        global session
        set_session(session)
        self.preds = self.loaded_model.predict(tweet)
        print (self.preds)
        #return TweetPolarityModel#.SENTIMENT_LIST[np.argmax(self.preds)]
