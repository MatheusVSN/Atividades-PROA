document.addEventListener("DOMContentLoaded", function () {
    let CurrentCount = 30;
    document.write(`A bomba vai explodir em: ${CurrentCount}\n`);

    while (CurrentCount > 0) {
        setTimeout(function() {
            CurrentCount -= 1
            document.write(`A bomba vai explodir em: ${CurrentCount}\n`);
        }, 1000)
    }
})