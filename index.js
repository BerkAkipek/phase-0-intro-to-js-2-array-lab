// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

// 01 
function destructivelyAppendCat(name){
    return cats.push(name)
}

// 02
function destructivelyPrependCat(name){
    return cats.unshift(name)
}

// 03
function destructivelyRemoveLastCat(){
    return cats.pop()
}

// 04
function destructivelyRemoveFirstCat(){
    return cats.shift()
}

// 05
function appendCat(name){
    return [...cats, name]
}

// 06
function prependCat(name){
    return [name, ...cats]
}

// 07
function removeLastCat(){
    return cats.slice(0, cats.length-1);
}


// 08
function removeFirstCat(){
    return cats.slice(1, cats.length);
}
