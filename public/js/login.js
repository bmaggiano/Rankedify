const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#userName-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/api/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        const { user } = await response.json()
        if (response.ok) {
            document.location.replace(`/list/${user.id}`);
        } else {
            alert('Failed to log in.');
        }
    }
};


document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
