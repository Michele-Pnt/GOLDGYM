const express = require('express'); 
const db = require('../services/db');
const abbonamentiDAO = require('../dao/abbonamentiDAO'); 
const router = express.Router();

router.get('/getAbbonamento', async function (req, res) {  // Rotta GET per ottenere tutti gli abbonamenti
    conn=await db.getConnection(); // Ottiene una connessione al database
    await conn.beginTransaction(); // Inizia una transazione
    res.setHeader('Content-Type', 'application/json'); // Imposta il tipo di contenuto della risposta su JSON
    try {
        res.json(await abbonamentiDAO.getAll(conn,req)); 
        await conn.commit(); // Conferma la transazione
    } catch (err) {
        console.error(`routes/abbonamenti.js:`, err.message, err.stack); // Logga eventuali errori
        await conn.rollback(); // Annulla la transazione in caso di errore(importantissimo per evitare deadlock)
        res.status(400); // Imposta lo status HTTP su 400 (Bad Request)
        res.json({erroreMsg: err.message}); // Risponde con un messaggio di errore
    } finally {
        await conn.close(); // Chiude la connessione al database
    }
});

// Rotta GET per ottenere tutti gli utenti abbonati
router.get('/getAbbonati', async function (req, res) {  // Rotta GET per ottenere tutti gli abbonamenti
    conn=await db.getConnection(); // Ottiene una connessione al database
    await conn.beginTransaction(); // Inizia una transazione
    res.setHeader('Content-Type', 'application/json'); // Imposta il tipo di contenuto della risposta su JSON
    try {
        res.json(await abbonamentiDAO.getAllAbbonati(conn)); 
        await conn.commit(); // Conferma la transazione
    } catch (err) {
        console.error(`routes/abbonamenti.js:`, err.message, err.stack); // Logga eventuali errori
        await conn.rollback(); // Annulla la transazione in caso di errore(importantissimo per evitare deadlock)
        res.status(400); // Imposta lo status HTTP su 400 (Bad Request)
        res.json({erroreMsg: err.message}); // Risponde con un messaggio di errore
    } finally {
        await conn.close(); // Chiude la connessione al database
    }
});

router.get('/getAbbonamentoID', async function (req, res) {  // Rotta GET per ottenere un abbonamento specifico per ID_ABBONAMENTO
    conn=await db.getConnection(); // Ottiene una connessione al database
    await conn.beginTransaction(); // Inizia una transazione
    res.setHeader('Content-Type', 'application/json'); // Imposta il tipo di contenuto della risposta su JSON
    try {
        res.json(await abbonamentiDAO.getByID(conn,req.query)); 
        await conn.commit(); // Conferma la transazione
    } catch (err) {
        console.error(`routes/abbonamenti.js:`, err.message, err.stack); // Logga eventuali errori
        await conn.rollback(); // Annulla la transazione in caso di errore(importantissimo per evitare deadlock)
        res.status(400); // Imposta lo status HTTP su 400 (Bad Request)
        res.json({erroreMsg: err.message}); // Risponde con un messaggio di errore
    } finally {
        await conn.close(); // Chiude la connessione al database
    }
});

router.get('/getAbbonamentoSSN', async function (req, res) {  // Rotta GET per ottenere tutti gli abbonamenti di un cliente
    conn=await db.getConnection(); // Ottiene una connessione al database
    await conn.beginTransaction(); // Inizia una transazione
    res.setHeader('Content-Type', 'application/json'); // Imposta il tipo di contenuto della risposta su JSON
    try {
        res.json(await abbonamentiDAO.getBySSN(conn,req.query)); 
        await conn.commit(); // Conferma la transazione
    } catch (err) {
        console.error(`routes/abbonamenti.js:`, err.message, err.stack); // Logga eventuali errori
        await conn.rollback(); // Annulla la transazione in caso di errore(importantissimo per evitare deadlock)
        res.status(400); // Imposta lo status HTTP su 400 (Bad Request)
        res.json({erroreMsg: err.message}); // Risponde con un messaggio di errore
    } finally {
        await conn.close(); // Chiude la connessione al database
    }
});

router.post('/postAbbonamento', async function (req, res) { // Rotta POST per creare un nuovo abbonamento
    conn = await db.getConnection(); // Ottiene una connessione al database
    await conn.beginTransaction(); // Inizia una transazione
    res.setHeader('Content-Type', 'application/json'); // Imposta il tipo di contenuto della risposta su JSON
    try {
        const abbonamento = await abbonamentiDAO.create(conn, req.body); // Crea un nuovo abbonamento
        res.status(201).json(abbonamento); // Risponde con il nuovo abbonamento creato
        await conn.commit(); // Conferma la transazione
    } catch (err) {
        console.error(`routes/abbonamenti.js:`, err.message, err.stack); // Logga eventuali errori
        await conn.rollback(); // Annulla la transazione in caso di errore(importantissimo per evitare deadlock)
        res.status(400); // Imposta lo status HTTP su 400 (Bad Request)
        res.json({erroreMsg: err.message}); // Risponde con un messaggio di errore
    } finally {
        await conn.close(); // Chiude la connessione al database
    }
});

router.put('/putAbbonamento', async function (req, res) { // Rotta PUT per aggiornare un abbonamento esistente
    conn = await db.getConnection(); // Ottiene una connessione al database
    await conn.beginTransaction(); // Inizia una transazione
    res.setHeader('Content-Type', 'application/json'); // Imposta il tipo di contenuto della risposta su JSON
    try {
        const abbonamento = await abbonamentiDAO.update(conn, req.body); // Aggiorna l'abbonamento
        if (abbonamento) {
            res.status(200).json(abbonamento); // Risponde con l'abbonamento aggiornato
        } else {
            res.status(404); // Not Found se l'abbonamento non esiste
        }
        await conn.commit(); // Conferma la transazione
    } catch (err) {
        console.error(`routes/abbonamenti.js:`, err.message, err.stack); // Logga eventuali errori
        await conn.rollback(); // Annulla la transazione in caso di errore(importantissimo per evitare deadlock)
        res.status(400); // Imposta lo status HTTP su 400 (Bad Request)
        res.json({erroreMsg: err.message}); // Risponde con un messaggio di errore
    } finally {
        await conn.close(); // Chiude la connessione al database
    }
});

router.delete('/deleteAbbonamento', async function (req, res) { // Rotta DELETE per eliminare un abbonamento
    conn = await db.getConnection(); // Ottiene una connessione al database
    await conn.beginTransaction(); // Inizia una transazione
    res.setHeader('Content-Type', 'application/json'); // Imposta il tipo di contenuto della risposta su JSON
    try {
        const abbonamento = await abbonamentiDAO.remove(conn, req.query); // Elimina l'abbonamento specificato
        if (abbonamento) {
            res.status(200).send({ success: true }); // Risponde con 200 OK se l'eliminazione ha successo
        } else {
            res.status(404); // Not Found se l'abbonamento non esiste
        }
        await conn.commit();
    } catch (err) {
        console.error(`routes/abbonamenti.js:`, err.message, err.stack); // Logga eventuali errori
        await conn.rollback(); // Annulla la transazione in caso di errore(importantissimo per evitare deadlock)
        res.status(400); // Imposta lo status HTTP su 400 (Bad Request)
        res.json({erroreMsg: err.message}); // Risponde con un messaggio di errore
    } finally {
        await conn.close(); // Chiude la connessione al database
    }
}); 


module.exports = router;