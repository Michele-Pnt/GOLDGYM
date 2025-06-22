const express = require('express'); 
const db = require('../services/db');
const corsoDao = require('../dao/corsiDAO'); 
const router = express.Router();

// Rotta GET per ottenere tutti i corsi
router.get('/getCorso', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        res.json(await corsoDao.getAll(conn, req));
        await conn.commit();
    } catch (err) {
        console.error(`routes/corsi.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400);
        res.json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

// Rotta GET per ottenere un corso specifico tramite ID_CORSO
router.get('/getCorsoId', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        res.json(await corsoDao.getById(conn, req.query));
        await conn.commit();
    } catch (err) {
        console.error(`routes/corsi.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400);
        res.json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

// Rotta GET per ottenere un corso specifico tramite il SSN_C
router.get('/getCorsoSSN_C', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        res.json(await corsoDao.getBySSN_C(conn, req.query));
        await conn.commit();
    } catch (err) {
        console.error(`routes/corsi.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400);
        res.json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

// Rotta GET per ottenere un corso specifico tramite il SSN_D
router.get('/getCorsoSSN_D', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        res.json(await corsoDao.getBySSN_D(conn, req.query));
        await conn.commit();
    } catch (err) {
        console.error(`routes/corsi.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400);
        res.json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

// Rotta POST per creare un nuovo corso
router.post('/postCorso', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        const corso = await corsoDao.create(conn, req.body);
        res.status(201).json(corso);
        await conn.commit();
    } catch (err) {
        console.error(`routes/corsi.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400);
        res.json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

// Rotta PUT per aggiornare un corso esistente
router.put('/putCorso', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        const corso = await corsoDao.update(conn, req.body);
        if (corso) {
            res.status(200).json(corso);
        } else {
            res.status(404);
        }
        await conn.commit();
    } catch (err) {
        console.error(`routes/corsi.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400);
        res.json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

// Rotta DELETE per eliminare un corso
router.delete('/deleteCorso', async function (req, res) {
    const conn = await db.getConnection();
    await conn.beginTransaction();
    res.setHeader('Content-Type', 'application/json');
    try {
        const corso = await corsoDao.remove(conn, req.query);
        if (corso) {
            res.status(200).send({ success: true });
        } else {
            res.status(404);
        }
        await conn.commit();
    } catch (err) {
        console.error(`routes/corsi.js:`, err.message, err.stack);
        await conn.rollback();
        res.status(400);
        res.json({ erroreMsg: err.message });
    } finally {
        await conn.close();
    }
});

module.exports = router;