// JavaScript for Login Type Selection and Navigation
document.getElementById('proceed-btn').addEventListener('click', function() {
    document.querySelector('.login-type-section').classList.add('hidden');
    document.getElementById('login-page').classList.remove('hidden');
});

document.getElementById('employer-login').addEventListener('click', function() {
    document.getElementById('login-type-title').textContent = 'Login as Employer';
});

document.getElementById('freelancer-login').addEventListener('click', function() {
    document.getElementById('login-type-title').textContent = 'Login as Freelancer';
});
