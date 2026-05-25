const domande = [
  ["Quale cambiamento ha caratterizzato il modello economico dei videogiochi negli anni 2010?", ["Solo vendita su disco fisico", "Un notevole aumento dei profitti", "Diffusione del modello free-to-play con microtransazioni", "Riduzione del numero di giocatori"], 2],
  ["Cosa indicano le “progress bars” nei videogiochi?", ["Il livello di difficoltà", "Il tempo rimanente per giocare", "Il senso di avanzamento del giocatore", "Il numero di nemici"], 2],
  ["Qual è l’effetto degli “streak” e dei login bonus?", ["Ridurre il tempo di gioco", "Incentivare la disconnessione", "Sfruttare l’avversione alla perdita", "Aumentare la difficoltà"], 2],
  ["Cosa significa FOMO (Fear of Missing Out)?", ["Paura di perdere denaro", "Paura di essere esclusi da esperienze o ricompense", "Paura di perdere una partita", "Paura dei videogiochi violenti"], 1],
  ["Qual è un rischio legato alla carriera negli eSport?", ["Mancanza di competizione", "Guadagni troppo bassi per tutti", "Probabilità molto basse di successo professionale", "Assenza di pubblico"], 2],
  ["Quali sono i tre elementi fondamentali del gioco d’azzardo?", ["Divertimento, abilità, velocità", "Denaro, abilità, strategia", "Posta economica, casualità, prevalenza del caso", "Fortuna, esperienza, tempo"], 2],
  ["Perché lo Stato regola il gioco d’azzardo?", ["Per eliminare il gioco", "Solo per guadagnare", "Per tutela, prevenzione e controllo dell’illegalità", "Per aumentare i videogiochi"], 2],
  ["Qual è una caratteristica tipica delle loot box?", ["Ricompense sempre uguali", "Premi garantiti", "Probabilità molto basse per oggetti rari", "Nessun costo"], 2],
  ["Cosa si intende per “skin gambling”?", ["Acquisto di vestiti virtuali", "Scommesse usando oggetti virtuali come valuta", "Personalizzazione gratuita", "Vendita di videogiochi"], 1],
  ["Cosa accade nella “fase perdente” del GAP?", ["Il giocatore smette", "Il giocatore riduce le puntate", "Il giocatore aumenta le puntate per recuperare", "Il giocatore vince sempre"], 2]
];

let indice = 0;
let punteggio = 0;
let rispostaData = false;

function mostraDomanda() {
  let d = domande[indice];

  document.getElementById("domanda").textContent =
    "Domanda " + (indice + 1) + " di " + domande.length + ": " + d[0];

  let opzioni = document.getElementById("opzioni");
  opzioni.innerHTML = "";

  for (let i = 0; i < d[1].length; i++) {
    opzioni.innerHTML += `
      <label>
        <input type="radio" name="risposta" value="${i}">
        ${d[1][i]}
      </label><br>
    `;
  }

  document.getElementById("feedback").textContent = "";
  rispostaData = false;
}

function controlla() {
  if (rispostaData) return;

  let scelta = document.querySelector('input[name="risposta"]:checked');

  if (!scelta) {
    alert("Seleziona una risposta");
    return;
  }

  let risposta = Number(scelta.value);

 if (risposta === domande[indice][2]) {
  document.getElementById("feedback").textContent = "Corretto!";
  punteggio++;
} else {
  let corretta = domande[indice][2];
  let testoCorretto = domande[indice][1][corretta];

  document.getElementById("feedback").textContent =
    "Sbagliato! Risposta corretta: " + testoCorretto;
}

  rispostaData = true;
}

function avanti() {
  if (!rispostaData) {
    alert("Rispondi prima!");
    return;
  }

  indice++;

  if (indice >= domande.length) {
    document.getElementById("quiz").innerHTML =
      "<h2>Hai risposto correttamente a " + punteggio + " domande su " + domande.length + "</h2>" +
      "<button onclick='location.reload()'>Ricomincia</button>";
    return;
  }

  mostraDomanda();
}

mostraDomanda();

