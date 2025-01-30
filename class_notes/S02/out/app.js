function wrapInArr(value) {
    return [value];
}
let arr = wrapInArr(1);
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let kvp = new KeyValuePair(1, "a");
let shorter = new KeyValuePair(1, "a");
function displayType(param1, param2) {
    console.log(`param1:${typeof param1}, param2:${typeof param2}`);
}
displayType(34, "Istanbul");
displayType("Price", 250);
displayType(console.log, 5 > 8);
