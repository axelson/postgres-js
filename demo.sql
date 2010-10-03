DROP DATABASE nodedb;
DROP USER nodeuser;
CREATE USER nodeuser;
CREATE DATABASE nodedb WITH OWNER = nodeuser;
\c nodedb nodeuser
CREATE TABLE testtable ( LastName varchar(255), FirstName varchar(255) );
INSERT INTO testtable ( LastName, FirstName ) VALUES ( 'tables', 'bobby' );
