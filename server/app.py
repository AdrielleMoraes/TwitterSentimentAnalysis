from flask import Flask, render_template, request, Response
from flask_cors import CORS, cross_origin
import twitterAPI


app = Flask(__name__)
cors = CORS(app)
api = twitterAPI.TweetsQuery()


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

    query = query
    
    #TODO sanitize query
    apiResponse = api.queryOnTwitterAPI(query=query)
    return apiResponse

@app.route('/')
def serve():
    return("Welcome")

if __name__ == '__main__':
    app.run(debug=True, port=8000)

