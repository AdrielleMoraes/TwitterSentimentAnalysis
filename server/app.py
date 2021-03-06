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
    print(apiResponse)
    return apiResponse

if __name__ == '__main__':
    app.run(debug=True)

