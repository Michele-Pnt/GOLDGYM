const express = require('express');
const db = require('../services/db');
const prodottiDAO = require('../dao/prodottiDAO');
const router = express.Router();

// GET: tutti i prodotti
router.get('/getProdotto', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        const prodotti = await prodottiDAO.getAll(conn);
        res.json(prodotti);
        await conn.commit();
    } catch (err) {
        console.error(`routes/prodotti.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400).json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

// GET: prodotto per ID_PRODOTTO
router.get('/getProdottoById', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        const prodotto = await prodottiDAO.getById(conn, req.query);
        if (prodotto) {
            res.json(prodotto);
        } else {
            res.status(404).json({ erroreMsg: "Prodotto non trovato" });
        }
        await conn.commit();
    } catch (err) {
        console.error(`routes/prodotti.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400).json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

// GET: restituisce gli ordini di un cliente per SSN_C
router.get('/getProdottoBySSN_C', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        const prodotto = await prodottiDAO.getBySSN_C(conn, req.query);
        if (prodotto) {
            res.json(prodotto);
        } else {
            res.status(404).json({ erroreMsg: "Prodotto non trovato" });
        }
        await conn.commit();
    } catch (err) {
        console.error(`routes/prodotti.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400).json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

// POST: crea nuovo prodotto
router.post('/postProdotto', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        const prodotto = await prodottiDAO.create(conn, req.body);
        res.status(201).json(prodotto);
        await conn.commit();
    } catch (err) {
        console.error(`routes/prodotti.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400).json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

// PUT: aggiorna prodotto
router.put('/putProdotto', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        const ok = await prodottiDAO.update(conn, req.body);
        if (ok) {
            res.status(200).json({ success: true });
        } else {
            res.status(404).json({ erroreMsg: "Prodotto non trovato" });
        }
        await conn.commit();
    } catch (err) {
        console.error(`routes/prodotti.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400).json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

// DELETE: elimina prodotto
router.delete('/deleteProdotto', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        const ok = await prodottiDAO.remove(conn, req.query);
        if (ok) {
            res.status(200).send({ success: true });
        } else {
            res.status(404).json({ erroreMsg: "Prodotto non trovato" });
        }
        await conn.commit();
    } catch (err) {
        console.error(`routes/prodotti.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400).json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

module.exports = router;