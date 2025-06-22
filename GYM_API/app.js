const express = require('express') // Importa il framework Express
var cors = require('cors'); // Importa il modulo CORS per abilitare le richieste cross-origin
const abbonamentiRouter = require('./routes/abbonamenti'); // Importa il router per le rotte degli abbonamenti
const clientiRouter = require('./routes/clienti'); // Importa il router per le rotte dei clienti
const corsiRouter = require('./routes/corsi'); // Importa il router per le rotte dei corsi
const dipendentiRouter = require('./routes/dipendenti'); // Importa il router per le rotte dei dipendenti
const attrezziRouter = require('./routes/attrezzi'); // Importa il router per le rotte degli attrezzi
const prodottiRouter = require('./routes/prodotti'); // Importa il router per le rotte dei prodotti
const compraRouter = require('./routes/compra'); // Importa il router per le rotte dei compra

const app = express() // Crea un'applicazione Express
const port = 3000 // Imposta la porta su cui ascoltare
const contextPath = '/api'; // Definisce il prefisso per le API

app.use(cors({
  origin: 'http://localhost:4200'
})); // Abilita CORS solo per questa origine
app.use(express.json()) // Abilita il parsing del body in formato JSON
app.use(
  express.urlencoded({
    extended: true, // Permette di gestire oggetti complessi nell'URL encoding
  })
);

// Collega i router alle rispettive rotte con il prefisso /api
app.use(contextPath, abbonamentiRouter); // Rotte per gli abbonamenti
app.use(contextPath, clientiRouter); // Rotte per i clienti
app.use(contextPath, corsiRouter); // Rotte per i corsi
app.use(contextPath, dipendentiRouter); // Rotte per i dipendenti
app.use(contextPath, attrezziRouter); // Rotte per gli attrezzi
app.use(contextPath, prodottiRouter); // Rotte per i prodotti
app.use(contextPath, compraRouter); // Rotte per gli acquisti

// Gestisce tutte le altre rotte non trovate restituendo errore 404
app.all('*', function(req, res){
  res.status(404);
  res.json({erroreMsg: "Resource Not Found"});
});

// Avvia il server sulla porta specificata
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})


