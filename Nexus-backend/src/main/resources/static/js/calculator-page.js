let inputField = document.getElementById("inputField");

// helper function
function encodeOperator(operator) {
    if (operator === "+") {
        return "%2B"
    } else if (operator === "/") {
        return "%2F"
    } else if (operator === "*") {
        return "%2A"
    } else {
        return operator
    }
}

function resetField() {
    inputField.value = "";
}

function addString(String) {
    inputField.value += String;
}
async function submitForm() {

    // create fetch url
    let url = "http://localhost:8080/calculateJSON";
    console.log(url);

    // decode input
    let input = inputField.value;
    input = input.split("").map(encodeOperator).join("");
    console.log(input);

    let queryString = "?input=" + input;
    console.log(queryString)

    await fetch(url + queryString)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('response success');
            return response.text();
        })
        .then(text => {
            console.log('Response:', text);

            // Create a new entry in the history table
            let newTr = document.createElement("tr");
            let newTh = document.createElement("th");
            let tableBody = document.getElementById("table-body");

            newTh.innerHTML = inputField.value + "=" + text;
            newTr.appendChild(newTh);
            tableBody.appendChild(newTr);

            // update input field
            inputField.value = text;

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error); // Handle errors here
        });

}