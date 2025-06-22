const express = require('express'); 
const db = require('../services/db');
const clientiDAO = require('../dao/clientiDAO'); 
const router = express.Router();

// Rotta GET per ottenere tutti i clienti
router.get('/getCliente', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        res.json(await clientiDAO.getAll(conn, req));
        await conn.commit();
    } catch (err) {
        console.error(`routes/clienti.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400);
        res.json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

// Rotta GET per ottenere i clienti che hanno un abbonamento attivo
router.get('/getClientiUnici', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        res.json(await clientiDAO.getClientiUnici(conn));
        await conn.commit();
    } catch (err) {
        console.error(`routes/clienti.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400);
        res.json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});


// Rotta GET per ottenere un cliente specifico tramite SSN
router.get('/getClienteSSN', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        res.json(await clientiDAO.getBySSN(conn, req.query));
        await conn.commit();
    } catch (err) {
        console.error(`routes/clienti.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400);
        res.json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

// Rotta GET per ottenere un cliente specifico tramite email
router.get('/getClienteByEmail', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        res.json(await clientiDAO.getByEmail(conn, req.query));
        await conn.commit();
    } catch (err) {
        console.error(`routes/clienti.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400);
        res.json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

// Rotta POST per creare un nuovo cliente
router.post('/postCliente', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        const cliente = await clientiDAO.create(conn, req.body);
        res.status(201).json(cliente);
        await conn.commit();
    } catch (err) {
        console.error(`routes/clienti.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400);
        res.json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});
// Rotta PUT per aggiornare un cliente esistente
router.put('/putCliente', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        const cliente = await clientiDAO.update(conn, req.body);
        res.status(200).json(cliente);
        await conn.commit();
    } catch (err) {
        console.error(`routes/clienti.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400);
        res.json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

// Rotta DELETE per eliminare un cliente
router.delete('/deleteCliente', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        const cliente = await clientiDAO.remove(conn, req.query);
        if (cliente) {
            res.status(200).send({ success: true });
        } else {
            res.status(404);
        }
        await conn.commit();
    } catch (err) {
        console.error(`routes/clienti.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400);
        res.json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

module.exports = router;