//Form

const inputs = document.querySelectorAll('.form_group input')
const checkboxes = document.querySelectorAll('.checkbox input')
let error = false

inputs.forEach(i => {
    i.addEventListener('focus', () => i.classList.add('active'))
    i.addEventListener('blur', validationInputs)
})

const jobs = document.querySelector('.jobs')
const form = document.getElementById('form')
jobs.addEventListener('click', conditionDescriptionTitle)

const desTitle = document.getElementById('desTitle')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    inputs.forEach(i => {
        let description = i.nextSibling.nextSibling.nextSibling.nextSibling
        if (i.value.trim() === '') {
            description.innerText = `Add your ${i.name}`
            error = true
        }
    })

    let works = []

    checkboxes.forEach(c => {if (c.checked) works.push(c.value)})

    if (works.length === 0) desTitle.innerText = 'you need to choose at least one job'

    if (!error && works.length !== 0) {
        let message = {}
        inputs.forEach(i => message[i.name] = i.value)
        message.works = works
        inputs.forEach(i => {
            i.value = ''
            i.classList.remove('active')
        })
        checkboxes.forEach(c => c.checked = false)
        console.log(message)
    }
})


function conditionDescriptionTitle(e) {
    e.target.checked ? desTitle.innerText = '' : desTitle.innerText = 'you need to choose at least one job'
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            desTitle.innerText = ''
            break
        }
    }
}


function validationInputs(e) {
    let i = e.target
    let description = i.nextSibling.nextSibling.nextSibling.nextSibling
    let reg = /.+@.+\..+/i;
    if (i.value.trim() === '') {
        i.classList.remove('active')
        description.innerText = `Add your ${i.name}`
        error = true
    } else if (i.name == 'email' && !reg.test(i.value)) {
        description.innerText = 'Add valid email'
        error = true
    } else {
        description.innerText = ''
        error = false
    }
}