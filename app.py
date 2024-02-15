from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        # Process the form data
        nome = request.form.get('nome')
        email = request.form.get('email')
        genere = request.form.get('genere')
        eta = request.form.get('eta')
        feedback = request.form.get('feedback')
        
        # Here, you can do something with the form data, like storing it or sending it elsewhere
        print("Form Data Received:", nome, email, genere, eta, feedback)
        
        # After processing the data, you can redirect the user or return a response
        return render_template("results.html")

    # If it's a GET request, just render the template
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
