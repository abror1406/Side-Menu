const searchButton = document.querySelector('.search');
const modalPanel = document.querySelector('.modal-panel');
const panelButton = document.querySelector('.panel-button');

const modalPanelRun = document.querySelector('.runPanel');
const RunButton = document.querySelector('.run');

searchButton.addEventListener('click', function() {
    if (modalPanel.classList.contains('active')) {
        modalPanel.classList.remove('active');
    } else {
        modalPanel.classList.add('active');
    }
});
RunButton.addEventListener('click', function() {
    if (modalPanelRun.classList.contains('active')) {
        modalPanelRun.classList.remove('active');
    } else {
        modalPanelRun.classList.add('active');
    }
});
panelButton.addEventListener('click', function(){
    if (modalPanel.classList.contains('active')) {
        modalPanel.classList.remove('active');
    } else {
        modalPanel.classList.add('active');
    }
})

