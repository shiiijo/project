-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 21, 2019 at 02:02 PM
-- Server version: 5.1.41
-- PHP Version: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `major`
--

-- --------------------------------------------------------

--
-- Table structure for table `student_master`
--

CREATE TABLE IF NOT EXISTS `student_master` (
  `std_id` int(3) NOT NULL AUTO_INCREMENT,
  `std_name` varchar(30) NOT NULL,
  `stream` varchar(30) NOT NULL,
  `dob` varchar(25) NOT NULL,
  `email` varchar(30) NOT NULL,
  `mob` bigint(11) NOT NULL,
  PRIMARY KEY (`std_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `student_master`
--

INSERT INTO `student_master` (`std_id`, `std_name`, `stream`, `dob`, `email`, `mob`) VALUES
(1, 'Pradipta', 'Computer Application', '22-11-1997', 'pradiptaghatak0@gmail.com', 8250105166),
(2, 'Noor', 'Information Technology', '22-09-1996', 'noor@gmail.com', 8662255444),
(3, 'Rubel', 'Computer Science ', '19-05-1996', 'rubel@gmail.com', 995421164),
(4, 'dilabar', 'Computer Science ', '1997-11-24', 'dilabar@gmail.com', 9091014563);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
