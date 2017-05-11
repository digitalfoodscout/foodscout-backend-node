Anwendung starten
=================

Die Anwendung kann auf zwei Wegen gestartet werden:

Docker
------

Hierzu muss Docker und Docker-Compose installiert sein.

1. In Unterverzeichnis `docker/devel` wechseln
2. docker-compose --build up -d ausführen (nach jeder Änderung im Programm erneut ausführen)
3. Die Anwendung steht nun an Port 8080 bereit. Die MariaDB-Datenbank kann über Port 3306 betrachtet werden.
4. Die Anwendung kann mit `docker-compose down` beendet werden.

Ohne Docker
-----------

Hierzu muss ein lokakler Datenbank-Server auf dem System installiert werden.

1. Die Datei `config.example.js` im config-Verzeichnis in `config.js` umbennnen und der eigenen Konfiguration anpassen.
2. `npm install` im Hauptverzeichnis aufrufen
3. Lokale MariaDB-Instanz starten
4. Server mit `node app.js` starten