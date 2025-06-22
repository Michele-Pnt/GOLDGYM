const mysql = require('mysql2/promise'); // Importa il modulo per accedere a MySQL in modo asincrono
const config = require('../config'); // Importa la configurazione del database

// Funzione asincrona per ottenere una nuova connessione al database
async function getConnection() {
  const connection = await mysql.createConnection(config.db); // Crea una connessione usando i parametri di config
  return connection; // Restituisce la connessione creata
}

// Funzione asincrona per eseguire una query sul database
async function execute(connection, sql, params) {
  const [results, fields] = await connection.execute(sql, params); // Esegue la query con i parametri forniti
  return results; // Restituisce solo i risultati della query (non i metadati dei campi)
}

// Esporta le funzioni per poterle usare in altri file
module.exports = { getConnection, execute }