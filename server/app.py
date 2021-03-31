from flask import Flask, render_template, request, Response
import twitterAPI as api
from camera import VideoCamera

app = Flask(__name__)


@app.route('/retrieveFromAPI')
def retrieveFromAPI():
    query = request.args.get('query')

    if query is None:
        return "Argument not provided"

    query = query + " -filter:retweets replies"
    
    #TODO sanitize query
    apiResponse = api.queryOnTwitterAPI(query=query, count=20)
    return apiResponse


@app.route('/camera')
def returnCamera():
    return("Hello")

def gen(camera):
    while True:
        frame = camera.get_frame()
        print(b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

@app.route('/video_feed')
def video_feed():
    return Response(gen(VideoCamera()),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug=True, port=8000)

