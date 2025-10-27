import { useEffect, useState } from 'react'
import './App.css'
import './osat.css'
import Kortti from './Kortti.jsx'
import Ylatunniste from './Ylatunniste.jsx'
import Alatunniste from "./Alatunniste.jsx"
import Haku from './Haku.jsx'
import Suodattimet from './Suodattimet.jsx'
import ValittuSoitin from './ValittuSoitin.jsx'

function App() {

  const [Data, setData] = useState();
  const [Datasyna, setDatasyna] = useState();
  const [DataValittu, setDataValittu] = useState();


/*
  const valittu = (valitunData, valitunData2, valitunData3, valitunData4) => {
    console.log(valitunData, valitunData2, valitunData3)
    setDataValittu([valitunData, valitunData2, valitunData3, valitunData4])
    document.getElementById('paaOsuus').style.filter = 'blur(5px)'
  } 
    */

    const valittu = (valitunData, valitunData2, valitunData3, valitunData4) => {
    let valittuSyna = null
    
     Object.keys(Data).forEach(element => {

        for (let i = 0; i < Data[element].length; i++) {
          
          if (Data[element][i].malli == valitunData){

              valittuSyna = Data[element][i]
              console.log(valittuSyna)
          }
        }

      });


    setDataValittu([valitunData, valitunData2, valitunData3, valitunData4])
    document.getElementById('paaOsuus').style.filter = 'blur(5px)'
  } 

  const suljettu = () => {
    setDataValittu()
    document.getElementById('paaOsuus').style.filter = 'none'
  }


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


<div id='uusiIkkuna'>

      {DataValittu != null ?
      <ValittuSoitin malli={DataValittu[0]} kuva={DataValittu[1]} vaihtoehto={DataValittu[2]} selite={DataValittu[3]} painettuRastia={suljettu} ></ValittuSoitin>

      :
        <></>
      }

</div>


<div id='paaOsuus'>

  <Ylatunniste></Ylatunniste>

  <div id='hakuSuodatin'>
  <Haku></Haku>
  <Suodattimet></Suodattimet>
  </div>


    <div className='synat'>

       {Data != null ?  
      <div>
      {Object.keys(Data).map((valmistaja, i) => (

       <button id={valmistaja} key={i} onClick={() => setDatasyna(Data[valmistaja].map((syna, i) => (<Kortti key={i} kuva={syna["kuva"]} vaihtoehto={syna["vaihtoehto"]} malli={syna["malli"]} lahde={syna["aaniLahde"]} suodatin={syna["suodatin"]} 
    selitteet={syna["selitteet"]} painettuSoitinta={valittu}></Kortti> )))}>{valmistaja}</button>

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
