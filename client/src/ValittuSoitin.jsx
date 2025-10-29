
function ValittuSoitin(props){


    return(

        <div className="valittuSoitin">

            <button onClick={() => props.painettuRastia()}>X</button>

            <img src={props.kuva} alt={props.vaihtoehto} />

            <h2>{props.malli}</h2>


            <div className="soittimenTiedot">
            
            <ul>
                <li>Signaalin tyyppi: {props.signaali}</li>
                <li>Yhtäaikaisten äänien määrä: {props.äänienMäärä}</li>
                <li>Värähdepiirien määrä: {props.lahde}</li>
                <li>Suodatin tyyppi: {props.suodatin}</li>
            </ul>
            

            <p>{props.selite}</p>

            </div>

            {/*kuva, 
            värähdepiirien määrä ja tyyppi sekä aaltomuodot
            modulaatiot (muokkaimet) lukumäärä ja minkä tyyppisiä
            tehosteet
            rakenne, koko, kotelo, käyttöliittymä
            liitännät
            kommentit
            */}

        </div>
    );
}

export default ValittuSoitin