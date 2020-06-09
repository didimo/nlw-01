import React from 'react';
import { AppLoading } from 'expo'
import { StatusBar } from 'react-native';
import { Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts} from '@expo-google-fonts/ubuntu';
//O JSX não são elementos de HTML e sim tags específicas, View, Text
//Para definir o estilo, não tem arquivo .css, sim usamos a tag style e criamos uma função e definimos lá
// Não existe herança de estilos, precisa atribuir o estilo individualmente

import Routes from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular, 
    Roboto_500Medium,  
    Ubuntu_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
      <Routes />
    </>
  );
}