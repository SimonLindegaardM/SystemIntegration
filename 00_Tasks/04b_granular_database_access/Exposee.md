
# Database Granular Access 
## Step By Step Guide

### Trin 1:
Installer sqlcmd:
```
winget install sqlcmd
```

### Trin 2:
Åben powershell

### Trin 3:
Connect til databasen ved at bruge den oprettede user: MikkelsUser med password Mikkel123
Kommandoen kommer til at se sådan her ud:
```
sqlcmd -S simonlindegaard.database.windows.net -U MikkelsUser -P Mikkel123 -d si_granular_access 
```

### Trin 4:
Tilgå data som du kun har read access til:
```
SELECT Email FROM CustomerData;
GO
```
Du burde nu se alt fra Email kolonnen.
Prøv nu at opdatere data ved at bruge:
```
UPDATE CustomerData SET Email = 'updatedemail@example.com' WHERE ID = 1;
GO
```
Du burde nu få access denied da du ikke har adgang til at write på denne specifikke kolonne

### Trin 5:
Tilgå data som du har read og write access til:
```
SELECT Name FROM CustomerData;
GO
```
Prøv nu at opdatere data ved at bruge :
```
UPDATE CustomerData SET Name = 'read/write 1 updated' WHERE ID = 1;
GO
```
Prøv nu at bruge kommandoen til at read igen, så du kan se ændringerne du lige har lavet:
```
SELECT Name FROM CustomerData;
GO
```

### Trin 6:
Prøv at tilgå data hvor som du ikke har access til.
Vi vil nu prøve at tilgå Password kolonnen ved at bruge:
```
SELECT Password FROM CustomerData;
GO
```
Du burde så nu få en besked om at du ikke har permission til at tilgå data i denne kolonne.
