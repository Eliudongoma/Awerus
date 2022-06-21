SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `Country` (
 `ID` INT NOT NULL PRIMARY KEY,
 `Name` VARCHAR(30) NOT NULL,
 `Code` CHAR(2) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Language`(
 `ID` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `Name` VARCHAR(20) NOT NULL,
 `CountryID` INT NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `Word` (
 `ID` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `Name`	NVARCHAR(50) NOT NULL UNIQUE,
 `LanguageID` INT NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Translation` (
 `ID` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `WordFrom` INT NOT NULL, 
 `WordTo` INT NOT NULL 
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Login` (
 `ID` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `Name` VARCHAR(50) NOT NULL,
 `Email` VARCHAR(30) NOT NULL UNIQUE,
 `Password` VARCHAR(50) NOT NULL,
 `CountryID` INT NOT NULL,
 `Phone` VARCHAR(15) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `Language`
   ADD CONSTRAINT FK_CountryID FOREIGN KEY (`CountryID`) REFERENCES Country (`ID`);

ALTER TABLE `Word`
   ADD CONSTRAINT FK_LanguageID FOREIGN KEY (`LanguageID`) REFERENCES Language (`ID`);

ALTER TABLE `Translation`
   ADD CONSTRAINT FK_WordID FOREIGN KEY (`WordFrom`) REFERENCES Word (`ID`);

ALTER TABLE `Translation`
   ADD CONSTRAINT FK_WordToID FOREIGN KEY (`WordTo`) REFERENCES Word (`ID`);

INSERT INTO `Country` (`ID`, `Name`, `Code`) VALUES
(254, 'Kenya', 'KE'),
(256, 'Uganda','UG'),
(255, 'Tanzania','TZ');

INSERT INTO `Language` (`Name`, `CountryID`) VALUES
('Kiswahili', 254),
('English', 254),
('Luhya', 254);

INSERT INTO `Word` (`Name`, `LanguageID`) VALUES
('Hujambo/Jambo', 1),
('Sijambo', 1),
('How are you?', 2),
('I am fine', 2),
('Habari', 1),
('Nzuri', 1),
('Any news?', 2),
('Fine', 2);

INSERT INTO `Translation` (`WordFrom`, `WordTo`) VALUES
(1,3),
(2,4),
(5,7),
(6,8);

COMMIT;