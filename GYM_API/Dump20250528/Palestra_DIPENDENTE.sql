-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: Palestra
-- ------------------------------------------------------
-- Server version	8.0.42-0ubuntu0.24.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `DIPENDENTE`
--

DROP TABLE IF EXISTS `DIPENDENTE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `DIPENDENTE` (
  `SSN_D` char(9) NOT NULL,
  `NOME` varchar(45) NOT NULL,
  `COGNOME` varchar(45) NOT NULL,
  `INDIRIZZO` varchar(80) DEFAULT NULL,
  `TELEFONO` varchar(20) DEFAULT NULL,
  `EMAIL` varchar(80) DEFAULT NULL,
  `IBAN` char(27) NOT NULL,
  `RUOLO` varchar(45) DEFAULT NULL,
  `TURNO` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`SSN_D`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DIPENDENTE`
--

LOCK TABLES `DIPENDENTE` WRITE;
/*!40000 ALTER TABLE `DIPENDENTE` DISABLE KEYS */;
INSERT INTO `DIPENDENTE` VALUES ('111111111','Matteo','Rossi','Via Garibaldi 12, Milano','3201111111','matteo.rossi@gmail.com','IT60X0542811101000000123456','PT','Mattina'),('112233445','Simone','De Luca','Via Napoli 22, Milano','3201122334','simone.deluca@gmail.com','IT60X0542811101000001123456','Segreteria','Mattina'),('123123123','Elisa','Moretti','Via Manzoni 10, Verona','3211231234','elisa.moretti@gmail.com','IT60X0542811101000001023456','Istruttore','Mattina'),('222222222','Laura','Bianchi','Via Verdi 45, Torino','3202222222','laura.bianchi@gmail.com','IT60X0542811101000000223456','Istruttore','Pomeriggio'),('223344556','Federica','Longo','Via Trento 33, Torino','3202233445','federica.longo@gmail.com','IT60X0542811101000001223456','Segreteria','Pomeriggio'),('333333333','Alessio','Conti','Via Roma 87, Firenze','3203333333','alessio.conti@gmail.com','IT60X0542811101000000323456','PT','Sera'),('334455667','Marco','Bruni','Via Bologna 15, Firenze','3203344556','marco.bruni@gmail.com','IT60X0542811101000001323456','Pulizie','Mattina'),('444444444','Giulia','Neri','Viale Libertà 8, Bologna','3204444444','giulia.neri@gmail.com','IT60X0542811101000000423456','Istruttore','Mattina'),('445566778','Valentina','Parisi','Via Sicilia 7, Roma','3204455667','valentina.parisi@gmail.com','IT60X0542811101000001423456','Pulizie','Sera'),('555555555','Francesco','Russo','Corso Italia 2, Napoli','3205555555','francesco.russo@gmail.com','IT60X0542811101000000523456','PT','Pomeriggio'),('556677889','Gianni','Colombo','Via Bari 4, Napoli','3205566778','gianni.colombo@gmail.com','IT60X0542811101000001523456','Segreteria','Mattina'),('666666666','Chiara','Galli','Via Torino 21, Roma','3206666666','chiara.galli@gmail.com','IT60X0542811101000000623456','Istruttore','Sera'),('777777777','Davide','Fontana','Via Mazzini 3, Bari','3207777777','davide.fontana@gmail.com','IT60X0542811101000000723456','PT','Mattina'),('888888888','Martina','Ferrari','Via Dante 14, Genova','3208888888','martina.ferrari@gmail.com','IT60X0542811101000000823456','Istruttore','Pomeriggio'),('999999999','Andrea','Greco','Via Venezia 9, Palermo','3209999999','andrea.greco@gmail.com','IT60X0542811101000000923456','PT','Sera');
/*!40000 ALTER TABLE `DIPENDENTE` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-28 14:50:32
