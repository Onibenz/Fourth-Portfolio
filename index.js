
document.querySelector('.fa-bars')
        .addEventListener('click', smallScreen);

function smallScreen() {
    document.querySelector('.smallscreen-nav').style.display = 'block';
}

document.querySelector('.fa-xmark')
        .addEventListener('click', exit);

function exit() {
    document.querySelector('.smallscreen-nav').style.display = 'none';
}