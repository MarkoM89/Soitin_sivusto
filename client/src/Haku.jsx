function Haku(props){


    return (

    <>
        <form >

            <label>Haku:
        
                <input type="text" placeholder="Hakukenttä" onChange={() => props.hakuKaynnissa()}/>

            </label>

        </form>

    </>

    )

}

export default Haku