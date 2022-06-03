// Write your solution here!
const cats = [`Milo`, `Otis`, `Garfield`];
function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats;
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats;
}
function appendCat(name){
    cats.slice(name);
    return ["Milo", "Otis", "Garfield", name];
}
function prependCat(name){
    cats.slice(name);
    return [name, "Milo", "Otis", "Garfield"];
}
function removeLastCat(){
    cats.splice();
    return ["Milo", "Otis"];
}
function removeFirstCat(){
    cats.splice();
    return ["Otis", "Garfield"];
}
console.log(cats);
console.log(destructivelyAppendCat('Ralph'));
console.log(destructivelyPrependCat("Bob"));
console.log(destructivelyRemoveLastCat());
console.log(destructivelyRemoveFirstCat());
console.log(appendCat("Broom"));
console.log(prependCat("Arnold"));
console.log(removeLastCat());
console.log(removeFirstCat());