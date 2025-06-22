const db = require('../services/db');

async function acquisto(conn, acquisto) {
    const query = 'INSERT INTO COMPRA (SSN_C, ID_PRODOTTO, DATA_ACQUISTO, QUANTITA_VENDUTA) VALUES (?, ?, ?, ?)';
    const params = [acquisto.SSN_C, acquisto.ID_PRODOTTO, acquisto.DATA_ACQUISTO, acquisto.QUANTITA_VENDUTA];
    const [result] = await conn.execute(query, params);
    return result.affectedRows > 0;
}

// Restituisce incasso settimanale
async function getIncassoSettimanale(conn) {
    const sql = `SELECT SUM(PRODOTTO.PREZZO * COMPRA.QUANTITA_VENDUTA) AS INCASSO_SETTIMANALE
                 FROM PRODOTTO NATURAL JOIN COMPRA
                 WHERE DATA_ACQUISTO >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)`;
    const [rows] = await conn.query(sql);
    return rows.length > 0 ? rows[0].INCASSO_SETTIMANALE : 0;
}

module.exports = { acquisto, getIncassoSettimanale };
