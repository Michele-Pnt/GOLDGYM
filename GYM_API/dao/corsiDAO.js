const db = require('../services/db');

// Restituisce tutti i corsi
async function getAll(conn) {
    const [rows] = await conn.query('SELECT CORSO.IMMAGINE, CORSO.ID_CORSO,CORSO.NOME AS NOME_CORSO,CORSO.SALA,CORSO.DURATA,CORSO.ORARIO,CORSO.CAPIENZA_MAX,ISTRUTTORE.SSN_D,DIPENDENTE.NOME ,DIPENDENTE.COGNOME FROM CORSO JOIN ISTRUTTORE ON CORSO.SSN_D = ISTRUTTORE.SSN_D JOIN DIPENDENTE ON ISTRUTTORE.SSN_D = DIPENDENTE.SSN_D');
    return rows;
}

// Cerca corsi per ID_CORSO
async function getById(conn, corso) {
    if (!corso || !corso.ID_CORSO) {
        throw new Error("ID_CORSO del corso mancante");
    }
    const [rows] = await conn.query('SELECT * FROM CORSO WHERE ID_CORSO = ?', [corso.ID_CORSO]);
    return rows.length > 0 ? rows[0] : null;
}

// Cerca corsi per SSN_C
async function getBySSN_C(conn, corso) {
    if (!corso || !corso.SSN_C) {
        throw new Error("SSN_C del corso mancante");
    }
    const [rows] = await conn.query('SELECT * FROM CORSO WHERE SSN_C LIKE ?', [`%${corso.SSN_C}%`]);
    return rows.length > 0 ? rows : [];
}

// Cerca corsi per SSN_D
async function getBySSN_D(conn, corso) {
    if (!corso || !corso.SSN_D) {
        throw new Error("SSN_D del corso mancante");
    }
    const [rows] = await conn.query('SELECT * FROM CORSO WHERE SSN_D LIKE ?', [`%${corso.SSN_D}%`]);
    return rows.length > 0 ? rows : [];
}

async function create(conn, corso) {
    const sql = `INSERT INTO CORSO (NOME, IMMAGINE, SALA, DURATA, ORARIO, CAPIENZA_MAX, SSN_D) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const params = [corso.NOME, corso.IMMAGINE, corso.SALA, corso.DURATA, corso.ORARIO, corso.CAPIENZA_MAX, corso.SSN_D];
    const [rows] = await conn.execute(sql, params);
    return rows.affectedRows > 0;
}

async function update(conn, corso) {
    // Rimuovi chiavi non aggiornabili (come l'id)
    const fields = Object.keys(corso).filter(key => key !== 'ID_CORSO');
    if (fields.length === 0) return false; // Niente da aggiornare

    // Costruisci la parte SET della query
    const setClause = fields.map(field => `${field} = ?`).join(', '); //Per ogni campo, crea una stringa tipo "NOME = ?".
    const params = fields.map(field => corso[field]);           // Unisce tutte le stringhe con una virgola, ottenendo qualcosa come:
                                                                        // "NOME = ?, SCADENZA = ?"
    params.push(corso.ID_CORSO); // id alla fine per la clausola WHERE

    const sql = `UPDATE CORSO SET ${setClause} WHERE ID_CORSO = ?`;

  const [rows] = await conn.execute(sql, params); // Esegui la query
  // console.log('QUERY:', sql);
  // console.log('PARAMS:', params);
  return rows.affectedRows > 0;
}

async function remove(conn, corso) {
    if (!corso.ID_CORSO || typeof corso.ID_CORSO === "undefined") {
      throw new Error("ID_CORSO mancante");
  }
  const sql = "DELETE FROM CORSO WHERE ID_CORSO = ?";
  const [rows] = await conn.execute(sql, [corso.ID_CORSO]); // Esegui la query
  // console.log('QUERY:', sql);
  // console.log('PARAMS:', params);
  return rows.affectedRows > 0;
}

module.exports = { getAll, getById, getBySSN_C, getBySSN_D, create, update, remove };