from flask import Flask,render_template,request,jsonify
import pandas as pd
app = Flask(__name__)

df = pd.read_csv('prodotti.csv')

@app.route('/')
def homepage():
    return render_template('index.html', products=df.to_dict('records'))

@app.route('/product/get')
def products():
    return {}

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3245, debug=True)