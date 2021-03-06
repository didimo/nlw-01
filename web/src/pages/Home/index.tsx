import React from 'react';
import logo from '../../assets/logo.svg';
import './style.css';
import { FiLogIn } from 'react-icons/fi';
import { Link as LinkRoute} from 'react-router-dom';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Ecoleta"/>                    
                </header>
                <main>
                    <h1>Seu marketplace de coleta de resíduos.</h1>
                    <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>

                    <LinkRoute to="/create-point">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>Cadastro um ponto de coleta</strong>
                    </LinkRoute>
                </main>
            </div>
        </div>
    )
}

export default Home;