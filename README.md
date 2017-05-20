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
1. `sequelize db:migrate` aufrufen
    Hierbei wird die Migrationsdatei in eine Datenbank übersetzt

Migration für Models anpassen
-----------------------------

1. Neue Migrationsdatei mit `sequelize migration:create` erstellen
2. Die Änderungen an den Models in diese Dateien eintragen
3. Migration mit `sequelize db:migrate` zur Datenbank pushen

Weitere Informationen für Migrations
------------------------------------

Alles wichtige steht in der offiziellen Dokumentation unter: http://docs.sequelizejs.com/manual/tutorial/migrations.html