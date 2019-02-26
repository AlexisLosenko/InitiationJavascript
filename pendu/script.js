
    "use strict";
    let availablelettres, words, guessInput, guess, guessButton, lettresGuessed, lettresMatched, sortie, Vie, lettres, lives, currentWord, numlettresMatched, messages;

    function setup() {

        availablelettres = "abcdefghijklmnopqrstuvwxyz";
        lives = 5;
        //words reprend tout les mots qu'on veut mettre pour le pendu, liste infinie pour le random
        words = ["poney", "bonjour", "androgine", "javascript", "carabistouille", "aglet", "personnification", "roi", "retard", "herpetologie", "reptile", "canine", "genealogie", "Kossack"];
        messages = {
            win: 'Bravo!',
            lose: 'T es pendu!',
            guessed: ' Tu l as déjà dit ...',
            validLetter: 'Entrez une lettre entre a et z'
        };


        lettresGuessed = lettresMatched = '';
        numlettresMatched = 0;


        currentWord = words[Math.floor(Math.random() * words.length)];


        sortie = document.getElementById("sortie");
        Vie = document.getElementById("Vie");
        guessInput = document.getElementById("letter");

        Vie.innerHTML = 'Tu as ' + lives + ' vies restante';
        sortie.innerHTML = '';

        document.getElementById("letter").value;


        guessButton = document.getElementById("guess");
        guessInput.style.display = 'inline';
        guessButton.style.display = 'inline';


        lettres = document.getElementById("lettres");
        lettres.innerHTML = '<li class="current-word">Mot actuel:</li>';

        let letter, i;
        for (i = 0; i < currentWord.length; i++) {
            letter = '<li class="letter letter' + currentWord.charAt(i).toUpperCase() + '">' + currentWord.charAt(i).toUpperCase() + '</li>';
            lettres.insertAdjacentHTML('beforeend', letter);
        }
    }

    function gameOver(win) {
        if (win) {
            sortie.innerHTML = messages.win;
            sortie.classList.add('win');

        } else {
            sortie.innerHTML = messages.lose;
            sortie.classList.add('error');


        }

        guessInput.style.display = guessButton.style.display = 'none';
        guessInput.value = '';
    }


    window.onload = setup();


    document.getElementById("restart").onclick = setup;


    guessInput.onclick = function () {
        this.value = '';
    };


    document.getElementById('pendu').onsubmit = function (e) {
        if (e.preventDefault) e.preventDefault();
        sortie.innerHTML = '';
        sortie.classList.remove('error', 'warning');
        guess = guessInput.value;


        if (guess) {

            if (availablelettres.indexOf(guess) > -1) {

                if ((lettresMatched && lettresMatched.indexOf(guess) > -1) || (lettresGuessed && lettresGuessed.indexOf(guess) > -1)) {
                    sortie.innerHTML = '"' + guess.toUpperCase() + '"' + messages.guessed;
                    sortie.classList.add("warning");
                }
                else if (currentWord.indexOf(guess) > -1) {
                    let lettresToShow;
                    lettresToShow = document.querySelectorAll(".letter" + guess.toUpperCase());

                    for (let i = 0; i < lettresToShow.length; i++) {
                        lettresToShow[i].classList.add("correct");
                    }


                    for (let j = 0; j < currentWord.length; j++) {
                        if (currentWord.charAt(j) === guess) {
                            numlettresMatched += 1;
                        }
                    }

                    lettresMatched += guess;
                    if (numlettresMatched === currentWord.length) {
                        gameOver(true);
                    }
                }

                else {
                    lettresGuessed += guess;
                    lives--;
                    Vie.innerHTML = 'Tu as ' + lives + ' vies restantes';
                }
                if (lives === 0) gameOver();
            }

            else {
                sortie.classList.add('error');
                sortie.innerHTML = messages.validLetter;
            }
        }

        else {
            sortie.classList.add('error');
            sortie.innerHTML = messages.validLetter;
        }
        return false;
    };
