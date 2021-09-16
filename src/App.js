//https://www.linkedin.com/pulse/react-native-como-pegar-dados-do-banco-de-mysql-rest-penha-simplicio
//https://www.youtube.com/watch?v=UsUkbbFCZl4&list=PLxNM4ef1BpxgALv5Vm-ooZo8qYRgCzKSV&index=7
import logo from './logo.svg';
import './App.css';
//import api from './api';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  const [lista, setLista] = useState([]);
  //const [nome, setNome] = useState('');
  //const [email, setEmail] = useState('');
  //const [id, setId] = useState('');

  // quando a tela for carrega ele chama listardados
  useEffect(() => {
    listarDados();
  },10)

  // async api
  async function listarDados() {
    const res = await axios.get('http://localhost/apiModelo/apireact/listar_clientes_react.php');
    //receber os dados que estão sendo consumidos depla api 
    setLista(res.data.resultado);
    //setNome('res.data.nome');
    //setEmail('res.data.email');
    //setId('res.data.id');

    console.log(res.data);
    console.log(res.data.resultado);
    
  }

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p> React CPT softwares </p>

      </header>

      <div className="container">
        <span className="">Listar Dados do Banco Mysq</span>
        <div className="col-md-6 p-2">

        {lista.map((item) => (
            <p >{item.nome}:{item.email}</p>
  ))}
          
        </div>
      </div>
      
    </div>
  )
}

export default App;


//listar com React e como criar a API com PHP
//com php https://www.youtube.com/watch?v=3h43URUkUjI
// axios https://www.youtube.com/watch?v=T8mqZZ0r-RA
//https://victorhuguw-64.medium.com/construindo-uma-rest-api-utilizando-nodejs-express-e-mysql-parte-1-ef25643ab41b