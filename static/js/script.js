document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        {
            id: 1,
            text: "Ti piace usare il computer?",
            value_true: ['m', 'a', 'i'],
            value_false: ['m', 'b', 'h'],
            type: "boolean", // true or false question
            next: (answer) => answer ? 2 : 3, // Determines next question based on answer
        },
        {
            id: 2,
            text: "Tanto tanto?",
            type: "boolean",
            value_true: ['a', 'i'],
            value_false: ['b', 'm'],
            next: () => 4, // Always goes to question 4
        },
        {
            id: 3,
            text: "Sei piu interessato a entrare in contatto con i clienti?",
            type: "boolean",
            value_true: ['m', 'b'],
            value_false: ['h', 'a'],
            next: () => 4, // Also goes to question 4, for a different path
        },
        {
            id: 4,
            text: "Ti piace jesap?",
            type: "boolean",
            value_true: [],
            value_false: ['f'],
            next: () => null, // End of the questionnaire
        },
    ];

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
        const nextButtons = document.querySelectorAll('.nextQuestion');
        nextButtons.forEach(button => {
            button.addEventListener('change', function() {
                const answer = document.querySelector(`input[name="question${questions[currentQuestionIndex].id}"]:checked`).value === "true";
                // Dictionary operations
                answersDictionary[currentQuestionIndex] = answer;
                console.log(answersDictionary)
                // Array operations
                
                if (answer === true){
                    var temp_array = questions[currentQuestionIndex].value_true;
                } else {
                    var temp_array = questions[currentQuestionIndex].value_false;
                }
                answerArray.push(...temp_array);
                console.log(answerArray);
                // end
                const nextIndex = questions[currentQuestionIndex].next(answer);
                if (nextIndex !== null) {
                    currentQuestionIndex = questions.findIndex(q => q.id === nextIndex);
                    displayQuestion(questions[currentQuestionIndex]);
                } else {
                    document.getElementById('questionContainer').innerHTML = "<p>Thank you for completing the questionnaire.</p>";
                    // If you had a separate "Next" button, you would hide it here.
                }
            });
        });
    }

    
    displayQuestion(questions[currentQuestionIndex]);
});
