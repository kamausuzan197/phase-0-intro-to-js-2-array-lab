// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function appendCat(name) {
    const cats2 = [...cats, name];
    return cats2;
}

function prependCat(name) {
    const cats2 = [name, ...cats];
    return cats2;
}

function removeLastCat(name) {
    const cats2 = cats.slice(0, cats.length-1);
    return cats2;
}

function removeFirstCat(name) {
    const cats2 = cats.slice(1);
    return cats2;
}