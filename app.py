from flask import Flask, request, jsonify, redirect, url_for, render_template, session

app = Flask(__name__)
app.secret_key = 'your_secret_key_here'

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        results = request.json.get('results')
        session['results'] = results
        return jsonify({"redirect": url_for('results')})

    if request.method == 'GET':
        return render_template('index.html')

@app.route('/results')
def results():
    results = session.get('results', None)
    session['results'] = None
    aree = []
    if results != None:
        for elem in results:
            if elem == 'm':
                aree.append('Marketing')
            if elem == 'b':
                aree.append('Business Development')
            if elem == 'h':
                aree.append('Human Resources')
            if elem == 'a':
                aree.append('Audit')
            if elem == 'i':
                aree.append('IT')
    numero = len(aree)

    if results != None:
        return render_template('results.html', aree=aree, numero=numero)
    else:
        print("Pagina non disponibile, torna alla Home")
        return """
                <h3>Pagina non disponibile, torna alla <a href="/">Home</a></h3>
                """

if __name__ == '__main__':
    app.run(debug=True)
