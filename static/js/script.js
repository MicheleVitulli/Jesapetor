document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        {
            id: 1,
            text: "Sei maggiorenne?",
            type: "boolean", // true or false question
            next: (answer) => answer ? 2 : 3, // Determines next question based on answer
        },
        {
            id: 2,
            text: "Acconsenti al trattamento dei dati personali?",
            type: "boolean",
            next: () => 4, // Always goes to question 4
        },
        {
            id: 3,
            text: "Sei interessato a ricevere informazioni sui nostri prodotti per giovani?",
            type: "boolean",
            next: () => 4, // Also goes to question 4, for a different path
        },
        {
            id: 4,
            text: "Hai esperienza con i nostri prodotti?",
            type: "boolean",
            next: () => null, // End of the questionnaire
        },
    ];

    let currentQuestionIndex = 0;

    function displayQuestion(question) {
        const container = document.getElementById('questionContainer');
        container.innerHTML = `<div class="mb-3">
            <label class="form-label">${question.text}</label>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="question${question.id}" value="true">
                <label class="form-check-label">Sì</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="question${question.id}" value="false">
                <label class="form-check-label">No</label>
            </div>
        </div>`;
    }

    function setupNextQuestion() {
        const nextButton = document.getElementById('nextQuestion');
        nextButton.addEventListener('click', function() {
            const answer = document.querySelector(`input[name="question${questions[currentQuestionIndex].id}"]:checked`)?.value === "true";
            const nextIndex = questions[currentQuestionIndex].next(answer);
            if (nextIndex !== null) {
                currentQuestionIndex = questions.findIndex(q => q.id === nextIndex);
                displayQuestion(questions[currentQuestionIndex]);
            } else {
                // Handle end of questionnaire
                document.getElementById('questionContainer').innerHTML = "<p>Thank you for completing the questionnaire.</p>";
                nextButton.style.display = 'none';
            }
        });
    }

    if (questions.length > 0) {
        displayQuestion(questions[currentQuestionIndex]);
        setupNextQuestion();
    }
});

