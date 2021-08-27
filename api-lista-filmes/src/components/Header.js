import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://i.ibb.co/vHzsYqG/Logonetflix.png" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://i.ibb.co/0tzJCkt/h-BEe3tdn-400x400.png" alt="Usuário" />
                </a>
            </div>
        </header>
    );
}