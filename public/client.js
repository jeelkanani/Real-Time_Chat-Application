//IO comes through client library
const socket = io()
 
let name;
let textarea = document.querySelector('textarea')
let messageArea = document.querySelector('.message__area')
let image=  document.getElementById('msgsend')

do {
    name = prompt('Please enter your name: ')
} while(!name)

 

textarea.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        sendMessage(e.target.value)
    }

})


image.addEventListener('click', function(){
    const text=textarea.value;
    sendMessage(text)
    
})



function sendMessage(message) {
    let msg = {
        user: name,
        message: message
    }
    // Append 
    if(msg.message !== '')
    {
     appendMessage(msg, 'outgoing')
     textarea.value = ''
     scrollToBottom()

    // Send to server 
    
    socket.emit('message', msg)
    }

}

function appendMessage(msg, type) {
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className, 'message')

    let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
}

// Recieve messages 
socket.on('message', (msg) => {
    appendMessage(msg, 'incoming')
    scrollToBottom()
})

function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight
}


