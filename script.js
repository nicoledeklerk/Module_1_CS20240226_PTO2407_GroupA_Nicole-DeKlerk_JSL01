function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
    let correctPattern = /^pet_[a-zA-Z0-9]+$/;

        // Check if input starts with 'pet_' and followed by alphanumeric characters
        if (correctPattern.test(input)) {
            result = 'Valid Syntax' + '\u{1F7E2}'; // The input is valid
        } else {
            result = 'Invalid Syntax' + '\u{1F534}'; // The input is invalid
        }

            document.getElementById('result').innerText = result;
}


