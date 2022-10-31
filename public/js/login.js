const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.getElementById('userName-login').value.trim();
    const password = document.getElementById('password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        // const { user } = await response.json()
        if (response.ok) {
            document.location.replace(`/`);
        } else {
            alert('Failed to log in.');
        }
    }
};

const submitBtn = document.getElementById('logInBTN');
submitBtn.addEventListener('click', loginFormHandler);
