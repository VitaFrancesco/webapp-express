# WebApp Express 🎬

**WebApp Express** è un'applicazione backend realizzata in **Node.js** e **Express** che espone un'API REST per la gestione di film e recensioni. È pensata per essere consumata da un frontend (ad esempio [`webapp-react`](https://github.com/VitaFrancesco/webapp-react)).

## 🎯 Funzionalità

- Recupero della lista film (con votazione media e supporto a ricerca testuale)
- Visualizzazione dettagliata di un singolo film (con o senza recensioni)
- Inserimento recensioni tramite POST
- Eliminazione recensioni tramite DELETE
- Gestione immagini film (serve da `/public`)
- Gestione errori lato server (500, 404)
- Middleware per la validazione dei dati ricevuti

## 🧰 Tecnologie principali

- Node.js
- Express
- MySQL
- Middleware personalizzati per:
  - Gestione errori
  - Validazione dei dati
- Struttura modulare con controller e router