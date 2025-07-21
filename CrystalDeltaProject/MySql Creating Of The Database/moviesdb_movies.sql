-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: moviesdb
-- ------------------------------------------------------
-- Server version	8.0.40

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
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `thumbnail_url` varchar(255) DEFAULT NULL,
  `rating` float DEFAULT NULL,
  `user_rating` float DEFAULT NULL,
  `video_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'Amaran','https://i.ibb.co/3pCfZ8c/amaran.jpg',8,9,'https://youtu.be/H7FT-d4YA74?si=-cQvgJsVIWs0PzX0'),(2,'Dune','https://i.ibb.co/0mFszX8/dune.jpg',8,8,'https://youtu.be/n9xhJrPXop4?si=b3MPwLVdEAX_zXl8'),(3,'Gladiator','https://i.ibb.co/FbZmTjk/gladiator.jpg',7,8,'https://youtu.be/P5ieIbInFpg?si=6FWQ1UMXZ3KY2w-F'),(4,'Lucky-baskhar','https://i.ibb.co/7bX8f88/lucky-baskhar.jpg',9,8,'https://youtu.be/vs6JMdKjoVI?si=O-PXbTixoFaE6IEm'),(5,'Moana2','https://i.ibb.co/C6MfLLh/moana2.jpg',9,8,'https://youtu.be/hDZ7y8RP5HE?si=3KnTqm2fr6pAoSOA'),(6,'Wicked','https://i.ibb.co/1K8yCg7/wicked.jpg',7,7,'https://youtu.be/6COmYeLsz4c?si=cTtORdS5znxpl7Js'),(7,'IronMan','https://i.ibb.co/5M11sx2/IronMan.jpg',9,9,'https://youtu.be/8ugaeA-nMTc?si=DPvhsG80sUApxSK0'),(8,'Our Little Secret','https://i.ibb.co/m0ys75J/Our-Little-Secret.jpg',7,7,'https://youtu.be/fcc9G9PXTEE?si=xBboOT8Cx4jtLW1s'),(9,'Pushpa','https://i.ibb.co/WpkRfzX/Pushpa.jpg',8,7,'https://youtu.be/1kVK0MZlbI4?si=d_wGNd8Ni7YxUhCy'),(10,'Gladiator1','https://i.ibb.co/yP55dpy/gladiator1.jpg',8,9,'https://youtu.be/P5ieIbInFpg?si=ixoc7ArybaeLeVjk'),(11,'Conclave','https://i.ibb.co/9NZHsYn/Conclave.jpg',8,7,'https://youtu.be/JX9jasdi3ic?si=YX33l-WW1Xu4XWjh'),(12,'Snow White','https://i.ibb.co/V3WThWT/Snow-White.jpg',8,8,'https://youtu.be/iV46TJKL8cU?si=xuuuTP1w2vfsJ5th'),(13,'Deadpool & Wolverine','https://i.ibb.co/pw7g16M/Deadpool-Wolverine.jpg',8,8,'https://youtu.be/73_1biulkYk?si=M9cy4UxhFkhkRt3y'),(14,'Smile 2','https://i.ibb.co/WGDxM5z/Smile-2.jpg',8,6,'https://youtu.be/0HY6QFlBzUY?si=gmWa7oLvgK9yeXcm'),(15,'The Merry Gentlemen','https://i.ibb.co/Z2Mb45s/The-Merry-Gentlemen.jpg',7,7,'https://youtu.be/G80Q8-MJM1A?si=hftkwDmkyOohNdZQ'),(16,'Thor','https://i.ibb.co/Jmc52vj/Thor.jpg',8,8,'https://youtu.be/JOddp-nlNvQ?si=C4WXIv72L8IUHRdW'),(17,'Avengers Endgame','https://i.ibb.co/ZmZj9bC/Avengers-Endgame1.jpg',8,8,'https://youtu.be/TcMBFSGVi1c?si=AF4yfc3DsOsieve7'),(18,'Squid Game','https://i.ibb.co/nkSYfQg/Squid-Game.jpg',8,9,'https://youtu.be/oqxAJKy0ii4?si=S8Nx9WoL-ngfBwHN');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-16 21:03:58
