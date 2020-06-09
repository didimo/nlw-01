import React from 'react';

interface HeaderProps {
    title: String;
}

//Transformada função em uma função estática do tipo React.FC que permite passar um tipo
//Esse tipo é definido por uma interface que permite dizer os campos, seus tipos e obrigatoriedade
const Header: React.FC<HeaderProps> = (props)=>{
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;