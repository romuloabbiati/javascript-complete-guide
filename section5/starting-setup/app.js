function getName() {
    return prompt('Your name: ', '');
}

function greet() {
    let userName = getName();
    console.log('Hello ' + userName)
}

greet();