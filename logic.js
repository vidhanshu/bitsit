const bar = document.querySelector('.bar');
const nav = document.querySelector('.nav-bar')
const nav2 = document.querySelector('.nav-bar2')
const glare = document.querySelector('.glare-container')
bar.addEventListener('click', () => {
    if (nav2.style.display == 'block') {
        nav2.style.display = 'none'
        glare.style.zIndex = '100';
    } else {
        nav2.style.display = 'block'
        glare.style.zIndex = '-1';
    }
})