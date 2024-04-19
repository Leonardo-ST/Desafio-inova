console.log('Hello World!');
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var emailLogin = document.getElementById('emailLogin').value;
  var senhaLogin = document.getElementById('senhaLogin').value;

  if(emailLogin === 'inovama@teste.com' && senhaLogin === '12345678') {
    window.location.href = 'paginas/logado.html'; 
    
  } else {
    document.getElementById('quadrado').textContent = 'Senha incorreta';
  }
});

fetch('componentes/footer.html')
  .then(response => response.text())
  .then(data => document.querySelector('.footer').innerHTML = data);
