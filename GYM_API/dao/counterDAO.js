const db = require('../services/db');

const nextId = async function (connection, counterId) {

  sql="UPDATE counter SET counterValue=counterValue+1 WHERE counterId= ?";// prima aggiorno il valore e poi faccio la select per evitare che due processi concorrenti possano leggere il valore precedente
  params=[counterId];
  //sempre megio fare prima l'update e poi la select per evitare che due processi concorrenti possano leggere il valore precedente (così gli attribuisco l'allocazione in memoria)
  rows = await db.execute(connection,sql,params);

  sql="SELECT counterValue FROM counter WHERE counterId= ?";

  rows = await db.execute(connection,sql,params);

  return rows[0].counterValue;

}

module.exports = { nextId };
