const express = require('express');
const db = require('../services/db');
const attrezziDAO = require('../dao/attrezziDAO');
const router = express.Router();

// GET: tutti gli attrezzi
router.get('/getAttrezzo', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        const attrezzi = await attrezziDAO.getAll(conn);
        res.json(attrezzi);
        await conn.commit();
    } catch (err) {
        console.error(`routes/attrezzi.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400).json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

// GET: attrezzo per ID_ATTREZZO
router.get('/getAttrezzoById', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        const attrezzo = await attrezziDAO.getById(conn, req.query);
        if (attrezzo) {
            res.json(attrezzo);
        } else {
            res.status(404).json({ erroreMsg: "Attrezzo non trovato" });
        }
        await conn.commit();
    } catch (err) {
        console.error(`routes/attrezzi.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400).json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

// GET: attrezzo in manutenzione
router.get('/getAttrezzoInManutenzione', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        const attrezzo = await attrezziDAO.getManutenzione(conn);
        if (attrezzo) {
            res.json(attrezzo);
        } else {
            res.status(404).json({ erroreMsg: "Attrezzo non trovato" });
        }
        await conn.commit();
    } catch (err) {
        console.error(`routes/attrezzi.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400).json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

// POST: crea nuovo attrezzo
router.post('/postAttrezzo', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        const attrezzo = await attrezziDAO.create(conn, req.body);
        res.status(201).json(attrezzo);
        await conn.commit();
    } catch (err) {
        console.error(`routes/attrezzi.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400).json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

// PUT: aggiorna attrezzo
router.put('/putAttrezzo', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        const ok = await attrezziDAO.update(conn, req.body);
        if (ok) {
            res.status(200).json({ success: true });
        } else {
            res.status(404).json({ erroreMsg: "Attrezzo non trovato" });
        }
        await conn.commit();
    } catch (err) {
        console.error(`routes/attrezzi.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400).json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

// DELETE: elimina attrezzo
router.delete('/deleteAttrezzo', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        const ok = await attrezziDAO.remove(conn, req.query);
        if (ok) {
            res.status(200).send({ success: true });
        } else {
            res.status(404).json({ erroreMsg: "Attrezzo non trovato" });
        }
        await conn.commit();
    } catch (err) {
        console.error(`routes/attrezzi.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400).json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

module.exports = router;