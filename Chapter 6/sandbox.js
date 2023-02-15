// const para = document.querySelector('body > h1');

// console.log(para);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');

// console.log(errors);

// const para = document.querySelector('p')
// console.log(para.innerText);
// para.innerText = "asser is crazyyy"

// // const paras = document.querySelectorAll('p')
// // paras.forEach(para => {
// //     console.log(para.innerText);
// //     para.innerText += ' new text'
// // }) 

// const content = document.querySelector('.content');

// //console.log(content.innerHTML);
// //content.innerHTML = '<h2>THIS IS A NEW H2</h2>'

// const people = ['mario', 'luigi', 'yoshi']

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`
// })

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.asser.com');
// link.innerText = 'Asser website'

// const mssg = document.querySelector('.error')
// console.log(mssg.getAttribute('class'))

// mssg.setAttribute('class', 'success')
// mssg.setAttribute('style', 'color: green')

// const title = document.querySelector('h1')

// //title.setAttribute('style', 'margin: 50px')

// console.log(title.style);
// console.log(title.style.color)

// title.style.margin = '50px'
// title.style.color = 'crimson'
// title.style.fontSize = '60px'
// title.style.margin = '';

// const content = document.querySelector('p')

// console.log(content.classList);
// content.classList.add('erorr')
// console.log(content.classList);
// content.classList.add('success')

// words = document.querySelectorAll('p')

// words.forEach(function (element) {
//     if(element.innerText.includes('success')) {
//         element.classList.add('success')
//     }
//     else if(element.innerText.includes('failure')) {
//         element.classList.add('failure')
//     }
//     else if(element.innerText.includes('error')) {
//         element.classList.add('error')
//     }
// })

// const article = document.querySelector('article');

// console.log(article.children);

// Array.from(article.children);

// Array.from(article.children).forEach((child) => {
//     child.classList.add('article-element');
// });

// const title = document.querySelector('h1');

// console.log(title.parentElement.parentElement)
// console.log(title.previousElementSibling);

// console.log(title.nextElementSibling.parentElement.children);
const html = document.querySelector('html');

html.addEventListener('click', function(e) {
    console.log(e);
})



const button = document.querySelector('button');

const ul = document.querySelector('ul');

button.addEventListener('click', function() {
    const li = document.createElement('li');
    li.textContent = 'something new to do'
    //ul.append(li)
    ul.prepend(li);
})

const items = document.querySelectorAll('li');

//ul.remove();

// items.forEach(function(item) {
//     item.addEventListener('click', function (e) {
//         //console.log(e.target);
//         // console.log(e.target.style.textDecoration);
//         // if(e.target.style.textDecoration == 0) {
//         //     e.target.style.textDecoration = 'line-through';
//         // }
//         // else if(e.target.style.textDecoration == 'line-through') {
//         //     e.target.style.textDecoration = '';
//         //}
//         console.log('event in LI')
//         e.stopPropagation();
//         e.target.remove();
//     });
// })

ul.addEventListener('click', e => {
    console.log(e);
    if(e.target.tagName === 'LI') {
        e.target.remove();
    }
})


