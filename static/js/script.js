import { questions } from './questions.js';
document.addEventListener('DOMContentLoaded', function () {
    let currentQuestionIndex = 0;
    let answersDictionary = {};
    let answerArray = [];

    function displayQuestion(question) {
        const container = document.getElementById('questionContainer');
        container.innerHTML = `
        <div class="mb-3">
            <label class="form-label">${question.text}</label>
            <div class="form-check">
                <input type="radio" class="nextQuestion btn-check" name="question${question.id}" id="option1-${question.id}" value="true" autocomplete="off">
                <label class="btn btn-secondary" for="option1-${question.id}">Yes</label>
            </div>
            <div class="form-check">
                <input type="radio" class="nextQuestion btn-check" name="question${question.id}" id="option2-${question.id}" value="false" autocomplete="off">
                <label class="btn btn-secondary" for="option2-${question.id}">No</label>
            </div>
        </div>`;
        setupNextQuestion();
    }

    function setupNextQuestion() {
        let results;
        const nextButtons = document.querySelectorAll('.nextQuestion');
        nextButtons.forEach(button => {
            button.addEventListener('change', function () {
                const answer = document.querySelector(`input[name="question${questions[currentQuestionIndex].id}"]:checked`).value === "true";
                // Dictionary operations
                answersDictionary[currentQuestionIndex] = answer;
                console.log(answersDictionary)
                // Array operations
                if (answer === true) {
                    var temp_array = questions[currentQuestionIndex].value_true;
                } else {
                    var temp_array = questions[currentQuestionIndex].value_false;
                }
                answerArray.push(...temp_array);
                const anArray = answerArray;
                var nextIndex = questions[currentQuestionIndex].next(answer);
                //check se l'id della domanda è it (ultime) e ho raggiunto 3 in qualche categoria
                if (currentQuestionIndex > 15) {
                    results = checkRisposte(anArray);
                    if (results.length > 0) {
                        console.log("HAI TROVATO LA TUA AREA");
                        console.log(results);
                        console.log("SEI FELICE?");
                        nextIndex = null;
                    }
                }
                console.log(answerArray);
                // end

                if (nextIndex !== null) {
                    currentQuestionIndex = questions.findIndex(q => q.id === nextIndex);
                    displayQuestion(questions[currentQuestionIndex]);
                } else {
                    submitResults(results);
                }
            });
        });
    }

    function checkRisposte(anArray) {
        console.log("check risposte");
        const count_marketing = anArray.filter(element => element === "m").length;
        const count_bd = anArray.filter(element => element === "b").length;
        const count_audit = anArray.filter(element => element === "a").length;
        const count_hr = anArray.filter(element => element === "h").length;
        const count_it = anArray.filter(element => element === "i").length;

        var results = [];
        if (count_marketing > 2) { results.push('m'); }
        if (count_bd > 2) { results.push('b'); }
        if (count_audit > 2) { results.push('a'); }
        if (count_hr > 2) { results.push('h'); }
        if (count_it > 2) { results.push('i'); }
        return results;
    }

    // When ready to submit the results
    function submitResults(results) {
        fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ results: results }),
        })
        .then(response => response.json()) // Assicurati che il server restituisca una risposta JSON
        .then(data => {
            if (data.redirect) {
                // Reindirizza l'utente all'URL ricevuto dalla risposta del server
                window.location.href = data.redirect;
            }
        })
        .catch((error) => {
            console.error('Errore:', error);
        });
    }
    

    


    displayQuestion(questions[currentQuestionIndex]);
});
