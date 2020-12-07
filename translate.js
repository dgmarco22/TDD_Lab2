/* Task: Translate from English to Pig Latin.
    Build Specifications
       1. Translation must all be done in a translate function that takes a string parameter and
          returns the translated Pig Latin string.
       2. The translation functionality must be developed with TDD using tests on the translate
          function. */

/*  Additional Build Specifications
    1. Convert each word to lowercase before translating.
    2. If a word starts with a vowel, just add “way” onto the ending.
    3. If a word starts with a consonant, move all of the consonants that appear before the
    first vowel to the end of the word, then add “ay” to the end of the word. */

    function translate(originalWord) 
    {
        let vowels = /[aeiou]/gi
        let pigLatinWord = "";
        let word = originalWord.toLowerCase();
        let firstLetter= word[0];
        
       
        if(!word.match(vowels)){
            pigLatinWord= word + 'ay';
            return pigLatinWord;
        }
        if(firstLetter.match(vowels)){
            pigLatinWord= word +'way';
            return pigLatinWord;
        }
        else{
            var indexOfVowel = word.indexOf(word.match(vowels)[0]);
            pigLatinWord = word.substr(indexOfVowel)+ word.substr(0,indexOfVowel)+'ay';
            return pigLatinWord;
          }
        
    };



    