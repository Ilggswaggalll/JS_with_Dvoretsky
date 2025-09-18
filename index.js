
function isPangram(phrase){
    const phraseToLower = phrase.toLowerCase();
    const letters = new Set();

    for (let char of phraseToLower){
        if (char >= 'a' && char <= 'z'){
            letters.add(char);
        }
    }

    return letters.size === 26;
}

function checkPangramInput(phrase){
    if (isPangram(phrase)){
        return "yes";
    }
    return "no";
}

console.log(checkPangramInput("The quick brown fox jumps over the lazy dog"));
console.log(checkPangramInput("WOW Dvoretsky"));