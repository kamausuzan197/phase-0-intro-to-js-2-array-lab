// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function appendCat(name) {
    const cats2 = [...cats, name];
    return cats2;
}

function prependCat(name) {
    const cats2 = [name, ...cats];
    return cats2;
}

function removeLastCat () {
    const newCats = cats.slice(0,cats.length -1)
    return newCats
}

function removeFirstCat () {
    const newCats = cats.slice(1)
    return newCats
}