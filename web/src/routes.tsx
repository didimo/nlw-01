import { Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

const Routes = () => {
    return (
        //Criando as rotas. Digo a pagina(componente) e qual o endereço digitado irá ativar a rota
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={CreatePoint} path="/create-point" exact/>
        </BrowserRouter>
    )
}

export default Routes;