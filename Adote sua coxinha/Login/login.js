// Para adicionar mais um usuário, coloque {user: 'nome do usuário', pass: 'senha'}.
const cadastros = [
    {
        user: 'admin',
        pass: 'admin'
    }  //Não esqueça de colocar virgula antes de criar um novo usuário.
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
