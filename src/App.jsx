import { useState , useEffect } from 'react'
import './App.css'

function App() {
  const [infoData, setInfoData] = useState("")
  const [loading, setLoading] = useState(true)
  const num = Math.floor(Math.random()*10)

  useEffect(()=>{
      fetch('https://rickandmortyapi.com/api/character/' + num)
      .then((response)=> response.json())
      .then((data)=>{
        console.log(data)
        setInfoData(data)
        setLoading(false)
      })

  },[])

  return (
    <div style={{background:"black", padding:"30px" , color:'white', borderRadius:'10px'}}>
      <h1>Rickand Morty API</h1>
      {loading ? (
        <p>...Cargando</p>
      ) : (
        <div style={{background:'red', padding:"10px",borderRadius:'10px' }}>
          <h2>Name: {infoData.name}</h2>
          <h3> Status: {infoData.status}</h3>
          <h3> Species: {infoData.species}</h3>
          <h3> Location: {infoData.location.name}</h3>
          <h3> Gender: {infoData.gender}</h3>
          <img src={infoData.image} alt="" />
        </div>
      )}
    </div>
  );
}

export default App
