const cadastros = [
    {
        user: 'admin',
        pass: 'admin'
    },
    {
        user: 'moises',
        pass: '1234'
    },
    {
        user: 'eve',
        pass: '1234'
    }
]

function acesso(){
    var login = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    var validacao = false

    for (var i in cadastros){
        if (login == cadastros[i].user && senha == cadastros[i].pass){
            validacao = true
            break
        }
    };

    if (validacao == true){
        window.open ("../Adocao/adocao.html")
    }
    else{
        alert('Usuário ou senha inválidos')
    }
}