document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const successMsg = document.getElementById('successMessage');
    form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        if (validateForm()) {
            saveData();
            successMsg.style.display = 'block';
            form.reset();
            setTimeout(() => successMsg.style.display = 'none', 3000);
        }
    });
    form.addEventListener('input', (e) => {
        const input = e.target; 
        input.classList.remove('input-error');
        const errorSpan = input.parentElement.querySelector('.error-text');
        if (errorSpan) errorSpan.style.display = 'none';
        if (input.name === 'gender') {
            document.getElementById('genderFieldset').classList.remove('input-error');
            document.getElementById('genderError').style.display = 'none';
        }
    });
    function validateForm() {
        let isValid = true;
        const showError = (inputId, condition, errorMessage) => {
            const input = document.getElementById(inputId);
            const errorSpan = document.getElementById(inputId + 'Error');
            if (condition) {
                input.classList.add('input-error');
                errorSpan.innerText = errorMessage;
                errorSpan.style.display = 'block';
                isValid = false;
            }
        };
        showError('name', document.getElementById('name').value.trim() === '', 'Full Name is required');
        const email = document.getElementById('email').value;
        showError('email', email === '' || !email.includes('@'), 'Valid email is required');
        const pass = document.getElementById('password').value;
        showError('password', pass.length < 6, 'Password needs at least 6 characters');
        const confirmPass = document.getElementById('confirmPassword').value;
        showError('confirmPassword', confirmPass === '' || confirmPass !== pass, 'Passwords do not match');
        showError('country', document.getElementById('country').value === '', 'Please select a country');
        if (!document.querySelector('input[name="gender"]:checked')) {
            document.getElementById('genderFieldset').classList.add('input-error');
            document.getElementById('genderError').innerText = 'Please select a gender';
            document.getElementById('genderError').style.display = 'block';
            isValid = false;
        }
        return isValid;
    }
    function saveData() {
        const userData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            dob: document.getElementById('dob').value,
            country: document.getElementById('country').value,
            gender: document.querySelector('input[name="gender"]:checked').value,
            skills: []
        };
        document.querySelectorAll('input[name="skills"]:checked').forEach(skill => {
            userData.skills.push(skill.value);
        });
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
    }
});
