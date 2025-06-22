const db = require('../services/db');

// Cerca un dipendente per SSN_D
async function getBySSN_D(conn, dipendente) {
    if (!dipendente || !dipendente.SSN_D) {
        throw new Error("SSN_D del dipendente mancante");
    }
    const [rows] = await conn.query('SELECT * FROM DIPENDENTE WHERE SSN_D = ?', [dipendente.SSN_D]);
    return rows.length > 0 ? rows[0] : null;
}

// Restituisce tutti i dipendenti sono istruttori 
async function getSSN_DIstruttori(conn) {
    const [rows] = await conn.query(`SELECT SSN_D, COGNOME FROM DIPENDENTE WHERE RUOLO = 'Istruttore'`);
   return rows.length > 0 ? rows : null;
}

// Cerca un dipendente per Email
async function getByEmail(conn, dipendente) {
    if (!dipendente || !dipendente.EMAIL) {
        throw new Error("Email del dipendente mancante");
    }
    const [rows] = await conn.query('SELECT SSN_D, COGNOME, NOME, PASSWORD FROM DIPENDENTE WHERE EMAIL = ?', [dipendente.EMAIL]);
    return rows.length > 0 ? rows[0] : null;
}

//creo record per tabella Istruttore
async function createIstruttore(conn, dipendente) {
    const sql = `INSERT INTO ISTRUTTORE (SSN_D, QUALIFICA) VALUES (?, ?)`;
    const params = [dipendente.SSN_D, dipendente.QUALIFICA];
    const [result] = await conn.execute(sql, params);
    return result.affectedRows > 0;
}

// Inserisce un nuovo dipendente
async function create(conn, dipendente) {
    const sql = `INSERT INTO DIPENDENTE (SSN_D, NOME, COGNOME, INDIRIZZO, EMAIL, TELEFONO, IBAN, RUOLO, TURNO)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const params = [
        dipendente.SSN_D,
        dipendente.NOME,
        dipendente.COGNOME,
        dipendente.INDIRIZZO,
        dipendente.EMAIL,
        dipendente.TELEFONO,
        dipendente.IBAN,
        dipendente.RUOLO,
        dipendente.TURNO
    ];
    const [result] = await conn.execute(sql, params);
    return result.affectedRows > 0;
}

// Elimina un dipendente
async function remove(conn, dipendente) {
    const sql = 'DELETE FROM DIPENDENTE WHERE SSN_D = ?';
    const [result] = await conn.execute(sql, [dipendente.SSN_D]);
    return result.affectedRows > 0;
}

module.exports = { createIstruttore, getBySSN_D, getByEmail, create, getSSN_DIstruttori };