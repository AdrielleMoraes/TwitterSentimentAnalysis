from flask import Flask, render_template, request
import twitterAPI as api

app = Flask(__name__)


@app.route('/retrieveFromAPI')
def retrieveFromAPI():
    query = request.args.get('query')+ " -filter:retweets"
    #TODO sanitize query
    print(query)
    apiResponse = api.queryOnTwitterAPI(query=query)
    return apiResponse

@app.route('/about')
def about():
    username = request.args.get('username')
    return {"name":username}


if __name__ == '__main__':
    app.run(debug=True)

