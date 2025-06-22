const express = require('express');
const db = require('../services/db');
const compraDao = require('../dao/compraDAO');
const router = express.Router();

// POST: un cliente acquista un prodotto
router.post('/postAcquisto', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        const acquisto = await compraDao.acquisto(conn, req.body);
        res.status(201).json(acquisto);
        await conn.commit();
    } catch (err) {
        console.error(`routes/prodotti.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400).json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

// GET: incasso settimanale
router.get('/getIncassoSettimanale', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        const incassoSettimanale = await compraDao.getIncassoSettimanale(conn);
        res.json(incassoSettimanale);
        await conn.commit();
    } catch (err) {
        console.error(`routes/compra.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400).json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});


module.exports = router;