// Input variables
const nameInput = document.querySelector('#name')
const phoneInput = document.querySelector('#tel')
const submitBtn = document.querySelector('#submit')

submitBtn.addEventListener('click', addInputToResult)

function addInputToResult(e) {
    if(nameInput.value === '') {
        alert('Check Your Input Please')
    }
    // Build result UI
    const sectionResult = document.querySelector('section.result')
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    const data = document.createElement('div')
    data.className = 'data'
    const dataName = document.createElement('p')
    dataName.className = 'name'
    dataName.textContent = 'Name: '
    const recievedData = document.createElement('span')
    recievedData.textContent = nameInput.value
    const deleteIcon = document.createElement('i')
    deleteIcon.className = 'fas fa-window-close'

    sectionResult.appendChild(ul)
    ul.appendChild(li)
    li.appendChild(data)
    li.appendChild(deleteIcon)
    data.appendChild(dataName)
    dataName.appendChild(recievedData)

    nameInput.value = ''

    deleteIcon.addEventListener('click', deleteItem)
    function deleteItem(e) {

        deleteIcon.parentElement.remove()
    
        e.preventDefault()
    }
    
    e.preventDefault()
}












