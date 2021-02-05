from flask import Flask, render_template, request
import os

app = Flask(__name__)

app.config['UPLOAD_FOLDER'] = 'static/uploads'

@app.route('/home')
def index():
    return {"name":"Hello World"}

@app.route('/about')
def about():
    return {"name":"Hello World from about"}


if __name__ == '__main__':
    app.run(debug=True)

