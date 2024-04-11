console.log('Hello World!');
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var emailLogin = document.getElementById('emailLogin').value;
  var senhaLogin = document.getElementById('senhaLogin').value;

  if(emailLogin === 'inovama@teste.com' && senhaLogin === '1234') {
    window.location.href = 'paginas/logado.html'; 
    
  } else {
    document.getElementById('quadrado').textContent = 'senha errada';
  }
});