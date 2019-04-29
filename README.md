# VERIFICA TPSI: HTML, CSS, JS, Cloud

Benvenuti alla verifica scritta di TPSI. Buon lavoro!

Il progetto di riferimento svolto in classe per l'esecuzione di questo compito è [bar-prof](https://github.com/marconicivitavecchia-bar/bar-prof).

## Esecuzione del compito
Il compito è diviso in tre fasi:
1. rendere dinamica la pagina con esecuzione locale sulla propria macchina
1. eseguire la web app in cloud con AWS
1. benchmark delle prestazioni

Operazioni preliminari:
- accedete con il vostro account personale a GitHub (**non sbagliate password!**)
- fate il fork di questo progetto, ma **attenzione**: se vi viene chiesto, fate il fork sul vostro account personale e non sull'organizzazione del progetto di classe
- copiate l'URL del **vostro** progetto
- aprite Visual Studio Code
- fate il clone del progetto
- su Visual Studio Code, scaricate (se non è già presente) l'estensione Live Server, cliccando sull'icona "Extensions" nella barra verticale a sinistra
- dopo aver installato l'estensione Live Server, deve comparire il pulsante "Go Live" nella barra blu in basso, premerci sopra per aprire la pagina
- a questo punto avete la pagina di riferimento aperta sul vostro browser e potete cominciare lo sviluppo seguendo i punti nella sezione "Calcolo del punteggio->Punti Progetto" più sotto in questa pagina

Accesso e configurazione di AWS:
- accedete alla [pagina di login](https://www.awseducate.com/signin/SiteLogin) di AWS Educate
- per creare un'istanza di AWS dal vostro account e configurarla, seguite [questa guida](https://wbigger.github.io/book-html5/deploy/cloud.html#creare-unistanza)
- una volta creata l'istanza ed effettuato l'accesso, svolgete i punti della sezione "Calcolo del punteggio->Punti AWS"

Attenzione: **non** fermate o terminate l'istanza da voi generata perché mi servirà per la correzione!

Creazione degli screenshot di benchmarks:
- aprite gli strumenti sviluppatore sul vostro browser cliccando con il tasto destro in qualunque punto della pagina e selezionando "Ispeziona" o "Analizza Elemento"
- andate sul tab "Rete" (o "Network")
- ricaricate la pagina
- fate lo screenshot
- copiate lo screenshot nella cartella `benchmarks`  

Quando avete finito e **comunque 5 minuti prima** dello scadere del tempo (vi verrà ricordato dal docente), dovete pubblicare il codice seguendo la solita procedura:
- salvate il vostro codice
- rispondete alla issue sul mio repository originale con il testo "Consegnato" e con il materiale specificato nella sezione "Calcolo del punteggio"

# Calcolo del punteggio
Tutte le seguenti voci valgono **1 punto**. 

Punti generali:
- [] corretta indentazione di tutti i file
- [X] codice che compila senza errori nella console del browser
- [X] chiarezza del codice (commenti, identificativi, etc.)

Punti progetto:
- [X] una card nel file JSON compilata correttamente
- [X] tutte le card nel file JSON compilate correttamente
- [X] codice JavaScript che itera sul file JSON
- [X] sostituzione delle stringhe statiche con elementi dinamici
- [X] una card visualizzata correttamente
- [X] tutte le card visualizzate correttamente
- [X] il file `index.html` originale e quello generato da voi sono _perfettamente identici_
- [X] commit e push del codice aggiornato su GitHub

Punti AWS (vedi sezione precedente per accesso e configurazione):
- [X] **nuova** istanza su AWS creata (dovete crearne una nuova!)
- [] istanza configurata correttamente con docker e git
- [X] istanza con gruppi di sicurezza corretti
- [] istanza con il proprio progetto scaricato
- [] istanza con il web server running
- [] istanza che visualizza correttamente la pagina del progetto (deve essere uguale a quella locale)

Punti benchmark:
- [X] screenshots delle prestazioni di caricamento della pagina locale
- [] screenshots delle prestazioni di caricamento della pagina su AWS

Totale punti: 19

Sufficienza: 11

Per avere il massimo del voto bisogna avere il massimo del punteggio.

PUNTI OTTENUTI: 13

# Note generali
Testate il vostro progetto il più spesso possibile per controllare che non sia corretto.

È utile per me (ma non obbligatorio) che spuntiate le caselle qui sopra, mi servono per capire cosa avete fatto e cosa no. Per spuntarle, modificate il file (da interfaccia web o in locale sul vostro computer) e aggiungete una X tra le parentesi quadre, così:
- [X] voce spuntata

**È possibile** consultare il progetto di esempio che è stato fornito durante la lezione.

Al contrario, **non è possibile** comunicare o copiare dai compagni di classe.
