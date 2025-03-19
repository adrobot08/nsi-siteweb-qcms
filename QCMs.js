// Structure de données pour les QCMs
const qcmData = [
    // Titanic
    {
        utterance: "Quelle est la longueur du Titanic ?",
        choices: ["269 mètres", "250 mètres", "280 mètres", "300 mètres"],
        correction: [0]
    },
    {
        utterance: "En quelle année le Titanic a-t-il effectué son voyage inaugural ?",
        choices: ["1910", "1911", "1912", "1913"],
        correction: [2]
    },
    {
        utterance: "Qui était le capitaine du Titanic lors de son naufrage ?",
        choices: ["Charles Lightoller", "William Murdoch", "Edward Smith", "Thomas Andrews"],
        correction: [2]
    },
    {
        utterance: "Combien de personnes environ sont mortes lors du naufrage du Titanic ?",
        choices: ["environ 700", "environ 1000", "environ 1500", "environ 2000"],
        correction: [2]
    },
    {
        utterance: "Quand l'épave du Titanic a-t-elle été découverte ?",
        choices: ["1975", "1980", "1985", "1990"],
        correction: [2]
    },
    {
        utterance: "Quelle était la vitesse du Titanic lors de la collision avec l'iceberg ?",
        choices: ["environ 15 nœuds", "environ 18 nœuds", "environ 22 nœuds", "environ 25 nœuds"],
        correction: [2]
    },
    {
        utterance: "Quel était le tirant d'eau du Titanic ?",
        choices: ["8,5 mètres", "9,5 mètres", "10,5 mètres", "11,5 mètres"],
        correction: [2]
    },
    {
        utterance: "Quel était le tonnage du Titanic ?",
        choices: ["36 328 tonnes", "46 328 tonnes", "56 328 tonnes", "66 328 tonnes"],
        correction: [1]
    },
    {
        utterance: "Quand le Titanic a-t-il été lancé ?",
        choices: ["31 mai 1910", "31 mai 1911", "31 mars 1911", "31 mars 1912"],
        correction: [1]
    },
    {
        utterance: "Combien de canots de sauvetage y avait-il sur le Titanic ?",
        choices: ["12", "16", "20", "24"],
        correction: [1]
    },

    // Britannic
    {
        utterance: "En quelle année le Britannic a-t-il été lancé ?",
        choices: ["1913", "1914", "1915", "1916"],
        correction: [1]
    },
    {
        utterance: "Quel était le tonnage du Britannic ?",
        choices: ["38 158 tonnes", "48 158 tonnes", "58 158 tonnes", "68 158 tonnes"],
        correction: [1]
    },
    {
        utterance: "Comment le Britannic a-t-il été rebaptisé pendant la guerre ?",
        choices: ["HMS Britannic", "HMHS Britannic", "RMS Britannic", "SS Britannic"],
        correction: [1]
    },
    {
        utterance: "Combien de personnes sont mortes lors du naufrage du Britannic ?",
        choices: ["30", "130", "230", "330"],
        correction: [0]
    },
    {
        utterance: "En quelle année le Britannic a-t-il coulé ?",
        choices: ["1914", "1915", "1916", "1917"],
        correction: [2]
    },
    {
        utterance: "Quelle était la fonction du Britannic pendant la Première Guerre mondiale ?",
        choices: ["Transport de troupes", "Navire-hôpital", "Navire de guerre", "Navire de reconnaissance"],
        correction: [1]
    },
    {
        utterance: "À quelle profondeur repose l'épave du Britannic ?",
        choices: ["82 mètres", "102 mètres", "122 mètres", "142 mètres"],
        correction: [2]
    },
    {
        utterance: "Qui a découvert l'épave du Britannic en 1975 ?",
        choices: ["Robert Ballard", "Jacques Cousteau", "Simon Mills", "Emory Kristof"],
        correction: [1]
    },
    {
        utterance: "Combien de canots de sauvetage avait le Britannic, après les modifications suite au naufrage du Titanic ?",
        choices: ["28", "38", "48", "58"],
        correction: [2]
    },
    {
        utterance: "Quelle était la cause probable du naufrage du Britannic ?",
        choices: ["Collision avec un autre navire", "Torpille allemande", "Mine sous-marine", "Défaillance structurelle"],
        correction: [2]
    },

    // Olympic
    {
        utterance: "En quelle année l'Olympic a-t-il été mis en service ?",
        choices: ["1910", "1911", "1912", "1913"],
        correction: [1]
    },
    {
        utterance: "Quel surnom a reçu l'Olympic pendant la Première Guerre mondiale ?",
        choices: ["Big Brother", "Old Reliable", "The Miracle Ship", "The Unsinkable"],
        correction: [1]
    },
    {
        utterance: "Avec quel navire de guerre l'Olympic est-il entré en collision en 1911 ?",
        choices: ["HMS Hood", "HMS Hawke", "HMS Victory", "HMS Dreadnought"],
        correction: [1]
    },
    {
        utterance: "En quelle année l'Olympic a-t-il été démantelé ?",
        choices: ["1935", "1936", "1937", "1938"],
        correction: [2]
    },
    {
        utterance: "Quel sous-marin allemand l'Olympic a-t-il coulé en 1918 ?",
        choices: ["U-101", "U-102", "U-103", "U-104"],
        correction: [2]
    },
    {
        utterance: "Quelle était la vitesse maximale de l'Olympic ?",
        choices: ["21 nœuds", "22 nœuds", "23 nœuds", "24 nœuds"],
        correction: [3]
    },
    {
        utterance: "Combien d'années l'Olympic a-t-il été en service ?",
        choices: ["14 ans", "19 ans", "24 ans", "29 ans"],
        correction: [2]
    },
    {
        utterance: "Lequel des navires de la classe Olympic a été construit en premier ?",
        choices: ["Titanic", "Olympic", "Britannic", "Gigantic"],
        correction: [1]
    },
    {
        utterance: "Entre quelles villes l'Olympic assurait-il des traversées transatlantiques ?",
        choices: ["Liverpool et New York", "Southampton et New York", "Cherbourg et Boston", "Queenstown et Philadelphie"],
        correction: [1]
    },
    {
        utterance: "Que sont devenues de nombreuses pièces de l'Olympic après son démantèlement ?",
        choices: ["Vendues aux enchères", "Utilisées pour la décoration d'hôtels", "Exposées dans des musées", "Recyclées pour d'autres navires"],
        correction: [1]
    },

    // Minerve
    {
        utterance: "En quelle année la Minerve a-t-elle disparu ?",
        choices: ["1966", "1967", "1968", "1969"],
        correction: [2]
    },
    {
        utterance: "Qui était le commandant de la Minerve lors de sa disparition ?",
        choices: ["André Fauve", "Jacques Cousteau", "Robert Ballard", "Hervé Fauve"],
        correction: [0]
    },
    {
        utterance: "Combien de membres d'équipage ont péri dans la disparition de la Minerve ?",
        choices: ["42", "52", "62", "72"],
        correction: [1]
    },
    {
        utterance: "À quelle profondeur l'épave de la Minerve a-t-elle été retrouvée ?",
        choices: ["1350 mètres", "1850 mètres", "2350 mètres", "2850 mètres"],
        correction: [2]
    },
    {
        utterance: "En quelle année l'épave de la Minerve a-t-elle été retrouvée ?",
        choices: ["2015", "2017", "2019", "2021"],
        correction: [2]
    },
    {
        utterance: "Quelle était la longueur de la Minerve ?",
        choices: ["47,75 mètres", "57,75 mètres", "67,75 mètres", "77,75 mètres"],
        correction: [1]
    },
    {
        utterance: "En quelle année la Minerve a-t-elle été mise en service ?",
        choices: ["1954", "1959", "1964", "1969"],
        correction: [2]
    },
    {
        utterance: "Quelle était la profondeur maximale d'immersion opérationnelle de la Minerve ?",
        choices: ["200 mètres", "250 mètres", "300 mètres", "350 mètres"],
        correction: [2]
    },
    {
        utterance: "Quel navire a localisé l'épave de la Minerve en 2019 ?",
        choices: ["Pourquoi Pas ?", "L'Antea", "Le Seabed Constructor", "Le Nautilus"],
        correction: [2]
    },
    {
        utterance: "Quelle hypothèse est privilégiée pour expliquer la disparition de la Minerve ?",
        choices: ["Une collision avec un navire", "Un sabotage", "Une avarie de barre", "Une explosion interne"],
        correction: [2]
    },

    // Titan
    {
        utterance: "En quelle année le submersible Titan a-t-il été construit ?",
        choices: ["2015", "2016", "2017", "2018"],
        correction: [2]
    },
    {
        utterance: "Quelle entreprise exploitait le Titan ?",
        choices: ["DeepSea Ventures", "OceanGate", "SubmarineX", "AquaExplore"],
        correction: [1]
    },
    {
        utterance: "Combien de personnes étaient à bord du Titan lors de sa dernière plongée ?",
        choices: ["3", "4", "5", "6"],
        correction: [2]
    },
    {
        utterance: "Qui était le PDG d'OceanGate, présent à bord du Titan lors de sa dernière plongée ?",
        choices: ["James Cameron", "Stockton Rush", "Paul-Henri Nargeolet", "Hamish Harding"],
        correction: [1]
    },
    {
        utterance: "Quelle était l'autonomie en oxygène du Titan ?",
        choices: ["72 heures", "84 heures", "96 heures", "108 heures"],
        correction: [2]
    },
    {
        utterance: "Quel était le poids du Titan ?",
        choices: ["8432 kg", "9432 kg", "10432 kg", "11432 kg"],
        correction: [2]
    },
    {
        utterance: "Quelle était la longueur du Titan ?",
        choices: ["5,70 m", "6,70 m", "7,70 m", "8,70 m"],
        correction: [1]
    },
    {
        utterance: "En quelle année a eu lieu l'accident du Titan ?",
        choices: ["2020", "2021", "2022", "2023"],
        correction: [3]
    },
    {
        utterance: "Quel était l'objectif de la dernière plongée du Titan ?",
        choices: ["Explorer une nouvelle épave", "Filmer un documentaire", "Explorer l'épave du Titanic", "Tester de nouveaux équipements"],
        correction: [2]
    },
    {
        utterance: "Comment le Titan a-t-il été détruit ?",
        choices: ["Collision avec l'épave", "Implosion due à la pression", "Incendie à bord", "Erreur de pilotage"],
        correction: [1]
    }
];

// Fonction pour mélanger un tableau (algorithme de Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Fonction pour sélectionner aléatoirement 10 questions
function getRandomQuestions(count = 10) {
    const shuffledQuestions = shuffleArray([...qcmData]);
    return shuffledQuestions.slice(0, count);
}

// Fonction pour initialiser le QCM
function initializeQCM() {
    const questions = getRandomQuestions();
    displayQuestions(questions);
}

// Fonction pour afficher les questions
function displayQuestions(questions) {
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.innerHTML = '';

    questions.forEach((question, qIndex) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.dataset.index = qIndex;

        const utteranceDiv = document.createElement('div');
        utteranceDiv.className = 'utterance';
        utteranceDiv.textContent = `${question.utterance}`;
        questionDiv.appendChild(utteranceDiv);

        const choicesDiv = document.createElement('div');
        choicesDiv.className = 'choices';

        question.choices.forEach((choice, cIndex) => {
            const choiceDiv = document.createElement('div');
            choiceDiv.className = 'choice';
            choiceDiv.dataset.selected = 'false';
            choiceDiv.dataset.index = cIndex;
            choiceDiv.textContent = choice;

            choiceDiv.addEventListener('click', function() {
                // Si déjà sélectionné, alors désélectionner
                if (this.dataset.selected === 'true') {
                    this.dataset.selected = 'false';
                    this.classList.remove('selected');
                } else {
                    // Désélectionner tous les autres choix dans cette question
                    this.closest('.question').querySelectorAll('.choice').forEach(choice => {
                        choice.dataset.selected = 'false';
                        choice.classList.remove('selected');
                    });
                    
                    // Sélectionner uniquement ce choix
                    this.dataset.selected = 'true';
                    this.classList.add('selected');
                }
            });

            choicesDiv.appendChild(choiceDiv);
        });

        questionDiv.appendChild(choicesDiv);
        questionsContainer.appendChild(questionDiv);
    });

    // Stocker les questions en cours dans sessionStorage
    sessionStorage.setItem('currentQuestions', JSON.stringify(questions));
}

// Fonction pour valider le QCM
function validateQCM() {
    const questions = JSON.parse(sessionStorage.getItem('currentQuestions'));
    let score = 0;

    document.querySelectorAll('.question').forEach((questionDiv, qIndex) => {
        const selectedChoices = [];
        questionDiv.querySelectorAll('.choice').forEach((choiceDiv, cIndex) => {
            if (choiceDiv.dataset.selected === 'true') {
                selectedChoices.push(cIndex);
            }
        });

        // Vérifier si la réponse est correcte (maintenant un seul choix)
        const correctChoices = questions[qIndex].correction;
        if (selectedChoices.length === 1 && correctChoices.includes(selectedChoices[0])) {
            score++;
        }
    });

    // Afficher le résultat
    showResult(score, questions.length);
}

// Fonction pour comparer deux tableaux
function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    return a.sort().every((val, idx) => val === b.sort()[idx]);
}

// Fonction pour afficher le résultat
function showResult(score, total) {
    const result = `Votre score: ${score}/${total}`;
    const message = score > 5 ? 
        "Félicitations ! Vous avez réussi le QCM." : 
        "Vous n'avez pas obtenu la moyenne. Veuillez réessayer.";
    
    alert(`${result}\n${message}`);
    
    if (score <= 5) {
        // Recharger la page pour recommencer
        initializeQCM();
    }
}

// Initialiser le QCM quand la page est chargée
document.addEventListener('DOMContentLoaded', function() {
    initializeQCM();
    
    // Ajouter l'événement au bouton de validation
    document.getElementById('validate-btn').addEventListener('click', validateQCM);
}); 