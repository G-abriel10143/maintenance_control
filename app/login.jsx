// pages/LoginPage.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/header';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // Função para realizar o login
  const handleLogin = () => {
    // Simulação de lógica de autenticação básica
    if (username === 'user' && password === 'password') {
      // Aqui você poderia realizar alguma lógica de autenticação real, como uma chamada para a API de autenticação.
      // Por agora, apenas redirecionamos para a página inicial.
      router.push('/');
    } else {
      alert('Credenciais inválidas.');
    }
  };

  // Função para realizar o cadastro de um novo usuário (operação de post)
  const handleSignUp = () => {
    // Aqui você pode implementar a lógica para enviar os dados do novo usuário para o servidor (API).
    // Após o cadastro bem-sucedido, você pode redirecionar o usuário para a página de login ou realizar outra ação.
    alert('Cadastro de novo usuário.');
  };

  // Função para atualizar a senha do usuário (operação de update)
  const handleUpdatePassword = () => {
    // Aqui você pode implementar a lógica para permitir que o usuário atualize sua senha.
    // Geralmente, isso envolve enviar uma solicitação para o servidor (API) com a nova senha.
    alert('Senha atualizada com sucesso.');
  };

  // Função para excluir a conta do usuário (operação de delete)
  const handleDeleteAccount = () => {
    // Aqui você pode implementar a lógica para permitir que o usuário exclua sua conta.
    // Isso geralmente envolve uma confirmação e, em seguida, enviar uma solicitação para o servidor (API) para excluir a conta.
    alert('Conta excluída com sucesso.');
  };

  return (
    <div>
      <Header />
      <h1>Página de Login</h1>
      <form>
        <input
          type="text"
          placeholder="Nome de Usuário"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>
          Entrar
        </button>
        <button type="button" onClick={handleSignUp}>
          Cadastrar
        </button>
        <button type="button" onClick={handleUpdatePassword}>
          Atualizar Senha
        </button>
        <button type="button" onClick={handleDeleteAccount}>
          Excluir Conta
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
