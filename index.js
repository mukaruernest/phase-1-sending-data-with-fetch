function submitData(name, email) {
    const data = { name: name, email: email };
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
    };
    return fetch('http://localhost:3000/users', options)
        .then(response => response.json())
        .then(data => {
            const newId = data.id;
            //Append newId to the DOM
            const element = document.createElement("P");
            const text = document.createTextNode("New User ID: " + newId);
            element.appendChild(text);
            document.body.appendChild(element);
        })
        .catch(error => {
            //Append error message to the DOM
            const element = document.createElement("P");
            const text = document.createTextNode("Error: " + error.message);
            element.appendChild(text);
            document.body.appendChild(element);
        });
}