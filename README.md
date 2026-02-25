# Project-Spell-Checker

Basic English Spell Checker

A simple, interactive web application that checks text for spelling mistakes against the Basic English dictionary.
It includes features for handling punctuation, hyphenated words, and the ability to dynamically expand the dictionary.

Install dependencies:
Bash 
npm install

To run tests:
Bash
npm test

Key Features:

1- Smart Cleaning: Automatically removes punctuation (, . ! ? : ;) from the start and end of words.
2- mHyphen Support: Correctly splits hyphenated words to check each part individually.
3- Proper Noun Rule: Automatically accepts any word starting with a capital letter as correct.
4- Live Dictionary: Users can click a "mistake" to add it to the session's dictionary, which immediately clears the error.
5- Responsive UI: Real-time feedback and clear visual cues for spelling mistakes