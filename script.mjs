import { getWordsToCheck, isCorrectWord, addingWords } from './common.mjs';

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
        
        const mistakesFound = wordsToCheck.filter(word => !isCorrectWord(word))
        if(mistakesFound.length===0)  {
            resultCLick.innerText = 'All Words Are Correct.'
            resultCLick.style.color ='green'
             setTimeout (()=> {
            resultCLick.innerText = ''
        }, 3000)
        } else {
            const title = document.createElement('p')
            title.innerText = `Found ${mistakesFound.length} mistakes: ${mistakesFound.join(', ')}`
            title.style.color='red'
            resultCLick.append(title)

            mistakesFound.forEach(word => {
                const buttonContainer = document.createElement('div')
                const btn = document.createElement('button')
                btn.innerText=`Add ${word} to dictionary`

                btn.addEventListener('click',()=> {
                   addingWords(word)
                   button.click()
                })
                buttonContainer.append(btn)
                resultCLick.append(buttonContainer)
            });
        }
       
    }
    
  });
  textArea.addEventListener('input',() => {
    resultCLick.innerHTML = ''
  })
}