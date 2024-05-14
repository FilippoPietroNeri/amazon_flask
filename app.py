from flask import Flask,render_template,request,jsonify
import pandas as pd
app = Flask(__name__)

itemsPerPage = 7

df = pd.read_csv('prodotti.csv')

@app.route('/')
def homepage():
    page = request.args.get('page', type=int) or 1 # perchè se è 0 da errore 😭😭😭😭
    start_index = (page - 1) * itemsPerPage
    print(start_index)
    end_index = start_index + itemsPerPage
    print(end_index)
    pageProducts = df.iloc[start_index:end_index]
    print(pageProducts)
    num_pages = len(df) // itemsPerPage + (1 if len(df) % itemsPerPage > 0 else 0) # devo scoprire cosa fa perchè non l'ho ancora capito!!
    print(num_pages)
    return render_template('index.html', page=page, num_pages=num_pages, products=pageProducts.to_dict('records'), prodlens=len(pageProducts.to_dict('records')))

@app.route('/productget', methods=['POST'])
def products():
    if request.method == "POST":
        json = request.get_json()
        identifier = json.get('identifier')
        print(identifier)
        getData = df.iloc[identifier]
        print(getData)
        return { "code": 200, "data": getData.to_json(orient='records') }

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3245, debug=True)