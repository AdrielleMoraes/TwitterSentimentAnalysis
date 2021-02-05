from flask import Flask, render_template, request
import os

app = Flask(__name__)

app.config['UPLOAD_FOLDER'] = 'static/uploads'

@app.route('/home')
def index():
    return {"name":"Hello World"}

@app.route('/about')
def about():
    return render_template('about.html', body_text="about")

@app.route('/process',methods=['POST'])
def process():

    if request.method == 'POST':
        print('POSTING')
        data = request.files['myFile']
        data.save(os.path.join(app.config['UPLOAD_FOLDER'], data.filename))


    return render_template('process.html', filename=os.path.join(app.config['UPLOAD_FOLDER'],data.filename))

if __name__ == '__main__':
    app.run(debug=True)

