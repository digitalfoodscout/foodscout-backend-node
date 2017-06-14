Definierte Schnittstellen
=========================
Wichtige Informationen:
- Schnittstellen die mit `*` markiert sind, sind mit einer Authentifikation geschützt
- Schnittstellen die mit `/` markiert sind, sind noch nicht (vollständig) implementiert
- Schnittstellen die mit `q` markiert sind haben Queryparameter implementiert

Benutzer
--------
- GET `/user/id` Gibt den Benutzer mit der übergebenen Id _id_ zurück    
- GET `/user` Gibt alle Benutzer der Datenbank zurück
- `*` POST `/user` Speichert den übergebenen Nutzer in der Datenbank. Bei erfolgreichem Hinzufügen wird der HTTP-Code `201 - Created` zurückgegeben
- `/` PUT `/user` Updatet einen Nutzer in der Datenbank mit den übergebenen Daten
- `/` DELETE `/user/id` Löscht den Benutzer mit der Id _id_ aus der Datenbank und gibt bei erfolgreicher Löschung den HTTP-Code `200 - Ok` zurück

- `/*` PATCH `/user/id` Änderung des übergebenen _password_ in der Datenbank für den User mit der Id _id_

Authentifizierung
-----------------
- `*` POST `/authenticate` Loggt einen Nutzer ein und gibt einen Access-Token zurück, mit dem spätere Authentifizierungen möglich sind
 
Symptome
--------
- GET `/symptom/id` Gibt das Symptom mit der übergebenen _id_ zurück    
- GET `/symptom` Gibt alle Symptome der Datenbank zurück
- `/` POST `/symptom` Speichert das übergebene Symptom in der Datenbank. Bei erfolgreichem Hinzufügen wird der HTTP-Code `201 - Created` zurückgegeben
- `/` PUT `/symptom` Updatet einen Symptom in der Datenbank mit den übergebenen Daten
- `/` DELETE `/symptom/id` Löscht das Symptom mit der Id _id_ aus der Datenbank und gibt bei erfolgreicher Löschung den HTTP-Code `200 - Ok` zurück
 
- `/*`PATCH `/symptom/id` Änderung am Symptom mit der Id _id_

Meals
--------
- GET `/meal/id` Gibt das Meal mit der übergebenen _id_ zurück    
- `q` GET `/meal` Gibt alle Meals der Datenbank zurück
- `/` POST `/meal` Speichert das übergebene Meal in der Datenbank. Bei erfolgreichem Hinzufügen wird der HTTP-Code `201 - Created` zurückgegeben
- `/` PUT `/meal` Updatet ein Meal in der Datenbank mit den übergebenen Daten
- `/` DELETE `/meal/id` Löscht das Meal mit der Id _id_ aus der Datenbank und gibt bei erfolgreicher Löschung den HTTP-Code `200 - Ok` zurück

- `/*`PATCH `/meal/id` Änderung am Meal mit der Id _id_

 
Suffered-From (Auftreten einer Beschwerde)
--------
- GET `/suffered_from/id` Gibt das Auftreten einer Beschwerde mit der übergebenen _id_ zurück    
- GET `/suffered_from` Gibt alle Auftreten von Beschwerden aus der Datenbank zurück
- `/` POST `/suffered_from` Speichert das übergebene Auftreten einer Beschwerde in der Datenbank. Bei erfolgreichem Hinzufügen wird der HTTP-Code `201 - Created` zurückgegeben
- `/` PUT `/suffered_from` Updatet ein Auftreten einer Beschwerde in der Datenbank mit den übergebenen Daten
- `/` DELETE `/suffered_from/id` Löscht das Auftreten einer Beschwerde mit der Id _id_ aus der Datenbank und gibt bei erfolgreicher Löschung den HTTP-Code `200 - Ok` zurück
 
- `/*`PATCH `/symptom/id` Änderung am Symptom mit der Id _id_
 
Contains (Verbindung von Meal zum Lebensmittelschlüssel LMS)
--------
- GET `/contains/id` Gibt die Verbindung zwischen einem Meal und dem LMS mit der übergebenen _id_ zurück    
- GET `/contains` Gibt alle Verbindungen zwischen einem Meal und dem LMS aus der Datenbank zurück
- `/` POST `/contains` Speichert eine neue Verbindung zwischen einem Meal und dem LMS in der Datenbank. Bei erfolgreichem Hinzufügen wird der HTTP-Code `201 - Created` zurückgegeben
- `/` PUT `/contains` Updatet eine Verbindung zwischen einem Meal und dem LMS in der Datenbank mit den übergebenen Daten
- `/` DELETE `/contains/id` Löscht die Verbindung zwischen einem Meal und dem LMS mit der Id _id_ aus der Datenbank und gibt bei erfolgreicher Löschung den HTTP-Code `200 - Ok` zurück

- `/*`PATCH `/contains/id` Änderung am Contains mit der Id _id_

Zusätzliche Query Parameter
---------------------------
- `&limit=x` Limitiert das Query-Ergebnis auf _x_ Daten
- `&offset=y` Schneidet die ersten _y_ Ergebnisse aus dem Query-Ergebnis aus
- `&col=column_name` Sortiert das Ergebnis nach der übergebenen Spalte _column_name_
- `&order=ASC|DESC` Gibt die Sortierreihenfolge an. `ASC` sortiert aufsteigen und `DESC` sortiert absteigend
- `&name=prefix_name` Führt eine Präfixsuche mit dem Argument _prefix_name_ aus

Anwendung starten
=================

Die Anwendung kann auf zwei Wegen gestartet werden:

Docker
------

Hierzu muss Docker und Docker-Compose installiert sein.

1. In Unterverzeichnis `docker/devel` wechseln.
2. docker-compose up --build ausführen (nach jeder Änderung im Programm erneut ausführen).
2.5 Falls Docker eine Fehlermeldung auswirft kann ein Neustart helfen.
3. Die Anwendung steht nun an Port 8080 bereit. Die MariaDB-Datenbank kann über Port 3306 betrachtet werden.
4. Die Anwendung kann mit `docker-compose down` beendet werden.

Ohne Docker
-----------

Hierzu muss ein lokaler Datenbank-Server auf dem System installiert werden.

1. Die Datei `config.example.js` im config-Verzeichnis in `config.js` umbennnen und der eigenen Konfiguration anpassen.
2. `npm install` im Hauptverzeichnis aufrufen.
3. Lokale MariaDB-Instanz starten.
4. Server mit `node app.js` starten.

Migration auf lokale DB übertragen
----------------------------------

Lokale Datenbank muss dabei installiert sein (getestet von mir mit einer lokalen MariaDB Instanz)
1. `npm install --save sequelize-cli -g` aufrufen um auf sequelize zugreifen zu können
2. `sequelize db:migrate` aufrufen
    Hierbei wird die Migrationsdatei in eine Datenbank übersetzt

Migration für Models anpassen
-----------------------------

1. Neue Migrationsdatei mit `sequelize migration:create` erstellen
2. Die Änderungen an den Models in diese Dateien eintragen
3. Migration mit `sequelize db:migrate` zur Datenbank pushen

Weitere Informationen für Migrations
------------------------------------

Alles wichtige steht in der offiziellen Dokumentation unter: http://docs.sequelizejs.com/manual/tutorial/migrations.html
