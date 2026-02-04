import words from './words.json' with {type:'json'}

const getDictionary = [...words]

export const getWordsToCheck = (text) => {
    return text.split(/[\s-]+/).map(word => {
        return word.replace(/^[^\w]+|[^\w]+$/g, "")
    }).filter(word => word.length > 0)
}

export const isCorrectWord = (word) => {
    if(word[0]===word[0].toUpperCase() && (word[0]!==word[0].toLowerCase())) {
        return true
    }
    return getDictionary.includes(word.toLowerCase())
}

export const addingWords = (newWord) =>{
    getDictionary.push(newWord.toLowerCase())
}