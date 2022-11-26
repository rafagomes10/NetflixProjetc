import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import { StatusBar } from "react-native";

import Routes from './routes';

const App = () => {  
  return (
    <>
      <PaperProvider>
        <StatusBar backgroundColor="#FFF" />
        
        <Routes/>
        
      </PaperProvider>
    </>
  )
}

export default App;
