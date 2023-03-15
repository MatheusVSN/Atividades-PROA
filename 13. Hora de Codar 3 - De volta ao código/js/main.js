document.addEventListener("DOMContentLoaded", function () {
    const QUESTIONS = {
        "1-6": document.getElementById("questions1-6"),
        "7-11": document.getElementById("questions7-11"),
    }
    const Question1_6 = document.getElementById("1-6click");
    const Question7_11 = document.getElementById("7-11click");

    function ToggleElements(Argument) {
        Question1_6.setAttribute("class", Argument == 1 ? "active" : "notActive");
        Question7_11.setAttribute("class", Argument == 2 ? "active" : "notActive");

        QUESTIONS["1-6"].style.display = Argument == 1 ? "block" : "none";
        QUESTIONS["7-11"].style.display = Argument == 2 ? "block" : "none";
    }

    Question1_6.addEventListener("click", function () {
        ToggleElements(1);
    })
    Question7_11.addEventListener("click", function () {
        ToggleElements(2);
    })
});
