
function ValittuSoitin(props){


    return(

        <div className="valittuSoitin">

            <button onClick={() => props.painettuRastia()}>X</button>

            <img src={props.kuva} alt={props.vaihtoehto} />

            <h2>Valittuna {props.malli}</h2>

            <p>{props.selite}</p>

            {/*kuva, 
            malli,
            analooginen vai digitaalinen vai molempia,
            värähdepiirien määrä ja tyyppi sekä aaltomuodot
            suodattimet
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