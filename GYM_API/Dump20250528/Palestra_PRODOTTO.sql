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
-- Table structure for table `PRODOTTO`
--

DROP TABLE IF EXISTS `PRODOTTO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PRODOTTO` (
  `ID_PRODOTTO` int NOT NULL,
  `MARCA` varchar(45) DEFAULT NULL,
  `NOME` varchar(45) NOT NULL,
  `QUANTITA_MAGAZZINO` int NOT NULL,
  `PREZZO` decimal(5,2) NOT NULL,
  `CATEGORIA` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID_PRODOTTO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PRODOTTO`
--

LOCK TABLES `PRODOTTO` WRITE;
/*!40000 ALTER TABLE `PRODOTTO` DISABLE KEYS */;
INSERT INTO `PRODOTTO` VALUES (1,'Optimum Nutrition','Proteine Whey 1kg',20,29.99,'Integratore'),(2,'Decathlon','Fasce Elastiche',50,9.90,'Accessori'),(3,'MyProtein','BCAA 500g',15,24.50,'Integratore'),(4,'ShakerPro','Shaker 700ml',30,5.99,'Accessori'),(5,'Nike','Asciugamano Palestra',25,12.00,'Abbigliamento'),(6,'BiotechUSA','Barrette Proteiche',100,2.50,'Snack'),(7,'Under Armour','Guanti da Palestra',10,17.99,'Accessori'),(8,'FitLife','Tappetino Yoga',12,19.90,'Accessori'),(9,'Scitec Nutrition','Pre-Workout 300g',8,26.99,'Integratore'),(10,'Adidas','Borraccia 1L',40,8.49,'Accessori'),(11,'Nike','Maglietta',20,30.99,'Abbigliamento');
/*!40000 ALTER TABLE `PRODOTTO` ENABLE KEYS */;
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
