// Imports
const { ipcRenderer } = require('electron')

document.getElementById('min_btn').addEventListener('click', () => {
    ipcRenderer.send('min_win')
    console.log('cl')

})

document.getElementById('close_btn').addEventListener('click', () => {
    ipcRenderer.send('close_win')
})