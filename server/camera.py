import cv2
from Facial_expression.model import FacialExpressionModel
import numpy as np

facec = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
model = FacialExpressionModel("./Facial_expression/model.json", "./Facial_expression/model_weights.h5")
font = cv2.FONT_HERSHEY_SIMPLEX

class VideoCamera(object):
    

    def __init__(self):
        self.video = cv2.VideoCapture(0)
        self.var = 30
        self.previous_pred = "Neutral"

    def __del__(self):
        self.video.release()

    # returns camera frames along with bounding boxes and predictions
    def get_frame(self):
        _, fr = self.video.read()
        gray_fr = cv2.cvtColor(fr, cv2.COLOR_BGR2GRAY)
        faces = facec.detectMultiScale(gray_fr, 1.3, 5)

        
        for (x, y, w, h) in faces:
            
            fc = gray_fr[y:y+h, x:x+w]

            roi = cv2.resize(fc, (48, 48))

            if self.var == 0:
                pred = model.predict_emotion(roi[np.newaxis, :, :, np.newaxis])
                self.previous_pred = pred
                
                self.var = 30

            self.var = self.var - 1
            cv2.putText(fr, self.previous_pred, (x, y), font, 1, (255, 255, 0), 2)
            cv2.rectangle(fr,(x,y),(x+w,y+h),(255,0,0),2)

        _, jpeg = cv2.imencode('.jpg', fr)

        return jpeg.tobytes()
