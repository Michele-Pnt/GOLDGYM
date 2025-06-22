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
-- Table structure for table `ATTREZZO`
--

DROP TABLE IF EXISTS `ATTREZZO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ATTREZZO` (
  `ID_ATTREZZO` int NOT NULL,
  `NOME` varchar(45) NOT NULL,
  `MARCA` varchar(45) DEFAULT NULL,
  `STATO` varchar(45) NOT NULL DEFAULT 'utilizzabile',
  PRIMARY KEY (`ID_ATTREZZO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ATTREZZO`
--

LOCK TABLES `ATTREZZO` WRITE;
/*!40000 ALTER TABLE `ATTREZZO` DISABLE KEYS */;
INSERT INTO `ATTREZZO` VALUES (1,'Tapis Roulant','Technogym','utilizzabile'),(2,'Cyclette','Matrix','utilizzabile'),(3,'Lat Machine','Panatta','utilizzabile'),(4,'Panca Piana','Life Fitness','utilizzabile'),(5,'Leg Press','Hammer Strength','utilizzabile'),(6,'Ellittica','NordicTrack','utilizzabile'),(7,'Chest Press','BH Fitness','utilizzabile'),(8,'Shoulder Press','Kettler','utilizzabile'),(9,'Rowing Machine','Concept2','utilizzabile'),(10,'Smith Machine','Domyos','utilizzabile');
/*!40000 ALTER TABLE `ATTREZZO` ENABLE KEYS */;
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
