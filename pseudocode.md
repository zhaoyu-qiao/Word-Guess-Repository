Concepts may be used:
Variables, events, functions, innerHTML, document.get, if(){} 

The game:

Title 

Theme  - guess the type of flowers, or ice-creams, or dances, needs to be well known. 

Some picture for decoration and indication of the theme. 

All the texts associated with key action. (document.getElementbyId or other document.get properties) 

Key event! Key up or key down. 

Record the user input, compare the input with the letter in the word (array?), store the value of user input and print it as capital letter(toUpperCase) on screen  

Define a variable (number), of how many total guesses a user gets. (totalGuesses),  

Define a variable (number), of how many guesses a user has gessed(userGuessTimes) 

Every time a user press a key, that key value needs to be logged and printed to screen, and userGuessTimes and userGuessLeft both change. 

Define another variable (number), define how many guesses left.(userGuessleft) 

Count the time of user pressing a key, and increase (i++) the value every time a user presses a key. Substract(I--) userGuessLeft 

Can the word be an array who stored letters as its values? 

Record how many times a user wins (userWins), by evaluating the array of letter and the inputs of users, determine if the user wins. 

So the order of the user input is NOT important, the letters he input is. 

Before user input, the display is string space with an underline, the length is the array length. 

To compare, use === && conditions (if user input is c and the array contains c) 

As soon as the user input correctly, the array length is fullfilled by one (???), does the array gets smaller, a value got removed from the array so it doesn't need to be compared. 

If the user input doesn't equal to any letter in the array, the blanks remain the same, userGuessLeft minus one, userGuessTimes plus one. 

If users input the same key , store once and ignore the other inputs.  

Question: number of guess is number of key pressing, or numbers a user fullfill a word? 

If the user guessed the word within the number of guesses, it’s one will, otherwise he/she loses. 