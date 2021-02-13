from flask import Flask, render_template, request
import twitterAPI as api

app = Flask(__name__)


@app.route('/retrieveFromAPI')
def retrieveFromAPI():
    query = request.args.get('query')

    if query is None:
        return "Argument not provided"

    query = query + " -filter:retweets"
    #TODO sanitize query
    print(query)
    apiResponse = api.queryOnTwitterAPI(query=query, count=20)
    return apiResponse

@app.route('/test')
def about():
    username = request.args.get('username')
    return {"name":username}


if __name__ == '__main__':
    app.run(debug=True)

