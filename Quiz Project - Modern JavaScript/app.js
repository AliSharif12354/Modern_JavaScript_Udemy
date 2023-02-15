// Ali H Sharif

let goodAnswers = ['D', 'D', 'B', 'B']

let form = document.querySelector('.quiz-form')
console.log(form)

let result = document.querySelector('.result')

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let score = 0;

    const answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    answers.forEach(function(element, i) {
        if(goodAnswers[i] === answers[i]) {
            score += 25;
            let q = `q${i + 1}`
            console.log(q)
            feedback = document.querySelector(`.good-response-${q}`)
            feedback.classList.remove('d-none')
        }
    })
    scrollTo(0,0)
    result.classList.remove('d-none')
    span = result.querySelector('span')

    let animation = 0;
    console.log(score)
    const runtime = setInterval(function () {
        animation++;
        if(animation === score) {
            clearInterval(runtime)
        }
        span.innerHTML = `${animation}%`
    }, 10)
    
})