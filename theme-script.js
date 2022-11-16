document.querySelector('#theme-toggle').addEventListener('click', setTheme);
const root = document.documentElement;
root.className = 'light';

const lightImgs = Array.from(document.querySelectorAll('.light-img'));
const darkImgs = Array.from(document.querySelectorAll('.dark-img'));
darkImgs.forEach(img => img.classList.add('hide-img'));

console.log(lightImgs);
console.log(darkImgs);

function setTheme() {
    const currTheme = root.className === 'light' ? 'dark' : 'light';
    root.className = currTheme;
    if (currTheme === 'light') {
        darkImgs.forEach(img => img.classList.add('hide-img'));
        lightImgs.forEach(img => img.classList.remove('hide-img'));
    } else {
        darkImgs.forEach(img => img.classList.remove('hide-img'));
        lightImgs.forEach(img => img.classList.add('hide-img'));
    }
}

