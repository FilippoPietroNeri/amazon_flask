from flask import Flask,render_template,request,jsonify
import pandas as pd
app = Flask(__name__)

df = pd.read_csv('prodotti.csv')

@app.route('/')
def homepage():
    return render_template('index.html', products=df.to_dict('records'))

@app.route('/product/get', methods=['POST'])
def products():
    if request.method == "POST":
        json = request.get_json()
        productName = json.get('productName')
        getData = df[df['Nome'] == productName]
        return { "code": 200, "data": getData.to_json() }

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3245, debug=True)