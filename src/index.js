import './style.css';
import './components/home/home.js';
import generateHomePage from './components/home/home.js';

const contentContainer = document.getElementById('content');

const homePage = generateHomePage();

contentContainer.appendChild(homePage);

const navButtonsContainer = document.getElementById('navButtonsContainer');

navButtonsContainer.addEventListener('click', (event) => {
    let currentPage = contentContainer.firstChild;
    if (currentPage) {
        currentPage.remove();
    }
    switch (event.target.value) {
        case 'home':
            currentPage = homePage;
            contentContainer.appendChild(currentPage);
            break;
        case 'menu':
            break;
        case 'gallery':
            break;
        case 'about':
            break;
        default:
            break;
    }
})