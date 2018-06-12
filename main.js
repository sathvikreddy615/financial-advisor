const parentDiv = document.querySelector("#parentDiv");
const frag = document.createDocumentFragment();

// #1 ----->

const FAinfo = () => {
    for (let i in financialAdvisor) {
        const pEl = document.createElement("p");
        pEl.innerHTML = `${i}: ${financialAdvisor[i]}`;
        frag.appendChild(pEl);
    }
    parentDiv.appendChild(frag);
}

FAinfo();

// #2 ----->

financialAdvisor.portfolio.forEach(element => {
    for (let i in element) {
        const pEl = document.createElement("p");
        pEl.innerHTML = `${i}: ${element[i]}`;
        frag.appendChild(pEl);
    }
});

parentDiv.appendChild(frag);



