-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Temps de generació: 24-04-2022 a les 17:46:18
-- Versió del servidor: 8.0.26-0ubuntu0.20.04.3
-- Versió de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de dades: `fitxatges`
--
CREATE DATABASE IF NOT EXISTS `fitxatges` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `fitxatges`;

-- --------------------------------------------------------

--
-- Estructura de la taula `usuaris`
--

DROP TABLE IF EXISTS `usuaris`;
CREATE TABLE IF NOT EXISTS `usuaris` (
  `dni` varchar(9) NOT NULL,
  `usuari` varchar(40) NOT NULL,
  `contrasenya` varchar(30) NOT NULL,
  `token` varchar(100) NOT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcament de dades per a la taula `usuaris`
--

INSERT INTO `usuaris` (`dni`, `usuari`, `contrasenya`, `token`) VALUES
('12341234D', 'PereCadener', 'pere123', 'abcd'),
('12345678Z', 'PepMartínez', 'pep123', 's1a2'),
('56785678N', 'Maria123', 'maria123', 'sasa'),
('98765432M', 'Lluisa456', 'lluisa123', '1234');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
