const db = require('../services/db');

async function getAll(conn) {
    const sql = "SELECT * FROM CLIENTE";
    const [rows] = await conn.execute(sql); // Esegui la query
    // console.log('QUERY:', sql);
    // console.log('PARAMS:', params);
    return rows || []; // Restituisce i risultati o un array vuoto
}

async function getClientiUnici(conn) {
    const sql = `
        SELECT DISTINCT C.SSN_C, C.COGNOME, C.NOME
        FROM CLIENTE C
        JOIN ABBONAMENTO A ON C.SSN_C = A.SSN_C`;
    const [rows] = await conn.execute(sql);
    return rows || [];
}

async function getBySSN(conn, reqQuery) {
  let sql = "SELECT * FROM CLIENTE"; 
  params = [];
  queryKeys = Object.keys(reqQuery);
  for (i = 0; i < queryKeys.length; i++) {
    sql += (i == 0) ? " WHERE " : " AND ";
    sql += queryKeys[i] + "= ?";
    params.push(reqQuery[queryKeys[i]]);
  }
  const [rows] = await conn.execute(sql, params);
  return rows.length > 0 ? rows[0] : null;
}

async function getByEmail(conn, reqQuery) {
    let sql = "SELECT SSN_C, COGNOME, NOME, PASSWORD FROM CLIENTE"; // Query base per selezionare tutti i clienti 
  params=[]; // Array che conterrà i valori dei filtri

  queryKeys = Object.keys(reqQuery); // Ottiene le chiavi dei filtri (es: nome, email)
  for (i = 0; i < queryKeys.length; i++) {
    sql+=(i==0)?" WHERE ":" AND "; // Aggiunge WHERE per il primo filtro, AND per i successivi
    sql += queryKeys[i] + "= ?"; // Aggiunge la condizione (es: nome = ?)
    params.push(reqQuery[queryKeys[i]]); // Inserisce il valore del filtro nell'array dei parametri
  }
  const [rows] = await conn.execute(sql, params); // Esegui la query (dipende da come implementi db.execute)
   return rows.length > 0 ? rows[0] : null;
}

async function update(conn, cliente) {
  // Rimuovi chiavi non aggiornabili (come l'id)
  const fields = Object.keys(cliente).filter(key => key !== 'SSN_C');
  if (fields.length === 0) return false; // Niente da aggiornare

  // Costruisci la parte SET della query
  const setClause = fields.map(field => `${field} = ?`).join(', '); //Per ogni campo, crea una stringa tipo "NOME = ?".
  const params = fields.map(field => cliente[field]);           // Unisce tutte le stringhe con una virgola, ottenendo qualcosa come:
                                                                    // "NOME = ?, SCADENZA = ?"
  params.push(cliente.SSN_C); // id alla fine per la clausola WHERE

  const sql = `UPDATE CLIENTE SET ${setClause} WHERE SSN_C = ?`;

  const [result] = await conn.execute(sql, params);
  return result.affectedRows > 0;
}

async function create(conn, cliente) {
    const sql = `INSERT INTO CLIENTE (
        SSN_C, NOME, COGNOME, DATA_NASCITA, INDIRIZZO, EMAIL, TELEFONO, DATA_CERTIFICATO, DATA_ISCRIZIONE, PASSWORD
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const params = [
        cliente.SSN_C,
        cliente.NOME,
        cliente.COGNOME,
        cliente.DATA_NASCITA,
        cliente.INDIRIZZO,
        cliente.EMAIL,
        cliente.TELEFONO,
        cliente.DATA_CERTIFICATO,
        cliente.DATA_ISCRIZIONE,
        cliente.PASSWORD
    ];
  const [rows] = await conn.execute(sql, params); // Esegui la query
  // console.log('QUERY:', sql);
  // console.log('PARAMS:', params);
  return rows.affectedRows > 0;
}

async function remove(conn, cliente) {
  if (!cliente.SSN_C || typeof cliente.SSN_C === "undefined") {
      throw new Error("ID_CLIENTE mancante");
  }
  const sql = "DELETE FROM CLIENTE WHERE SSN_C = ?";
  const [rows] = await conn.execute(sql, [cliente.SSN_C]); // Esegui la query
  // console.log('QUERY:', sql);
  // console.log('PARAMS:', params);
  return rows.affectedRows > 0;
}

module.exports = { getAll, getBySSN, getClientiUnici, getByEmail, create, remove, update };