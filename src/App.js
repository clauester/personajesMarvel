import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
//  12514bd73c688d2798694980d1581c67688f502a6b3be7e9bb063bcba4d3e4dbc697b13da

//const apiUrl = 'https://gateway.marvel.com:443/v1/public/characters?apikey=b3be7e9bb063bcba4d3e4dbc697b13da'
const apiUrl = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=b3be7e9bb063bcba4d3e4dbc697b13da&hash=e44e663ee4d2049e09f5a796f7003c92'
function App() {
//Public key: b3be7e9bb063bcba4d3e4dbc697b13da
//private key: 2514bd73c688d2798694980d1581c67688f502a6
const [personajes, setPersonajes] = useState([])
  
  // const fecthAPi = async () => {
  //   const response = await fetch(apiUrl)
  //   console.log(response.status)
  //   const responseJson = await response.json()
  //   setTodos(responseJson)
    
  // }
  useEffect(() =>{
    //fecthAPi()

    
    axios.get(apiUrl).then(res => {

     return setPersonajes(res.data.data.results)
  
    }).catch(error => console.log(error))
  }, [])
console.log(personajes)
  return (
    <>
   
     <ul>
          <li><a href="#news" style={{fontSize: "35px", textAlign:"center"}}>Marvel</a></li>
    </ul>
      <div className="cuerpo">
        
        <div className="grid-container">
        {personajes.map((user) => (
          
            <div className="item" key={user.id} >
            <img src={`${user.thumbnail.path}.${user.thumbnail.extension}`} alt=" " style={{width: "200px",
      height: "200px"}} />
          <div className="item2"  >
            <p style={{marginBottom: "5px"}}>{user.name}</p>
            </div>
            </div>
            
        ))}  
</div>
      </div>
      </>
   
  );
}

export default App;

