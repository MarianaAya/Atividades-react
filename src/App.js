import logo from './logo.svg';
import './App.css';
import ContadorDeCliques from './Components/ContadorDeCliques';
import React from 'react'
function App() {
  const [quantidade,setQuantidade] = React.useState(0);
  return (
    <div className="App">
      <h2>Welcome to React</h2>
      <ContadorDeCliques
        textoDescritivo="Quantidade de cliques acima"
        textoBotao="Botão superior"
        quantidade={quantidade}
        setQuantidade={setQuantidade}
      />
      <ContadorDeCliques
        textoDescritivo="Quantidade de cliques abaixo"
        textoBotao="Botão inferior"
        quantidade={quantidade}
        setQuantidade={setQuantidade}
      />
    </div>
  );
}

export default App;
