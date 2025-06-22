const db = require('../services/db');

// Restituisce tutti gli attrezzi
async function getAll(conn) {
    const [rows] = await conn.query('SELECT * FROM ATTREZZO');
    return rows;
}

// Cerca un attrezzo per ID_ATTREZZO
async function getById(conn, attrezzo) {
    if (!attrezzo || !attrezzo.ID_ATTREZZO) {
        throw new Error("ID_ATTREZZO mancante");
    }
    const [rows] = await conn.query('SELECT * FROM ATTREZZO WHERE ID_ATTREZZO = ?', [attrezzo.ID_ATTREZZO]);
    return rows.length > 0 ? rows[0] : null;
}

// Cerca un attrezzo in manutenzione
async function getManutenzione(conn) {
    const [rows] = await conn.query('SELECT * FROM ATTREZZO WHERE STATO = "Manutenzione"');
    if (rows.length === 0) {
        throw new Error("Nessun attrezzo in manutenzione trovato");
    }
    return rows.length > 0 ? rows : null;
}

// Inserisce un nuovo attrezzo
async function create(conn, attrezzo) {
    const sql = `INSERT INTO ATTREZZO (NOME, MARCA, STATO, IMMAGINE)
                 VALUES (?, ?, ?, ?)`;
    const params = [
        attrezzo.NOME,
        attrezzo.MARCA,
        attrezzo.STATO,
        attrezzo.IMMAGINE
    ];
    const [result] = await conn.execute(sql, params);
    return result.affectedRows > 0;
}

// Modifica un attrezzo esistente
async function update(conn, attrezzo) {
    const fields = Object.keys(attrezzo).filter(key => key !== 'ID_ATTREZZO');
    if (fields.length === 0) return false;
    const setClause = fields.map(field => `${field} = ?`).join(', ');
    const params = fields.map(field => attrezzo[field]);
    params.push(attrezzo.ID_ATTREZZO);
    const sql = `UPDATE ATTREZZO SET ${setClause} WHERE ID_ATTREZZO = ?`;
    const [result] = await conn.execute(sql, params);
    return result.affectedRows > 0;
}

// Elimina un attrezzo
async function remove(conn, attrezzo) {
    const sql = 'DELETE FROM ATTREZZO WHERE ID_ATTREZZO = ?';
    const [result] = await conn.execute(sql, [attrezzo.ID_ATTREZZO]);
    return result.affectedRows > 0;
}

module.exports = {getManutenzione, getAll, getById, create, update, remove };