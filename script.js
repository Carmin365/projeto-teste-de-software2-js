document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const feedback = document.getElementById('feedback');

    
    if (document.getElementById('endereco').value && document.getElementById('cep').checkValidity()) {
        feedback.textContent = 'Pedido finalizado com sucesso! Redirecionando...';
        feedback.style.color = 'green';
        
        setTimeout(() => {
    
            console.log("Pedido enviado.");
        }, 1000);
    } else {
        feedback.textContent = 'Por favor, preencha todos os campos obrigatórios corretamente.';
        feedback.style.color = 'red';
    }
});