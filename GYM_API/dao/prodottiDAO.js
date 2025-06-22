const db = require('../services/db');

// Restituisce tutti i prodotti
async function getAll(conn) {
    const [rows] = await conn.query('SELECT * FROM PRODOTTO');
    return rows;
}

// Restituisce incasso settimanale
async function getIncassoSettimanale(conn) {
    const sql = `SELECT SUM(PRODOTTO.PREZZO * COMPRA.QUANTITA_VENDUTA) AS INCASSO_SETTIMANALE
                 FROM PRODOTTO NATURAL JOIN COMPRA
                 WHERE DATA_ACQUISTO >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)`;
    const [rows] = await conn.query(sql);
    return rows.length > 0 ? rows[0].INCASSO_SETTIMANALE : 0;
}

// Cerca un prodotto per ID_PRODOTTO
async function getById(conn, prodotto) {
    if (!prodotto || !prodotto.ID_PRODOTTO) {
        throw new Error("ID_PRODOTTO mancante");
    }
    const [rows] = await conn.query('SELECT * FROM PRODOTTO WHERE ID_PRODOTTO = ?', [prodotto.ID_PRODOTTO]);
    return rows.length > 0 ? rows[0] : null;
}

// Cerca ordini effettuati da un cliente
async function getBySSN_C(conn, cliente) {
    if (!cliente || !cliente.SSN_C) {
        throw new Error("SSN_C mancante");
    }
    const [rows] = await conn.query('SELECT * FROM COMPRA WHERE SSN_C = ?', [cliente.SSN_C]);
    return rows.length > 0 ? rows : [];
}

// Inserisce un nuovo prodotto
async function create(conn, prodotto) {
    const sql = `INSERT INTO PRODOTTO (MARCA, IMMAGINE, NOME, QUANTITA_MAGAZZINO, PREZZO, CATEGORIA)
                 VALUES (?, ?, ?, ?, ?, ?)`;
    const params = [
        prodotto.MARCA,
        prodotto.IMMAGINE,
        prodotto.NOME,
        prodotto.QUANTITA_MAGAZZINO,
        prodotto.PREZZO,
        prodotto.CATEGORIA
    ];
    const [result] = await conn.execute(sql, params);
    return result.affectedRows > 0;
}

// Modifica un prodotto esistente
async function update(conn, prodotto) {
    const fields = Object.keys(prodotto).filter(key => key !== 'ID_PRODOTTO');
    if (fields.length === 0) return false;
    const setClause = fields.map(field => `${field} = ?`).join(', ');
    const params = fields.map(field => prodotto[field]);
    params.push(prodotto.ID_PRODOTTO);
    const sql = `UPDATE PRODOTTO SET ${setClause} WHERE ID_PRODOTTO = ?`;
    const [result] = await conn.execute(sql, params);
    return result.affectedRows > 0;
}

// Elimina un prodotto
async function remove(conn, prodotto) {
    const sql = 'DELETE FROM PRODOTTO WHERE ID_PRODOTTO = ?';
    const [result] = await conn.execute(sql, [prodotto.ID_PRODOTTO]);
    return result.affectedRows > 0;
}

module.exports = { getAll, getBySSN_C, getIncassoSettimanale, getById, create, update, remove };