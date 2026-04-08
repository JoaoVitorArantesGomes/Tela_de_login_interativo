// PEGAR ELEMENTOS
const btnLogin = document.getElementById('btnLogin');
const btnCadastro = document.getElementById('btnCadastro');
const formLogin = document.getElementById('formLogin');
const formCadastro = document.getElementById('formCadastro');
const btnEntrar = document.querySelector('.btn-entrar');
const linkLogin = document.getElementById('linkLogin');

// FUNÇÃO MOSTRAR/ESCONDER
function mostrarForm(formMostrar) {
    formLogin.style.display = formMostrar === formLogin ? 'block' : 'none';
    formCadastro.style.display = formMostrar === formCadastro ? 'block' : 'none';
}

// ATIVAR ABA
function ativarAba(btnAtivo, form) {
    // Remove ativa de todos
    document.querySelectorAll('.aba').forEach(btn => btn.classList.remove('ativa'));
    // Ativa o clicado
    btnAtivo.classList.add('ativa');
    // Mostra formulário
    mostrarForm(form);
}

// CLIQUE ABAS
btnLogin.addEventListener('click', () => ativarAba(btnLogin, formLogin));
btnCadastro.addEventListener('click', () => ativarAba(btnCadastro, formCadastro));

// LINKS
document.querySelector('.rodape a').addEventListener('click', (e) => {
    e.preventDefault();
    ativarAba(btnCadastro, formCadastro);
});

linkLogin.addEventListener('click', (e) => {
    e.preventDefault();
    ativarAba(btnLogin, formLogin);
});

// LOGIN (formLogin) - COM VALIDAÇÃO NATIVE + CUSTOM
document.querySelector('#formLogin button').addEventListener('click', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    
    // Validação NATIVE (required) + custom
    if (!email || !senha) {
        alert('Preencha email e senha!');
        return;
    }
    
    if (!email.includes('@')) {
        alert('Email inválido!');
        return;
    }
    
    alert(`Login realizado: ${email} ✅`);
});

// CADASTRO (formCadastro)
document.getElementById('formCad').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('emailCad').value;
    const senha = document.getElementById('senhaCad').value;
    const confSenha = document.getElementById('confSenha').value;
    
    // Validações
    if (!nome || !email || !senha) return alert('Preencha todos os campos!');
    if (senha !== confSenha) return alert('Senhas diferentes!');
    if (!email.includes('@')) return alert('Email inválido!');
    
    alert(`Cadastro: ${nome} ✅\nEmail: ${email}`);
});
// 👉 BOTÃO ENTRAR
document.querySelector(".btn-entrar").addEventListener("click", function() {
    
    // Esconde login
    document.querySelector(".pagina").style.display = "none";
    
    // Mostra loja
    document.getElementById("loja").style.display = "block";
});