import { getWordsToCheck } from './common.mjs';

window.onload = () => {
  const textArea = document.getElementById("user-text");
  const button = document.getElementById("button");
  const resultCLick = document.getElementById('check-results');

  button.addEventListener("click", () => {
    resultCLick.innerHTML = '';
    const rawValue = textArea.value;
    
    const wordsToCheck = getWordsToCheck(rawValue);

    if (wordsToCheck.length === 0) {
        resultCLick.innerText = 'Please enter some texts to check';
        resultCLick.style.color ='red'
        setTimeout (()=> {
            resultCLick.innerText = ''
        },3000)
    } else {
        resultCLick.style.color = 'blue'
        resultCLick.innerText = `There are ${wordsToCheck.length} words to check.`;
        setTimeout (()=> {
            resultCLick.innerText = ''
        }, 3000)
    }
    
  });
}