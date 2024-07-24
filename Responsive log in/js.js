document.getElementById('toggleForm').addEventListener('click', function(event) {
    event.preventDefault();
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const formTitle = document.getElementById('formTitle');
    const toggleText = document.getElementById('toggleForm');

    if (signInForm.style.display === 'none') {
        signInForm.style.display = 'block';
        signUpForm.style.display = 'none';
        formTitle.textContent = 'Sign In';
        toggleText.textContent = "Don't have an account? Sign Up";
    } else {
        signInForm.style.display = 'none';
        signUpForm.style.display = 'block';
        formTitle.textContent = 'Sign Up';
        toggleText.textContent = 'Already have an account? Sign In';
    }
});
