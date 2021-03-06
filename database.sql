CREATE TABLE Hosts(
   ID INTEGER PRIMARY KEY   AUTOINCREMENT,
   Host           VARCHAR(100)   NOT NULL,
   Context        VARCHAR(100),
   Description     VARCHAR(100),
   Status         VARCHAR(100)
);


insert into hosts (Host, Context, Description, Status)
VALUES ("10.0.0.200", "NT AUTHORITY/SYSTEM", "Implant: Ravenclaw, OS: Windows", "52s");


CREATE TABLE Implants(
   ID INT PRIMARY KEY            NOT NULL,
   Host           VARCHAR(100)   NOT NULL,
   Context        VARCHAR(100),
   Descripton     VARCHAR(100),
   Status         VARCHAR(100)
);

CREATE TABLE C2_Profiles(
   ID INT PRIMARY KEY            NOT NULL,
   Host           VARCHAR(100)   NOT NULL,
   Context        VARCHAR(100),
   Descripton     VARCHAR(100),
   Status         VARCHAR(100)
);

CREATE TABLE Channels(
   ID INTEGER PRIMARY KEY   AUTOINCREMENT,
   HostID         VARCHAR(100)   NOT NULL,
   Details     	  VARCHAR(100),
   Tags           VARCHAR(100)
);

insert into Interactions (hostid, channelid, command, response, status)
VALUES ("1", "1", "calc", "", "0");
insert into Interactions (hostid, channelid, command, response, status)
VALUES ("1", "1", "notepad", "", "0");
insert into Interactions (hostid, channelid, command, response, status)
VALUES ("1", "1", "ls", "", "0");


CREATE TABLE Interactions(
   ID INTEGER PRIMARY KEY   AUTOINCREMENT,
   HostID           VARCHAR(100),
   ChannelID        VARCHAR(100)   NOT NULL,
   Command          VARCHAR(1000),
   Response         VARCHAR(100),
   Status           VARCHAR(100)
);

SELECT * FROM Hosts;
SELECT * FROM Channels;
SELECT * FROM Interactions;


DROP TABLE Hosts;
DROP TABLE Channels;
DROP TABLE Interactions;
