// components/Header.js
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          {/* Adicione mais itens de menu aqui */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
