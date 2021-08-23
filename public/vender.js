const reqs = document.querySelector("#requests");

function LoadData(params) {
    fetch('/orders')
        .then((res) => res.json())
        .then((res) => {
            for (let d in res) {
                let el = document.createElement("div");
                el.append(`Name: ${res[d].name} Quantity: ${res[d].q} Phone: ${res[d].phone}`);
                reqs.appendChild(el);
            }
        })
}

window.addEventListener("load", LoadData);

