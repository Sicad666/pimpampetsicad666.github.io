// Vragenlijst
const questions = [
    "Noem een land in Azië dat begint met een 'J'.",
  "Noem een beroemde boerderij uit een kinderboek die een spreuk heeft.",
  "Noem een Nederlands eiland dat bekend staat om zijn natuur.",
  "Noem een fruitsoort die zowel groen als rood kan zijn.",
  "Noem een veelvoorkomend huisdier dat geen kat of hond is.",
  "Noem een beroemd attractiepark in Nederland.",
  "Noem een beroemd personage uit een stripverhaal die een superheld is.",
  "Noem een groente die vaak wordt gegeten op pizza.",
  "Noem een sport die je speelt met een racket.",
  "Noem een type vervoermiddel dat veel wordt gebruikt in steden.",
  "Noem een seizoen waarin de bladeren van bomen meestal verkleuren.",
  "Noem een bekende Nederlandse schrijver die kinderboeken heeft geschreven.",
  "Noem een bekende dansstijl die zijn oorsprong heeft in Latijns-Amerika.",
  "Noem een typisch Nederlands gerecht dat vaak met aardappelen wordt gegeten.",
  "Noem een dier dat bekend staat om zijn vermogen om te springen.",
  "Noem een veelvoorkomend vervoermiddel op het water.",
  "Noem een beroemd tv-programma voor kinderen dat vaak op zaterdag wordt uitgezonden.",
  "Noem een item dat je zou vinden in een klassieke keuken.",
  "Noem een dier dat vaak wordt afgebeeld in cartoons met grote ogen en een lange staart.",
  "Noem een soort boom die bekend staat om zijn kleurrijke herfstbladeren.",
  "Noem een bekende Nederlandse artiest die vaak op festivals optreedt.",
  "Noem een type hoed die vaak wordt gedragen tijdens een formeel evenement.",
  "Noem een populaire vorm van vakantie waarbij je in een tent slaapt.",
  "Noem een fruit dat vaak wordt geperst om sap van te maken.",
  "Noem een activiteit die vaak wordt gedaan tijdens een zomervakantie.",
  "Noem een land waar je sneeuw kunt verwachten in de winter.",
  "Noem een beroemd filmkarakter die een sterke vrouw is.",
  "Noem een beroep dat vaak buiten wordt uitgevoerd.",
  "Noem een soort bloem die vaak wordt gebruikt in boeketten.",
  "Noem een onderdeel van een computer dat je gebruikt om tekst in te voeren.",
  "Noem een klassiek muziekstuk dat vaak wordt gespeeld tijdens een bruiloft.",
  "Noem een soort koekje dat vaak wordt gegeten bij de thee.",
  "Noem een hobby waarbij je dingen maakt met je handen.",
  "Noem een dier dat bekend staat om zijn manier van vliegen.",
  "Noem een feestdag die wordt gevierd met vuurwerk.",
  "Noem een populaire bestemming voor een weekendje weg in Nederland.",
  "Noem een soort kledingstuk dat je zou dragen tijdens het sporten.",
  "Noem een kleur die vaak wordt geassocieerd met de herfst.",
  "Noem een type boek dat vaak wordt gelezen voor ontspanning.",
  "Noem een historische gebeurtenis die vaak wordt herdacht met een monument.",
  "Noem een instrument dat vaak wordt gebruikt in een orkest.",
  "Noem een beroemde attractie in Disneyland.",
  "Noem een type gebouw dat je vaak tegenkomt in een stad.",
  "Noem een dier dat vaak wordt gehouden in een aquarium.",
  "Noem een activiteit die je kunt doen op een strand.",
  "Noem een gebruiksvoorwerp dat je dagelijks op je bureau kunt vinden.",
  "Noem een soort puzzel die vaak in kranten staat.",
  "Noem een beroemd gebouw in Nederland dat vaak door toeristen wordt bezocht.",
  "Noem een speelgoeditem dat vaak in een poppenhuis zit.",
  "Noem een soort feestelijke maaltijd die vaak met een grote groep wordt gedeeld."
];

let remainingQuestions = [...questions]; // Kopie van de vragen om de voortgang bij te houden

// Functie om een willekeurige vraag te krijgen
function getRandomQuestion() {
    if (remainingQuestions.length === 0) {
        alert("Alle vragen zijn gesteld! Het spel wordt opnieuw gestart.");
        remainingQuestions = [...questions]; // Reset de vragenlijst
    }
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    const question = remainingQuestions[randomIndex];
    remainingQuestions.splice(randomIndex, 1); // Verwijder de gestelde vraag
    return question;
}

// Event listener voor het tonen van de volgende vraag
document.getElementById('next-question').addEventListener('click', function() {
    const newQuestion = getRandomQuestion();
    document.getElementById('question').innerText = newQuestion;
});

// Event listener voor het draaien van het wiel om een letter te kiezen
document.getElementById('spin-wheel').addEventListener('click', function() {
    const letters = "ABCDEFGHIKLMNOPRSTUVWZ".split('');
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('selected-letter').innerText = randomLetter;
});