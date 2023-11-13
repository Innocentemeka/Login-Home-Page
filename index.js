const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = form.username.value;
  const password = form.password.value;

  const authen = auth(username, password)

  if (authen) {
    window.location.href = "home.html";
    alert('Login Successfully')
  } else {
    alert('Wrong username/password');
  }
});

function auth(username,password) {
  if(username === 'innocent' && password === 'password') {
    return true;
  } else {
    return false;
  }
}