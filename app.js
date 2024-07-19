const searchButton = document.querySelector('.search-button');
const runButton = document.querySelector('.run-button');
const modalBg = document.querySelector('.modalbg');
const modalRun = document.querySelector('.two');
const modal = document.querySelector('.modal');
const panelButton = document.querySelector('.panel__button');
const panelButtonTwo = document.querySelector('.panel__buttonTwo');

runButton.addEventListener('click', function(){
    if (modalRun.classList.contains('active')) {
        modalRun.classList.remove('active');
    } else {
        modalRun.classList.add('active');
    }
    if (modalBg.classList.contains('active')) {
        modalBg.classList.remove('active');
    } else {
        modalBg.classList.add('active');
    } 
})

searchButton.addEventListener('click', function() {
    if (modal.classList.contains('active')) {
        modal.classList.remove('active');
    } else {
        modal.classList.add('active');
    }
    if (modalBg.classList.contains('active')) {
        modalBg.classList.remove('active');
    } else {
        modalBg.classList.add('active');
    }
})

panelButton.addEventListener('click', function(){
    modal.classList.remove('active')
    modalBg.classList.remove('active');
    modalRun.classList.remove('active');
})

modalBg.addEventListener('click', function(){
    modal.classList.remove('active')
    modalBg.classList.remove('active')
    modalRun.classList.remove('active');
})
panelButtonTwo.addEventListener('click', function(){
    modalRun.classList.remove('active')
    modalBg.classList.remove('active');
})