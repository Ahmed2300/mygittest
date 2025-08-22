    function clickHandler() {
        const input = document.getElementById('inputField');
        const output = document.getElementById('outputField');
        output.textContent = `You entered: ${input.value}`;
    }
    document.getElementById('submitButton').addEventListener('click', clickHandler);