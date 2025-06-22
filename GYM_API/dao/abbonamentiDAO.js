const db = require('../services/db');

// Funzione asincrona per ottenere tutti gli abbonamenti
async function getAll(conn) {
    const sql = "SELECT CLIENTE.NOME, C.IMMAGINE, CLIENTE.SSN_C, CLIENTE.COGNOME, A.ID_ABBONAMENTO, PREZZO, A.ID_CORSO, C.NOME AS 'NOME_CORSO', C.SALA, C.DURATA AS 'DURATA_CORSO'  , C.ORARIO AS 'ORARIO_CORSO', A.DATA_INIZIO AS 'INIZIO_ABBONAMENTO', A.DURATA AS 'DURATA_ABBONAMENTO' FROM ABBONAMENTO A INNER JOIN CORSO C ON A.ID_CORSO = C.ID_CORSO INNER JOIN CLIENTE ON A.SSN_C = CLIENTE.SSN_C"; // Query per selezionare tutti gli abbonamenti
    const [rows] = await conn.execute(sql); // Esegui la query
    // console.log('QUERY:', sql);
    // console.log('PARAMS:', params);
    return rows || []; // Restituisce i risultati o un array vuoto
}

// Funzione asincrona per ottenere tutti gli abbonamenti
async function getAllAbbonati(conn) {
    const sql = "SELECT DISTINCT CLIENTE.NOME, CLIENTE.COGNOME FROM ABBONAMENTO A INNER JOIN CORSO C ON A.ID_CORSO = C.ID_CORSO INNER JOIN CLIENTE ON A.SSN_C = CLIENTE.SSN_C"; // Query per selezionare tutti gli abbonamenti
    const [rows] = await conn.execute(sql); // Esegui la query
    // console.log('QUERY:', sql);
    // console.log('PARAMS:', params);
    return rows || []; // Restituisce i risultati o un array vuoto
}

// Funzione asincrona per trovare un abbonamento per ID_ABBONAMENTO
const getByID = async function (conn, reqQuery) {
  if (!reqQuery || typeof reqQuery.ID_ABBONAMENTO === "undefined") {
      throw new Error("ID_ABBONAMENTO mancante"); // Se l'ID_ABBONAMENTO non è fornito, lancia un errore
  }
  const sql = "SELECT A.ID_ABBONAMENTO, A.ID_CORSO, PREZZO, C.NOME AS 'NOME_CORSO', C.SALA, C.DURATA AS 'DURATA_CORSO'  , C.ORARIO AS 'ORARIO_CORSO', A.DATA_INIZIO AS 'INIZIO_ABBONAMENTO', A.DURATA AS 'DURATA_ABBONAMENTO' FROM ABBONAMENTO A INNER JOIN CORSO C ON A.ID_CORSO = C.ID_CORSO WHERE A.ID_ABBONAMENTO = ?"; // Query per selezionare un abbonamento specifico
  const [rows] = await conn.execute(sql, [reqQuery.ID_ABBONAMENTO]); // Esegui la query con l'ID_ABBONAMENTO come parametro
  // console.log('QUERY:', sql);
  // console.log('PARAMS:', [reqQuery.ID_ABBONAMENTO]);
  return rows.length > 0 ? rows[0] : null; // Restituisce l'abbonamento trovato o null se non esiste
}

// Funzione asincrona per trovare gli abbonamenti dell'utente
const getBySSN = async function (conn,reqQuery) { 

  let sql = "SELECT C.IMMAGINE, A.ID_ABBONAMENTO, PREZZO, A.ID_CORSO, C.NOME AS 'NOME_CORSO', C.SALA, C.DURATA AS 'DURATA_CORSO'  , C.ORARIO AS 'ORARIO_CORSO', A.DATA_INIZIO AS 'INIZIO_ABBONAMENTO', A.DURATA AS 'DURATA_ABBONAMENTO' FROM ABBONAMENTO A INNER JOIN CORSO C ON A.ID_CORSO = C.ID_CORSO"; // Query base per selezionare tutti gli abbonamenti dell'utente
  params=[]; // Array che conterrà i valori dei filtri

  queryKeys = Object.keys(reqQuery); // Ottiene le chiavi dei filtri (es: nome, email)
  for (i = 0; i < queryKeys.length; i++) {
    sql+=(i==0)?" WHERE ":" AND "; // Aggiunge WHERE per il primo filtro, AND per i successivi
    sql += queryKeys[i] + "= ?"; // Aggiunge la condizione (es: nome = ?)
    params.push(reqQuery[queryKeys[i]]); // Inserisce il valore del filtro nell'array dei parametri
  }
  const [rows] = await conn.execute(sql, params); // Esegui la query (dipende da come implementi db.execute)
  return rows || [];
}

// Funzione asincrona per creare un nuovo abbonamento
async function create(conn, abbonamento) {
  const sql = "INSERT INTO ABBONAMENTO (DATA_INIZIO, DURATA, PREZZO, ID_CORSO, SSN_C) VALUES (?, ?, ?, ?, ?)";
  params = [abbonamento.DATA_INIZIO, abbonamento.DURATA, abbonamento.PREZZO, abbonamento.ID_CORSO, abbonamento.SSN_C];
  const [rows] = await conn.execute(sql, params); // Esegui la query
  // console.log('QUERY:', sql);
  // console.log('PARAMS:', params);
  return rows.affectedRows > 0;
}

// Funzione asincrona per aggiornare un abbonamento esistente
async function update(conn, abbonamento) {
  // Rimuovi chiavi non aggiornabili (come l'id)
  const fields = Object.keys(abbonamento).filter(key => key !== 'ID_ABBONAMENTO');
  if (fields.length === 0) return false; // Niente da aggiornare

  // Costruisci la parte SET della query
  const setClause = fields.map(field => `${field} = ?`).join(', '); //Per ogni campo, crea una stringa tipo "NOME = ?".
  const params = fields.map(field => abbonamento[field]);           // Unisce tutte le stringhe con una virgola, ottenendo qualcosa come:
                                                                    // "NOME = ?, SCADENZA = ?"
  params.push(abbonamento.ID_ABBONAMENTO); // id alla fine per la clausola WHERE

  const sql = `UPDATE ABBONAMENTO SET ${setClause} WHERE ID_ABBONAMENTO = ?`;
  
  // console.log('QUERY:', sql);
  // console.log('PARAMS:', params);
  const [result] = await conn.execute(sql, params);
  return result.affectedRows > 0;
}

// Funzione asincrona per rimuovere un abbonamento
async function remove(conn, reqQuery) {
  if (!reqQuery || typeof reqQuery.ID_ABBONAMENTO === "undefined") {
      throw new Error("ID_ABBONAMENTO mancante");
  }
  const sql = "DELETE FROM ABBONAMENTO WHERE ID_ABBONAMENTO = ?";

  const [rows] = await conn.execute(sql, [reqQuery.ID_ABBONAMENTO]); // Esegui la query
  // console.log('QUERY:', sql);
  // console.log('PARAMS:', params);
  return rows.affectedRows > 0;
}

module.exports = { getAllAbbonati, getAll, getByID, getBySSN, create, update, remove };