


function Soittimet(props) {

    

    return (

        <div className='syna' onClick={() =>  props.painettuSoitinta(props.malli)} >
            <img src={props.kuva} alt={props.vaihtoehto} />
            <h2>{props.malli}</h2>
            <ul>
                <li>Värähdepiirien määrä: {props.lahde}</li>
                <li>Suodatin tyyppi: {props.suodatin}</li>
            </ul>

            <hr></hr>
            
            <p>{props.selitteet}.</p>



        </div>

    );

}


export default Soittimet