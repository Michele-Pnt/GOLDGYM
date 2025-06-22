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
-- Table structure for table `CLIENTE`
--

DROP TABLE IF EXISTS `CLIENTE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CLIENTE` (
  `SSN_C` char(9) NOT NULL,
  `NOME` varchar(45) NOT NULL,
  `COGNOME` varchar(45) NOT NULL,
  `DATA_NASCITA` date NOT NULL,
  `INDIRIZZO` varchar(80) DEFAULT NULL,
  `EMAIL` varchar(80) DEFAULT NULL,
  `TELEFONO` varchar(20) DEFAULT NULL,
  `DATA_CERTIFICATO` date NOT NULL,
  `DATA_ISCRIZIONE` date NOT NULL,
  PRIMARY KEY (`SSN_C`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CLIENTE`
--

LOCK TABLES `CLIENTE` WRITE;
/*!40000 ALTER TABLE `CLIENTE` DISABLE KEYS */;
INSERT INTO `CLIENTE` VALUES ('123456789','Marco','Rossi','1990-05-12','Via Roma 10','marco.rossi@example.com','3201234567','2025-01-15','2025-01-20'),('147258369','Alessandro','Conti','1983-09-05','Via Garibaldi 18','alessandro.conti@example.com','3281472583','2025-03-10','2025-03-12'),('258369147','Chiara','Moretti','1996-11-22','Via Dante 9','chiara.moretti@example.com','3272583691','2025-04-01','2025-04-02'),('321654987','Anna','Russo','1988-07-19','Corso Italia 33','anna.russo@example.com','3316549870','2025-04-03','2025-04-04'),('369147258','Davide','Galli','1989-02-18','Via Manzoni 27','davide.galli@example.com','3363691472','2025-01-18','2025-01-22'),('456789123','Giulia','Verdi','1992-03-14','Viale Libertà 5','giulia.verdi@example.com','3474567890','2025-03-01','2025-03-05'),('654321987','Paolo','Ferrari','1995-12-30','Via Venezia 8','paolo.ferrari@example.com','3496543218','2025-01-10','2025-01-15'),('741852963','Elisa','Fontana','1993-10-03','Via Mazzini 11','elisa.fontana@example.com','3357418529','2025-02-28','2025-03-01'),('789123456','Sara','Esposito','1991-06-10','Via Po 14','sara.esposito@example.com','3407891234','2025-02-20','2025-02-25'),('987654321','Luca','Bianchi','1985-08-23','Via Milano 22','luca.bianchi@example.com','3399876543','2025-02-10','2025-02-12');
/*!40000 ALTER TABLE `CLIENTE` ENABLE KEYS */;
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
