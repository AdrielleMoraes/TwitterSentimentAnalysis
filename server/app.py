from flask import Flask, render_template, request, Response
from flask_cors import CORS, cross_origin
import twitterAPI as api


app = Flask(__name__, static_folder='client/build', static_url_path='')
cors = CORS(app)


@app.route('/api')
@cross_origin()
def Welcome():
    return "Welcome to the API!!!"


@app.route('/api/tweets')
@cross_origin()
def retrieveFromAPI():
    query = request.args.get('query')

    if query is None:
        return "Argument not provided"

    query = query + " -filter:retweets replies"
    
    #TODO sanitize query
    apiResponse = api.queryOnTwitterAPI(query=query, count=20)
    return apiResponse

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True, port=8000)

