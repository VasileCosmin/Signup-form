const form = document.querySelector('form')
const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  checkInputs()
})

function checkInputs() {
  const firstNameValue = firstName.value.trim()
  const lastNameValue = lastName.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()

  if(firstNameValue === '') {
    setErrorFor(firstName, 'First Name cannot be empty')
  } else {
    setSuccessFor(firstName)
  }

  if(lastNameValue === '') {
    setErrorFor(lastName, 'Last Name cannot be empty')
  } else {
    setSuccessFor(lastName)
  }

  if(emailValue === '') {
    setErrorFor(email, 'Email cannot be empty')
  } else if(!isEmail(emailValue)) {
    setErrorFor(email, 'Looks like this is not an email')
  } else {
    setSuccessFor(email)
  }

  if(passwordValue === '') {
    setErrorFor(password, 'Password cannot be empty')
  } else {
    setSuccessFor(password)
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement
  const samll = formControl.querySelector('small')

  samll.innerText = message
  formControl.className = 'form-control error'
}

function setSuccessFor(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control'
}

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}