
export const getWordsToCheck = (text) => {
    return text.split(/\s+/).filter(word => word.length > 0)
}