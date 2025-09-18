function findMiddleCharacter(word) {
    const length = word.length;
    const middleIndex = Math.floor(length / 2);

    if (length % 2 === 1) {
        // Нечётная длина - один средний символ
        return word[middleIndex];
    } else {
        // Чётная длина - два средних символа
        return word[middleIndex - 1] + word[middleIndex];
    }
}

// Пример использования:
const word = "bebra";
const result = findMiddleCharacter(word);
console.log(result); // Выведет "b"

// Тестирование с другими примерами:
console.log(findMiddleCharacter("test"));   // "es"
console.log(findMiddleCharacter("hello"));   // "l"

