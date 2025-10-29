const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());



app.get("/syna", (req, res) => {
    res.json({
              Moog: [{kuva:'./src/assets/moog-minimoog-model-d.jpg', vaihtoehto:"Kuva Minimoog D-mallista", malli: "Minimoog D-malli", signaali: "Analoginen", äänienMäärä: "yksiääninen", aaniLahde: 3, suodatin: "24db Moog-alipäästösuodatin", selitteet:"Tunnettu Syna, joka aloitti pienempikokoisten synien aikakauden, sitä ennen ne olivat seinän kokoisia soittimia" }, 
                {kuva:'./src/assets/Moog-Memorymoog.jpg', vaihtoehto:"Kuva Memorymoogista", malli:"Memorymoog", signaali: "Analoginen", äänienMäärä: "6 ääntä",  aaniLahde:3, suodatin:"24db Moog-alipäästösuodatin", selitteet:"Moogin moniääninen syna, jossa on kolme äänilähdettä, kun usein moniäänisissä on kaksi"}], 

              Roland:  [{kuva:'./src/assets/Roland-jupiter8.jpg', vaihtoehto:"Kuva Jupiter 8:sta", malli: "Jupiter 8", signaali: "Analoginen", äänienMäärä: "8 ääntä", aaniLahde: 2, suodatin: "24db alipäästösuodatin sekä ylipäästösuodatin", selitteet:"Rolandin lippulaivamalli moniäänisynista, erittäin tunnettu ja luotettava" }, 
                {kuva:'./src/assets/Roland-Jupiter-6.jpg', vaihtoehto:"Kuva Jupiter 6:sta", malli:"Jupiter 6", signaali: "Analoginen", äänienMäärä: "6 ääntä", aaniLahde:2, suodatin:"24db alipäästösuodatin", selitteet:"Jupiter 8:n sisarus"}],


                Oberheim:  [{kuva:'./src/assets/Oberheim-OB-X.jpg', vaihtoehto:"Kuva OBX:sta", malli: "OBX", signaali: "Analoginen", äänienMäärä: "8 ääntä", aaniLahde: 2, suodatin: "24db alipäästösuodatin", selitteet:"Oberheimin ensimmäinen nykyaikaisempi moniääninen syna, aikaisempi 8-Voice malli vaati monta yksittäistä synaa viere vierekkäin" }, 
                {kuva:'./src/assets/Oberheim_OB-XA.jpg', vaihtoehto:"Kuva OB-XA:sta", malli:"OB-XA", signaali: "Analoginen", äänienMäärä: "8 ääntä", aaniLahde:2, suodatin:"24db Curtis-alipäästösuodatin", selitteet:"Oberheimin seuraava moniääninen syna, perustui Curtis-piireihin"}],

                Sequental:  [{kuva:'./src/assets/Sequental-prophet-5.jpg', vaihtoehto:"Kuva Prohet 5:sta", malli: "Prohet 5", signaali: "Analoginen", äänienMäärä: "5 ääntä", aaniLahde: 2, suodatin: "24db alipäästösuodatin", selitteet:"Mahdollisesti ensimmäinen nykyaikainen moniääninen syna, joka aloitti moniäänisten synien aikakauden" }, 
                {kuva:'./src/assets/Sequential-Prophet_VS.png', vaihtoehto:"Kuva Prohet VS:sta", malli:"Prohet VS", signaali: "Digitaalinen / analoginen", äänienMäärä: "8 ääntä", aaniLahde:4, suodatin:"24db Curtis-alipäästösuodatin", selitteet:"Sequentalin digitaalisen ja analogisen yhdistelmä"}]
    });
});

app.listen(5000, () =>{
    console.log("Palvelin kuuntelee porttia 5000");
});