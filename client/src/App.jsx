import { useEffect, useState } from 'react'
import './App.css'
import './osat.css'
import Kortti from './Kortti'
import Ylatunniste from './Ylatunniste'
import Alatunniste from "./Alatunniste";

function App() {

  const [Data, setData] = useState(null);
  const [Datasyna, setDatasyna] = useState(null);



   useEffect(() => {
    fetch("http://localhost:5000/syna").then(
      Response => Response.json()
    ).then(
    data => {
        setData(data)
        console.log(data)
        
      }
    )
  }, [])




  return (
    <>

<Ylatunniste></Ylatunniste>

<div>

    <div className='synat'>

       {Data != null ?  
      <div>
      {Object.keys(Data).map((valmistaja, i) => (

       <button id={valmistaja} key={i} onClick={() => setDatasyna(Data[valmistaja].map((syna, i) => (<Kortti key={i} kuva={syna["kuva"]} vaihtoehto={syna["vaihtoehto"]} malli={syna["malli"]} lahde={syna["aaniLahde"]} suodatin={syna["suodatin"]} 
    selitteet={syna["selitteet"]}></Kortti> )))}>{valmistaja}</button>

      ))}
    </div> 
    :  <p>..........</p>}


    {Datasyna}

    </div>

   <Alatunniste></Alatunniste>

</div>
  

    </>
  )
}

export default App
