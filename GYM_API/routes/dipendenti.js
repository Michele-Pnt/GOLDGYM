const express = require('express');
const db = require('../services/db');
const dipendentiDAO = require('../dao/dipendentiDAO');
const router = express.Router();

//prendo tutti i dipendenti che  sono istruttori
router.get('/getSSN_DIstruttori', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        const dipendenti = await dipendentiDAO.getSSN_DIstruttori(conn);
        res.json(dipendenti);
        await conn.commit();
    } catch (err) {
        console.error(`routes/dipendenti.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400).json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

// GET: dipendente per SSN_D
router.get('/getDipendenteBySSN_D', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        const dipendente = await dipendentiDAO.getBySSN_D(conn, req.query);
        if (dipendente) {
            res.json(dipendente);
        } else {
            res.status(404).json({ erroreMsg: "Dipendente non trovato" });
        }
        await conn.commit();
    } catch (err) {
        console.error(`routes/dipendenti.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400).json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

// GET: dipendente per Email
router.get('/getDipendenteByEmail', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        const dipendente = await dipendentiDAO.getByEmail(conn, req.query);
        if (dipendente) {
            res.json(dipendente);
        } else {
            res.status(404).json({ erroreMsg: "Dipendente non trovato" });
        }
        await conn.commit();
    } catch (err) {
        console.error(`routes/dipendenti.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400).json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

// POST: crea nuovo dipendente
router.post('/postDipendente', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        const dipendente = await dipendentiDAO.create(conn, req.body);
        res.status(201).json(dipendente);
        await conn.commit();
    } catch (err) {
        console.error(`routes/dipendenti.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400).json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

// POST: crea nuovo istruttore
router.post('/postIstruttore', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        const istruttore = await dipendentiDAO.createIstruttore(conn, req.body);
        res.status(201).json(istruttore);
        await conn.commit();
    } catch (err) {
        console.error(`routes/dipendenti.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400).json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

module.exports = router;