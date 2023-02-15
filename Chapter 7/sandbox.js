const form = document.querySelector(".signup-form")
const feedback = document.querySelector('.feedback')
//const username = document.querySelector('#username')
const usernamePattern = /^[a-zA-Z]{6,12}$/

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(form.username.value)
    const username = form.username.value;

    if(usernamePattern.test(username)) {
        //feedback good info
        feedback.textContent = 'that username passes! good job man, your parents raised you well'
    }
    else {
        //feedback help info
        feedback.textContent = 'daaaaaamn bro, get some milk bro, where you at fam.'
    }
}) 

const username = 'Q@@$_Q@$_)asserlesham';

const pattern = /^[a-z]{6,}$/

let result = username.search(pattern)
console.log(result)

//live feedback
form.username.addEventListener('keyup', event => {
    if(usernamePattern.test(event.target.value)) {
        console.log('YOU COOL BRO')
    }
    else {
        console.log('Nah you lame')
    }
})