// pages/LoginPage.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/header';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

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
      </form>
    </div>
  );
};

export default LoginPage;
