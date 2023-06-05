-- --------------------------------------------------------
-- Hôte:                         62.210.187.246
-- Version du serveur:           10.9.3-MariaDB-1:10.9.3+maria~ubu2204 - mariadb.org binary distribution
-- SE du serveur:                debian-linux-gnu
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Listage de la structure de la base pour thetiptop_prod
DROP DATABASE IF EXISTS `thetiptop_prod`;
CREATE DATABASE IF NOT EXISTS `thetiptop_prod` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `thetiptop_prod`;

-- Listage de la structure de table thetiptop_prod. AspNetRoleClaims
DROP TABLE IF EXISTS `AspNetRoleClaims`;
CREATE TABLE IF NOT EXISTS `AspNetRoleClaims` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `RoleId` varchar(255) NOT NULL,
  `ClaimType` longtext DEFAULT NULL,
  `ClaimValue` longtext DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `IX_AspNetRoleClaims_RoleId` (`RoleId`),
  CONSTRAINT `FK_AspNetRoleClaims_AspNetRoles_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `AspNetRoles` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Listage des données de la table thetiptop_prod.AspNetRoleClaims : ~0 rows (environ)

-- Listage de la structure de table thetiptop_prod. AspNetRoles
DROP TABLE IF EXISTS `AspNetRoles`;
CREATE TABLE IF NOT EXISTS `AspNetRoles` (
  `Id` varchar(255) NOT NULL,
  `Name` varchar(256) DEFAULT NULL,
  `NormalizedName` varchar(256) DEFAULT NULL,
  `ConcurrencyStamp` longtext DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `RoleNameIndex` (`NormalizedName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Listage des données de la table thetiptop_prod.AspNetRoles : ~5 rows (environ)
INSERT INTO `AspNetRoles` (`Id`, `Name`, `NormalizedName`, `ConcurrencyStamp`) VALUES
	('191a4ae1-41d1-4a35-9d7a-be7b1d52fc42', 'huissier', 'HUISSIER', '9dcababe-b8d0-405b-a799-c90203ac632d'),
	('5f7adf32-3224-45c7-a643-95e6c135f979', 'client', 'CLIENT', '1129edd6-72ac-423a-bc0f-9826767c86fe'),
	('756676e2-3333-4d43-995f-3456e4e3697b', 'FILE', 'FILE', '56ca270f-7d27-4100-9091-39f9ed7e8b07'),
	('ab5934f4-eb2b-4f15-8615-0707a636045a', 'employe', 'EMPLOYÉ', '8e67512b-9aae-4e77-9b7b-4f6b4c055336'),
	('c8773277-96c5-43de-8022-c70fe4c82cff', 'admin', 'ADMIN', '667fd29c-c594-4981-bb05-4813d8d104d1');

-- Listage de la structure de table thetiptop_prod. AspNetUserClaims
DROP TABLE IF EXISTS `AspNetUserClaims`;
CREATE TABLE IF NOT EXISTS `AspNetUserClaims` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` varchar(255) NOT NULL,
  `ClaimType` longtext DEFAULT NULL,
  `ClaimValue` longtext DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `IX_AspNetUserClaims_UserId` (`UserId`),
  CONSTRAINT `FK_AspNetUserClaims_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `AspNetUsers` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Listage des données de la table thetiptop_prod.AspNetUserClaims : ~0 rows (environ)

-- Listage de la structure de table thetiptop_prod. AspNetUserLogins
DROP TABLE IF EXISTS `AspNetUserLogins`;
CREATE TABLE IF NOT EXISTS `AspNetUserLogins` (
  `LoginProvider` varchar(255) NOT NULL,
  `ProviderKey` varchar(255) NOT NULL,
  `ProviderDisplayName` longtext DEFAULT NULL,
  `UserId` varchar(255) NOT NULL,
  PRIMARY KEY (`LoginProvider`,`ProviderKey`),
  KEY `IX_AspNetUserLogins_UserId` (`UserId`),
  CONSTRAINT `FK_AspNetUserLogins_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `AspNetUsers` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Listage des données de la table thetiptop_prod.AspNetUserLogins : ~0 rows (environ)

-- Listage de la structure de table thetiptop_prod. AspNetUserRoles
DROP TABLE IF EXISTS `AspNetUserRoles`;
CREATE TABLE IF NOT EXISTS `AspNetUserRoles` (
  `UserId` varchar(255) NOT NULL,
  `RoleId` varchar(255) NOT NULL,
  PRIMARY KEY (`UserId`,`RoleId`),
  KEY `IX_AspNetUserRoles_RoleId` (`RoleId`),
  CONSTRAINT `FK_AspNetUserRoles_AspNetRoles_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `AspNetRoles` (`Id`) ON DELETE CASCADE,
  CONSTRAINT `FK_AspNetUserRoles_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `AspNetUsers` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Listage des données de la table thetiptop_prod.AspNetUserRoles : ~6 rows (environ)
INSERT INTO `AspNetUserRoles` (`UserId`, `RoleId`) VALUES
	('32e35586-9a89-4cf7-b929-d1f98e682563', '5f7adf32-3224-45c7-a643-95e6c135f979'),
	('6e0bd2da-b12d-47f9-9b65-36b61d7aa684', 'c8773277-96c5-43de-8022-c70fe4c82cff'),
	('ad986ba6-8445-4f6a-bbd5-9bcc98780a07', 'ab5934f4-eb2b-4f15-8615-0707a636045a'),
	('c4a8b7a5-6691-4930-b05f-25580fd2d506', 'c8773277-96c5-43de-8022-c70fe4c82cff'),
	('d006c98c-1160-406a-a380-c8a49b960cdc', 'ab5934f4-eb2b-4f15-8615-0707a636045a'),
	('f8325148-9d0a-4603-aec8-f95d18924802', '191a4ae1-41d1-4a35-9d7a-be7b1d52fc42');

-- Listage de la structure de table thetiptop_prod. AspNetUsers
DROP TABLE IF EXISTS `AspNetUsers`;
CREATE TABLE IF NOT EXISTS `AspNetUsers` (
  `Id` varchar(255) NOT NULL,
  `Nom` varchar(250) CHARACTER SET utf8mb3 NOT NULL,
  `Prenom` varchar(200) CHARACTER SET utf8mb3 DEFAULT NULL,
  `Datenaissance` datetime(6) DEFAULT NULL,
  `Adresse` varchar(250) CHARACTER SET utf8mb3 DEFAULT NULL,
  `CodePostal` longtext DEFAULT NULL,
  `Ville` varchar(250) CHARACTER SET utf8mb3 DEFAULT NULL,
  `Pays` varchar(250) CHARACTER SET utf8mb3 DEFAULT NULL,
  `UserName` varchar(256) DEFAULT NULL,
  `NormalizedUserName` varchar(256) DEFAULT NULL,
  `Email` varchar(256) DEFAULT NULL,
  `NormalizedEmail` varchar(256) DEFAULT NULL,
  `EmailConfirmed` tinyint(1) NOT NULL,
  `PasswordHash` longtext DEFAULT NULL,
  `SecurityStamp` longtext DEFAULT NULL,
  `ConcurrencyStamp` longtext DEFAULT NULL,
  `PhoneNumber` longtext DEFAULT NULL,
  `PhoneNumberConfirmed` tinyint(1) NOT NULL,
  `TwoFactorEnabled` tinyint(1) NOT NULL,
  `LockoutEnd` datetime(6) DEFAULT NULL,
  `LockoutEnabled` tinyint(1) NOT NULL,
  `AccessFailedCount` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `UserNameIndex` (`NormalizedUserName`),
  KEY `EmailIndex` (`NormalizedEmail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Listage des données de la table thetiptop_prod.AspNetUsers : ~6 rows (environ)
INSERT INTO `AspNetUsers` (`Id`, `Nom`, `Prenom`, `Datenaissance`, `Adresse`, `CodePostal`, `Ville`, `Pays`, `UserName`, `NormalizedUserName`, `Email`, `NormalizedEmail`, `EmailConfirmed`, `PasswordHash`, `SecurityStamp`, `ConcurrencyStamp`, `PhoneNumber`, `PhoneNumberConfirmed`, `TwoFactorEnabled`, `LockoutEnd`, `LockoutEnabled`, `AccessFailedCount`) VALUES
	('32e35586-9a89-4cf7-b929-d1f98e682563', 'LEHOUHOU', 'Rita', NULL, '1 rue du 19 Mars 1962', '78360', 'Montesson', NULL, 'ritalehouhou@gmail.com', 'RITALEHOUHOU@GMAIL.COM', 'ritalehouhou@gmail.com', 'RITALEHOUHOU@GMAIL.COM', 0, 'AQAAAAEAACcQAAAAEHU+moHhW0nedH+sXnKl8HgSE9AoRXq3te8rvsffyYxZoZNmbuXamBqv8dHwHxU4QA==', 'QQV67VCQGRLNCUWUDXFTHQKCC72I6O6E', '098681e4-fc74-4ae5-892b-26d693d23877', NULL, 0, 0, NULL, 1, 0),
	('6e0bd2da-b12d-47f9-9b65-36b61d7aa684', 'Boudrissi', 'Chaimae', NULL, NULL, NULL, NULL, NULL, 'chaimae.boudrissi@gmail.com', 'CHAIMAE.BOUDRISSI@GMAIL.COM', 'chaimae.boudrissi@gmail.com', 'CHAIMAE.BOUDRISSI@GMAIL.COM', 0, 'AQAAAAEAACcQAAAAEFXUnYPFzkBWUQzXtvD3zfvHzkCqcv0LTHyrkYxHqHmx2buWACeu861/k750EMsxow==', 'HF7LE4XUDO44HOEOM2VCGSBO6AFVRKMT', '8a6462d6-b235-4d45-a38b-078421df9a86', NULL, 0, 0, NULL, 1, 0),
	('ad986ba6-8445-4f6a-bbd5-9bcc98780a07', 'KIBAMBA', 'Karvie', NULL, 'string', '95300', 'Pontoise', NULL, 'karviekibamba@gmail.com', 'KARVIEKIBAMBA@GMAIL.COM', 'karviekibamba@gmail.com', 'KARVIEKIBAMBA@GMAIL.COM', 0, 'AQAAAAEAACcQAAAAEIntJD1WhEPOdZkWoZuEh9/K5bE0gb6A3CyvtcF6Usv9w3heUJLg2dNNIuuufP5VqQ==', 'EQPV73GCVTVS5RIJ3OO5FU5WWERYZEIY', '042956c9-c599-4e21-ae47-2285721f8868', NULL, 0, 0, NULL, 1, 0),
	('c4a8b7a5-6691-4930-b05f-25580fd2d506', 'MOUKIETOU', 'Venichelle', NULL, 'string', '95300', 'Pontoise', NULL, 'moukietouniche@gmail.com', 'MOUKIETOUNICHE@GMAIL.COM', 'moukietouniche@gmail.com', 'MOUKIETOUNICHE@GMAIL.COM', 0, 'AQAAAAEAACcQAAAAELVKIsG2b+hHn+YuV34pTz2mycdG9bNd3tHceeQxUnMWquPFaxnt8wdvKIKOexq+PA==', 'ERTT3XGQCMW4AG3OPVVAH2UKJHHVLOZY', '3984733f-e4ba-402c-8c1d-62a2d943d565', NULL, 0, 0, NULL, 1, 0),
	('d006c98c-1160-406a-a380-c8a49b960cdc', 'test', 'test', NULL, '2 rue de France', '95250', 'Cernay', NULL, 'test@aa.aa', 'AA@AA.AA', 'aa@aa.aa', 'AA@AA.AA', 0, 'AQAAAAEAACcQAAAAECO2cxqm9fJxBfetGMwN6y8Yw8kPUZBSYG/muID6/zWYapZstkgxJ3ZikegZ0n8qdA==', 'CFAKW6N3OZYF5FQPSICJVZMKJMWFTCSK', '1d9df9f4-b562-4fdb-8e61-7e13cc1a1edf', NULL, 0, 0, NULL, 1, 0),
	('f8325148-9d0a-4603-aec8-f95d18924802', 'MBOKO', 'Jocelyn', NULL, 'string', '78360', 'Montesson', NULL, 'jocelynmboko@gmail.com', 'JOCELYNMBOKO@GMAIL.COM', 'jocelynmboko@gmail.com', 'JOCELYNMBOKO@GMAIL.COM', 0, 'AQAAAAEAACcQAAAAEB2kOceRSL0x7BFMcvWvgfTo9GIqRoA1UC5wYFXz67ASCGb7bGGMizTWiTvW+co2AA==', 'JLZRZC5DN3ECUDSHEPB3MU3IBTMC4IIM', 'b242c00f-813a-4f5b-bfe0-1a0e94c83aae', NULL, 0, 0, NULL, 1, 0);

-- Listage de la structure de table thetiptop_prod. AspNetUserTokens
DROP TABLE IF EXISTS `AspNetUserTokens`;
CREATE TABLE IF NOT EXISTS `AspNetUserTokens` (
  `UserId` varchar(255) NOT NULL,
  `LoginProvider` varchar(255) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Value` longtext DEFAULT NULL,
  PRIMARY KEY (`UserId`,`LoginProvider`,`Name`),
  CONSTRAINT `FK_AspNetUserTokens_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `AspNetUsers` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Listage des données de la table thetiptop_prod.AspNetUserTokens : ~0 rows (environ)

-- Listage de la structure de table thetiptop_prod. Coupons
DROP TABLE IF EXISTS `Coupons`;
CREATE TABLE IF NOT EXISTS `Coupons` (
  `Idcoupon` int(11) NOT NULL AUTO_INCREMENT,
  `CodeCoupon` int(11) DEFAULT NULL,
  `DateCreation` datetime(6) NOT NULL,
  `DateJeu` longtext DEFAULT NULL,
  `DateRecuperation` longtext DEFAULT NULL,
  `DateFin` datetime(6) NOT NULL,
  `UserId` longtext DEFAULT NULL,
  `Idlot` int(11) DEFAULT NULL,
  `Etat` longtext DEFAULT NULL,
  PRIMARY KEY (`Idcoupon`)
) ENGINE=InnoDB AUTO_INCREMENT=4501 DEFAULT CHARSET=utf8mb4;

-- Listage des données de la table thetiptop_prod.Coupons : ~0 rows (environ)

-- Listage de la structure de table thetiptop_prod. Lots
DROP TABLE IF EXISTS `Lots`;
CREATE TABLE IF NOT EXISTS `Lots` (
  `Idlot` int(11) NOT NULL AUTO_INCREMENT,
  `NomLot` longtext DEFAULT NULL,
  `DescriptionLot` longtext DEFAULT NULL,
  PRIMARY KEY (`Idlot`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4;

-- Listage des données de la table thetiptop_prod.Lots : ~10 rows (environ)
INSERT INTO `Lots` (`Idlot`, `NomLot`, `DescriptionLot`) VALUES
	(1, 'Infusion thé vert', 'RAS'),
	(2, 'Thé vert en vrac', '300g de thé vert en vrac'),
	(3, 'Thé signature', '250g de thé signature'),
	(4, 'Thé rouge en vrac', 'Boîte métal 90g'),
	(5, 'Thé detox', 'Boîte de 100g d\'un thé detox'),
	(6, 'Thé rouge bio', 'Coffret découverte thé signature '),
	(7, 'Thé noir aux agrumes et épices', 'Pochette vrac 100g '),
	(8, 'Thé noir parfumé', 'Sachets mousselines X20 '),
	(9, 'Thé jaune', 'Pochette vrac de 1OOg de thé jaune de Chine '),
	(10, 'Thé vert et noir', 'Pochette vrac de 1OOg  ');

-- Listage de la structure de table thetiptop_prod. Participations
DROP TABLE IF EXISTS `Participations`;
CREATE TABLE IF NOT EXISTS `Participations` (
  `Idparticipation` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` longtext DEFAULT NULL,
  `Numerocoupon` int(11) NOT NULL,
  `Idlot` int(11) NOT NULL,
  PRIMARY KEY (`Idparticipation`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Listage des données de la table thetiptop_prod.Participations : ~0 rows (environ)

-- Listage de la structure de table thetiptop_prod. __EFMigrationsHistory
DROP TABLE IF EXISTS `__EFMigrationsHistory`;
CREATE TABLE IF NOT EXISTS `__EFMigrationsHistory` (
  `MigrationId` varchar(150) NOT NULL,
  `ProductVersion` varchar(32) NOT NULL,
  PRIMARY KEY (`MigrationId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Listage des données de la table thetiptop_prod.__EFMigrationsHistory : ~1 rows (environ)
INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`) VALUES
	('20220417014619_InitialCreate', '5.0.9');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
