
function split_camel(stroke){
    let words = stroke[0];
    for (let char of stroke.slice(1)){
        if (char.toUpperCase() !== char){
            words += char;
        }
        else{
            words += ' ';
            words += char;
        }
    }
    return words;
}

console.log(split_camel("camelCasing"));
console.log(split_camel("SWAT"));


