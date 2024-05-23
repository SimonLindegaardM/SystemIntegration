CREATE TABLE CustomerData (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(255),
    Email NVARCHAR(255),
    Password NVARCHAR(255)
);

INSERT INTO CustomerData (Name, Email, Password) VALUES
('read/write 1', 'only read 1', 'No access 1'),
('read/write 2', 'only read 2', 'No access 2'),
('read/write 3', 'only read 3', 'No access 3');

CREATE USER MikkelsUser WITH PASSWORD = 'Mikkel123';

GRANT SELECT, UPDATE ON CustomerData(Name)  TO MikkelsUser;

GRANT SELECT ON CustomerData(Email) TO MikkelsUser;

GRANT SELECT ON CustomerData(ID) TO MikkelsUser;