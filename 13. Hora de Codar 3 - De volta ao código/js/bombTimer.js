document.addEventListener("DOMContentLoaded", function () {
    document.write(`A bomba vai explodir em`);
    function mainLoop(CurrentCount) {
        setTimeout(function(){
            document.write(`A bomba vai explodir em: ${CurrentCount}<br>`);
            CurrentCount -= 1
            if (CurrentCount >= 0) {
                mainLoop(CurrentCount);
            } else {
                document.write("EXPLOSÃO");
            }
        }, 100)
    }

    mainLoop(30);
})