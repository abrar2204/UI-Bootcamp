const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const formJSON = [
    {
        type: 'email',
        pattern: regex,
        name: 'Your Email'
    },
    {
        type: "number",
        minValue: 10,
        maxValue: 20,
        name: 'Your Number'
    },
    {
        type: 'string',
        minLength: 10,
        maxLength: 20,
        name: 'Your Name'
    }
]

const createForm = () => {

    const formElement = document.getElementById('form');

    for (let elem of formJSON) {
        const inputElement = document.createElement('input');
        const labelElement = document.createElement('label');

        labelElement.innerHTML = elem.name;
        labelElement.htmlFor = elem.name;

        inputElement.type = elem.type;
        inputElement.name = elem.name;

        if (elem.type === 'number') {
            inputElement.min = elem.minValue;
            inputElement.max = elem.maxValue;
        } else if (elem.type === 'string') {
            inputElement.minLength = elem.minLength;
            inputElement.maxLength = elem.maxLength;
        } else if (elem.type === 'email') {
            inputElement.pattern = elem.pattern;
        }

        formElement.appendChild(labelElement);
        formElement.appendChild(inputElement);
    }

    const submitButton = document.createElement('button');
    submitButton.innerHTML = 'Submit'
    submitButton.type = 'submit'
    formElement.appendChild(submitButton);

}
createForm();