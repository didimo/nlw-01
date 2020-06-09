import React, { useState } from 'react';
import './App.css';
import Header from './Header_conceitos';
//JSX> Sintaxe de XML dentro do javascript
// A extenção tsx é para arquivos que tenham typescript e xml(html)

function App() {
  const [counter, setCounter] = useState(0); // retorna um array [valor do estado, funcao para atulizar o estado]

  function handleButtonClick(){
    //No react, não posso alterar o valor, preciso criar um estado novo
    //counter++;
    //Faço isso adicionando um valor novo e atribuindo de forma indireta
    setCounter(counter + 1); 
  }

  return (   
   <div>
    <Header title = {`Contador ${counter}`}/>
    

    <h1>{counter}</h1>
    <button type="button" onClick={handleButtonClick}>Adicionar</button>
   </div>
  );
}

export default App;
