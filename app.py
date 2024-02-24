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
    if results != None:
        return render_template('results.html', results=results)
    elif results == None:
        return "Pagina non disponibile, torna alla Home"

if __name__ == '__main__':
    app.run(debug=True)
