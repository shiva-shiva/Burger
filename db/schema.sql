create database if not exists `burgers_db`;
use `burgers_db`;
DROP TABLE IF EXISTS `burgers`;
CREATE TABLE `burgers` (
  `id` INTEGER AUTO_INCREMENT PRIMARY KEY,
  `burger_name` VARCHAR(255) NOT NULL,
  `devoured` boolean
);