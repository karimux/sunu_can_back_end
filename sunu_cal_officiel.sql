-- MariaDB dump 10.19  Distrib 10.4.22-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: sunu_can
-- ------------------------------------------------------
-- Server version	10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `equipes`
--

DROP TABLE IF EXISTS `equipes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `equipes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `victoire` int(11) NOT NULL,
  `null` int(11) NOT NULL,
  `defaite` int(11) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `poule` varchar(255) NOT NULL,
  `point` int(11) NOT NULL,
  `diff` varchar(255) NOT NULL,
  `but_encaisser` int(11) NOT NULL,
  `but_marquer` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipes`
--

LOCK TABLES `equipes` WRITE;
/*!40000 ALTER TABLE `equipes` DISABLE KEYS */;
/*!40000 ALTER TABLE `equipes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matchs`
--

DROP TABLE IF EXISTS `matchs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `matchs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `stade` varchar(255) NOT NULL,
  `team_home` int(11) NOT NULL,
  `team_away` int(11) NOT NULL,
  `score_home` int(11) NOT NULL,
  `score_away` int(11) NOT NULL,
  `scored_home` varchar(255) NOT NULL,
  `scored_away` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matchs`
--

LOCK TABLES `matchs` WRITE;
/*!40000 ALTER TABLE `matchs` DISABLE KEYS */;
INSERT INTO `matchs` VALUES (1,'2022-01-22 13:00:00','Karimux Stadium',1,4,2,0,'Modou Ndiaye 55','Musona Katsinde 33'),(2,'2022-01-22 13:00:00','D-Kane Stadium',1,4,2,0,'Modou Ndiaye 55','Musona Katsinde 33'),(3,'2022-01-22 13:00:00','Aziz Stadium',1,4,2,0,'Modou Ndiaye 55','Musona Katsinde 33'),(4,'2022-01-22 13:00:00','PDF Stadium',1,4,2,0,'Modou Ndiaye 55','Musona Katsinde 33'),(5,'2022-01-22 13:00:00','Worthy Stadium',1,4,2,0,'Modou Ndiaye 55','Musona Katsinde 33'),(6,'2022-01-22 13:00:00','Bakh Ya Stadium',1,4,2,0,'Modou Ndiaye 55','Musona Katsinde 33'),(7,'2022-01-22 13:00:00','Starlet Stadium',1,4,2,0,'Modou Ndiaye 55','Musona Katsinde 33'),(8,'2022-01-22 13:00:00','Cool Life Stadium',1,4,2,0,'Modou Ndiaye 55','Musona Katsinde 33'),(9,'2022-01-22 13:00:00','Wutang Clan Stadium',1,4,2,0,'Modou Ndiaye 55','Musona Katsinde 33'),(10,'2022-01-22 13:00:00','Remix Life Stadium',1,4,2,0,'Modou Ndiaye 55','Musona Katsinde 33'),(11,'2022-01-22 13:00:00','Easy Life Stadium',1,4,2,0,'Modou Ndiaye 55','Musona Katsinde 33'),(12,'2022-01-22 13:00:00','Watch Do Stadium',1,4,2,0,'Modou Ndiaye 55','Musona Katsinde 33');
/*!40000 ALTER TABLE `matchs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pronostics`
--

DROP TABLE IF EXISTS `pronostics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pronostics` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nom_gamer` varchar(255) NOT NULL,
  `prenom_gamer` varchar(255) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `tel` int(11) NOT NULL,
  `score` int(11) NOT NULL,
  `type_pronostic` varchar(255) NOT NULL,
  `gardien` varchar(255) NOT NULL,
  `defense` varchar(255) NOT NULL,
  `milieu` varchar(255) NOT NULL,
  `attaquant` varchar(255) NOT NULL,
  `vainqueur` varchar(255) NOT NULL,
  `match` varchar(255) NOT NULL,
  `score_match` varchar(255) NOT NULL,
  `buteur` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pronostics`
--

LOCK TABLES `pronostics` WRITE;
/*!40000 ALTER TABLE `pronostics` DISABLE KEYS */;
INSERT INTO `pronostics` VALUES (2,'Diop','karimux','Karimux',774778704,12,'11 de Départ','Modou Ndiaye','Mbeur','Ioe, cheick','Blood,Seck, Pass','Senegal','Senagl-Gambie','2-0','Kabila');
/*!40000 ALTER TABLE `pronostics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team_senegal`
--

DROP TABLE IF EXISTS `team_senegal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `team_senegal` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `club` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `numero` int(11) NOT NULL,
  `poste` varchar(255) NOT NULL,
  `photo` varchar(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team_senegal`
--

LOCK TABLES `team_senegal` WRITE;
/*!40000 ALTER TABLE `team_senegal` DISABLE KEYS */;
/*!40000 ALTER TABLE `team_senegal` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-13 16:12:31
