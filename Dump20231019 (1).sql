-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: quiz
-- ------------------------------------------------------
-- Server version	8.0.34-0ubuntu0.22.04.1

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
-- Table structure for table `Answer`
--

DROP TABLE IF EXISTS `Answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Answer` (
  `answer_id` int NOT NULL AUTO_INCREMENT,
  `question_id` int NOT NULL,
  `is_answer` tinyint(1) NOT NULL,
  `content` longtext NOT NULL,
  `created_at` date NOT NULL,
  PRIMARY KEY (`answer_id`),
  KEY `fk_Answer_Question_idx` (`question_id`),
  CONSTRAINT `fk_Answer_Question` FOREIGN KEY (`question_id`) REFERENCES `Question` (`question_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Answer`
--

LOCK TABLES `Answer` WRITE;
/*!40000 ALTER TABLE `Answer` DISABLE KEYS */;
INSERT INTO `Answer` VALUES (1,1,0,'1','2023-10-19'),(2,1,1,'5','2023-10-19'),(3,1,0,'6','2023-10-19'),(4,1,0,'7','2023-10-19'),(5,2,0,'4','2023-10-19'),(6,2,0,'5','2023-10-19'),(7,2,0,'6','2023-10-19'),(8,2,1,'7','2023-10-19'),(15,3,1,'2829','2023-10-19'),(16,3,0,'2819','2023-10-19'),(17,3,0,'2839','2023-10-19'),(18,3,0,'2809','2023-10-19'),(19,4,0,'Ngô Bộ Lĩnh','2023-10-19'),(20,4,1,'Ngô Thì Nhậm','2023-10-19'),(21,4,0,'Ngô Thuỵ','2023-10-19'),(22,4,0,'Ngô Ánh','2023-10-19'),(23,5,0,'Lý Thường Kiệt','2023-10-19'),(24,5,0,'Lê Lợi','2023-10-19'),(25,5,1,'Mai Hắc Đế','2023-10-19'),(26,5,0,'Nguyễn Trãi','2023-10-19'),(27,6,1,' Hải Thượng Lãn Ông, Lê Hữu Trác','2023-10-19'),(28,6,0,' Lý Công Uẩn','2023-10-19'),(29,6,0,' Hoàng Diệu','2023-10-19'),(30,6,0,'Hoa Đà','2023-10-19');
/*!40000 ALTER TABLE `Answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Category`
--

DROP TABLE IF EXISTS `Category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Category` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `name` char(50) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Category`
--

LOCK TABLES `Category` WRITE;
/*!40000 ALTER TABLE `Category` DISABLE KEYS */;
INSERT INTO `Category` VALUES (1,'math'),(2,'history');
/*!40000 ALTER TABLE `Category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Question`
--

DROP TABLE IF EXISTS `Question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Question` (
  `question_id` int NOT NULL AUTO_INCREMENT,
  `category_id` int NOT NULL,
  `created_at` date NOT NULL,
  `content` longtext NOT NULL,
  `level` tinyint NOT NULL,
  PRIMARY KEY (`question_id`),
  KEY `fk_Question_Category_idx` (`category_id`),
  CONSTRAINT `fk_Question_Category` FOREIGN KEY (`category_id`) REFERENCES `Category` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Question`
--

LOCK TABLES `Question` WRITE;
/*!40000 ALTER TABLE `Question` DISABLE KEYS */;
INSERT INTO `Question` VALUES (1,1,'2023-10-19','2+3=?',0),(2,1,'2023-10-19','3+4=?',0),(3,1,'2023-10-19','23*123=?',1),(4,2,'2023-10-19',' Lê triều sử ký soạn thành, họ Ngô?',1),(5,2,'2023-10-19',' Vua nào mặt sắt đen sì ?',1),(6,2,'2023-10-19','Đông y lừng tiếng danh sư?',1);
/*!40000 ALTER TABLE `Question` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-19 19:28:40
