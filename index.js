function counter(event) {
    let elt = document.createElement('h2');
    let count = 0;
    let pare = document.getElementById(event.id)
    if (pare.hasChildNodes()) {
        const counterSpan = document.getElementById(`${event.id}h1`);
        count = counterSpan.textContent
        pare.addEventListener("click", () => {
            count++;
            counterSpan.textContent = count;
        });
    } else {
        elt.textContent = 1;
        elt.setAttribute('id', `${event.id}h1`)
        document.getElementById(event.id).appendChild(elt)
    }
}

function reset() {
    document.getElementById("redh1").remove();
    document.getElementById("greenh1").remove();
    document.getElementById("yellowh1").remove();
}