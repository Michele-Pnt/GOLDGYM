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
-- Table structure for table `ESERCIZI`
--

DROP TABLE IF EXISTS `ESERCIZI`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ESERCIZI` (
  `ESERCIZIO` varchar(45) NOT NULL,
  `ID_SCHEDA` int NOT NULL,
  PRIMARY KEY (`ESERCIZIO`,`ID_SCHEDA`),
  KEY `fk_ESERCIZI_1_idx` (`ID_SCHEDA`),
  CONSTRAINT `fk_ESERCIZI_1` FOREIGN KEY (`ID_SCHEDA`) REFERENCES `SCHEDA` (`ID_SCHEDA`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ESERCIZI`
--

LOCK TABLES `ESERCIZI` WRITE;
/*!40000 ALTER TABLE `ESERCIZI` DISABLE KEYS */;
INSERT INTO `ESERCIZI` VALUES ('Crunch addominali',1),('Panca Piana',1),('Squat',1),('Stacco da terra',1),('Curl bicipiti',2),('Distensioni su panca inclinata',2),('French press',2),('Panca Piana',2),('Rematore con bilanciere',2),('Affondi',3),('Crunch addominali',3),('Plank',3),('Spinte con manubri',3),('Squat',3),('Trazioni alla sbarra',3),('Leg press',4),('Panca piana',4),('Alzate laterali',5),('Dip alle parallele',5),('Plank',5),('Push press',5),('Sit-up',5),('Squat bulgaro',5),('Stacco rumeno',5);
/*!40000 ALTER TABLE `ESERCIZI` ENABLE KEYS */;
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
