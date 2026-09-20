/* =====================================================
   LEARNQUEST MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   STUDENT DATA
===================================================== */

let student = JSON.parse(
    localStorage.getItem("studentData")
);


if (!student) {

    student = {

        xp: 0,

        level: 1,

        stars: 0,

        streak: 0,

        totalQuestions: 0,

        correctAnswers: 0,

        weakTopics: {},

        lastStudyDate: null

    };

    saveStudent();

}



/* =====================================================
   SAVE STUDENT
===================================================== */

function saveStudent() {

    localStorage.setItem(
        "studentData",
        JSON.stringify(student)
    );

}



/* =====================================================
   LEVEL CALCULATION
===================================================== */

function calculateLevel() {

    student.level =
        Math.floor(student.xp / 100) + 1;

}



/* =====================================================
   START QUEST
===================================================== */

function startQuest() {

    const input =
        document.getElementById("topicInput");

    if (!input) return;


    const topic =
        input.value.trim();


    const message =
        document.getElementById("homeMessage");


    if (topic === "") {

        message.innerText =
            "⚠️ Please enter a topic first.";

        return;

    }


    localStorage.setItem(
        "selectedTopic",
        topic
    );


    window.location.href =
        "game.html";

}



/* =====================================================
   LOAD HOME DATA
===================================================== */

function loadHomeData() {

    const xp =
        document.getElementById("homeXP");

    const level =
        document.getElementById("homeLevel");

    const streak =
        document.getElementById("homeStreak");

    const navStreak =
        document.getElementById("navStreak");


    if (xp)
        xp.innerText = student.xp;


    if (level)
        level.innerText = student.level;


    if (streak)
        streak.innerText =
            student.streak + " days";


    if (navStreak)
        navStreak.innerText =
            student.streak;

}



/* =====================================================
   GAME VARIABLES
===================================================== */

let currentQuestions = [];

let currentQuestionIndex = 0;

let selectedAnswer = null;

let sessionCorrect = 0;

let sessionWrong = 0;

let sessionXP = 0;

let sessionWeakTopics = [];



/* =====================================================
   START GAME
===================================================== */

function initializeGame() {

    const topic =
        localStorage.getItem(
            "selectedTopic"
        );


    const title =
        document.getElementById(
            "gameTopic"
        );


    if (!topic || !title) return;


    title.innerText =
        topic;


    currentQuestions =
        getQuestions(topic);


    currentQuestionIndex = 0;

    selectedAnswer = null;

    sessionCorrect = 0;

    sessionWrong = 0;

    sessionXP = 0;

    sessionWeakTopics = [];


    showQuestion();

}



/* =====================================================
   SHOW QUESTION
===================================================== */

function showQuestion() {

    const question =
        currentQuestions[
            currentQuestionIndex
        ];


    const number =
        document.getElementById(
            "questionNumber"
        );


    const questionText =
        document.getElementById(
            "questionText"
        );


    const optionsContainer =
        document.getElementById(
            "options"
        );


    const feedback =
        document.getElementById(
            "feedback"
        );


    const nextButton =
        document.getElementById(
            "nextButton"
        );


    const progress =
        document.getElementById(
            "progressFill"
        );


    number.innerText =
        `Question ${currentQuestionIndex + 1}
         / ${currentQuestions.length}`;


    questionText.innerText =
        question.question;


    optionsContainer.innerHTML =
        "";


    selectedAnswer = null;


    feedback.className =
        "feedback";


    feedback.innerHTML =
        "";


    nextButton.style.display =
        "none";


    question.options.forEach(
        (option, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "option";


            button.innerText =
                `${String.fromCharCode(65 + index)}. ${option}`;


            button.onclick = function() {

                selectAnswer(
                    index,
                    button
                );

            };


            optionsContainer.appendChild(
                button
            );

        }
    );


    const percentage =
        (currentQuestionIndex /
            currentQuestions.length) * 100;


    progress.style.width =
        percentage + "%";

}



/* =====================================================
   SELECT ANSWER
===================================================== */

function selectAnswer(
    selectedIndex,
    selectedButton
) {

    if (
        selectedAnswer !== null
    ) {
        return;
    }


    selectedAnswer =
        selectedIndex;


    const question =
        currentQuestions[
            currentQuestionIndex
        ];


    const allOptions =
        document.querySelectorAll(
            ".option"
        );


    allOptions.forEach(
        button => {

            button.disabled =
                true;

        }
    );


    if (
        selectedIndex ===
        question.answer
    ) {

        handleCorrectAnswer(
            question,
            selectedButton,
            allOptions
        );

    } else {

        handleWrongAnswer(
            question,
            selectedButton,
            allOptions
        );

    }

}



/* =====================================================
   CORRECT ANSWER
===================================================== */

function handleCorrectAnswer(
    question,
    selectedButton,
    allOptions
) {

    selectedButton.classList.add(
        "correct"
    );


    allOptions[
        question.answer
    ].classList.add(
        "correct"
    );


    sessionCorrect++;

    student.correctAnswers++;

    student.totalQuestions++;

    sessionXP += 10;

    student.xp += 10;

    student.stars += 1;


    calculateLevel();


    saveStudent();


    const feedback =
        document.getElementById(
            "feedback"
        );


    feedback.className =
        "feedback show correct";


    feedback.innerHTML = `
        <h3>🎉 Correct!</h3>

        <p>
            +10 XP ⭐
        </p>

        <p>
            ${question.explanation}
        </p>
    `;


    showNextButton();

}



/* =====================================================
   WRONG ANSWER
===================================================== */

function handleWrongAnswer(
    question,
    selectedButton,
    allOptions
) {

    selectedButton.classList.add(
        "wrong"
    );


    allOptions[
        question.answer
    ].classList.add(
        "correct"
    );


    sessionWrong++;

    student.totalQuestions++;


    const concept =
        question.concept;


    if (!student.weakTopics[concept]) {

        student.weakTopics[concept] = 0;

    }


    student.weakTopics[concept]++;


    sessionWeakTopics.push(
        concept
    );


    saveStudent();


    const feedback =
        document.getElementById(
            "feedback"
        );


    feedback.className =
        "feedback show wrong";


    feedback.innerHTML = `
        <h3>❌ Not quite!</h3>

        <p>
            <strong>Correct answer:</strong>
            ${question.options[question.answer]}
        </p>

        <br>

        <p>
            🧠 <strong>Concept to improve:</strong>
            ${concept}
        </p>

        <br>

        <p>
            💡 ${question.explanation}
        </p>

        <br>

        <p>
            🎮 Don't worry!
            Mistakes help us discover what
            you need to practice.
        </p>
    `;


    showNextButton();

}



/* =====================================================
   NEXT BUTTON
===================================================== */

function showNextButton() {

    const button =
        document.getElementById(
            "nextButton"
        );


    button.style.display =
        "block";


    if (
        currentQuestionIndex ===
        currentQuestions.length - 1
    ) {

        button.innerText =
            "🏆 Finish Quest";

    } else {

        button.innerText =
            "Next Question →";

    }

}



/* =====================================================
   NEXT QUESTION
===================================================== */

function nextQuestion() {

    if (
        currentQuestionIndex ===
        currentQuestions.length - 1
    ) {

        finishQuest();

        return;

    }


    currentQuestionIndex++;

    showQuestion();

}



/* =====================================================
   FINISH QUEST
===================================================== */

function finishQuest() {

    student.streak++;

    saveStudent();


    const resultData = {

        correct:
            sessionCorrect,

        wrong:
            sessionWrong,

        xp:
            sessionXP,

        total:
            currentQuestions.length,

        weakTopics:
            sessionWeakTopics

    };


    localStorage.setItem(
        "lastResult",
        JSON.stringify(resultData)
    );


    window.location.href =
        "result.html";

}



/* =====================================================
   LOAD RESULT
===================================================== */

function loadResult() {

    const result =
        JSON.parse(
            localStorage.getItem(
                "lastResult"
            )
        );


    if (!result) return;


    const correct =
        document.getElementById(
            "resultCorrect"
        );


    const wrong =
        document.getElementById(
            "resultWrong"
        );


    const xp =
        document.getElementById(
            "resultXP"
        );


    const accuracy =
        document.getElementById(
            "resultAccuracy"
        );


    if (correct)
        correct.innerText =
            result.correct;


    if (wrong)
        wrong.innerText =
            result.wrong;


    if (xp)
        xp.innerText =
            "+" + result.xp;


    if (accuracy) {

        accuracy.innerText =
            Math.round(
                (result.correct /
                    result.total) * 100
            ) + "%";

    }


    const weakContainer =
        document.getElementById(
            "resultWeakTopics"
        );


    if (
        weakContainer &&
        result.weakTopics.length > 0
    ) {

        weakContainer.innerHTML =
            result.weakTopics
                .map(
                    topic =>
                        `<div class="weak-topic">
                            ⚠️ ${topic}
                         </div>`
                )
                .join("");

    } else if (weakContainer) {

        weakContainer.innerHTML =
            "🎉 No major weak areas detected!";

    }

}



/* =====================================================
   DASHBOARD
===================================================== */

function loadDashboard() {

    const xp =
        document.getElementById(
            "dashboardXP"
        );


    const level =
        document.getElementById(
            "dashboardLevel"
        );


    const streak =
        document.getElementById(
            "dashboardStreak"
        );


    const stars =
        document.getElementById(
            "dashboardStars"
        );


    const progress =
        document.getElementById(
            "levelProgress"
        );


    if (xp)
        xp.innerText =
            student.xp;


    if (level)
        level.innerText =
            student.level;


    if (streak)
        streak.innerText =
            student.streak;


    if (stars)
        stars.innerText =
            student.stars;


    if (progress) {

        const levelXP =
            student.xp % 100;

        progress.style.width =
            levelXP + "%";

    }


    const weakContainer =
        document.getElementById(
            "weakTopics"
        );


    if (!weakContainer) return;


    const topics =
        Object.entries(
            student.weakTopics
        );


    if (topics.length === 0) {

        weakContainer.innerHTML =
            "🎉 You don't have any detected weak topics yet.";

        return;

    }


    topics.sort(
        (a, b) => b[1] - a[1]
    );


    weakContainer.innerHTML =
        topics
            .slice(0, 5)
            .map(
                item => `

                <div class="weak-topic">

                    <span>
                        ⚠️ ${item[0]}
                    </span>

                    <strong>
                        ${item[1]} mistakes
                    </strong>

                </div>

                `
            )
            .join("");

}



/* =====================================================
   INITIALIZE PAGE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadHomeData();

        loadResult();

        loadDashboard();

        initializeGame();

    }
);