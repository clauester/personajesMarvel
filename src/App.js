import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Navbar from './components/Navbar'
import Layout from './components/Layout';
import Modal from './components/miniP';


const apiUrl = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=b3be7e9bb063bcba4d3e4dbc697b13da&hash=e44e663ee4d2049e09f5a796f7003c92'

function App() {
  //Public key: b3be7e9bb063bcba4d3e4dbc697b13da
  //private key: 2514bd73c688d2798694980d1581c67688f502a6
  // const [personajes, setPersonajes] = useState([])
  // const [codigo, setCodigo] = useState([])
  const[todos, setTodos] = useState([]);
  useEffect(() => {
  
    fetch(apiUrl)
      .then(response => {
        return response.json();
      })
      .then(response => {
        setTodos(response.data.results)
  
      })
  
    // axios.get(apiUrl).then(res => {
    //   console.log(res)
  
    //  return  setPersonajes(res.data.data.results)
  
    // }).catch(error => console.log(error))
  }, [])

  const [estado, setEstado]= useState(false)
  const [codigo, setCodigo] = useState([''])

 const setear = () =>{
   setEstado(false)
 }
  
  return (
    <div>
      <Modal mostrar={estado} codigo={codigo} valores={todos} setear={setear} />
      <Navbar />
      <Layout>
      
        <div className="cuerpo">
        

          <div className="grid-container">
            <div className='nose' >

              {todos.map((user) => (


                <div className="item" key={user.id}  >
                  <div className='img'>
                    <img onClick={()=> {setEstado(true) ; setCodigo(user.id)}}
                      src={`${user.thumbnail.path}.${user.thumbnail.extension}`}
                      alt=" " style={{
                        width: "200px",
                        height: "200px",
                      }} />


                  </div>
                  <div className="item2"  >
                    <p>{user.name}</p>
                    
                  </div>


                </div>

              ))}
            </div>


          </div>

        </div>
      </Layout>
     

    </div>



  )
}

export default App;

