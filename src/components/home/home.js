import './home.css';

const generateHomePage = () => {
    const homeSection = document.createElement('section');
    homeSection.classList.add('home-section');
  

    const headingDiv = document.createElement('div');
    headingDiv.classList.add('heading-container');

    const homeTitle = document.createElement('h1');
    homeTitle.innerText = 'The Cuisine Restaurant'

    const tagline = document.createElement('p');
    tagline.innerText = 'Where Flavor Meets Freshness: Savor Every Bite!';

    homeSection.appendChild(headingDiv);
    headingDiv.appendChild(homeTitle);
    headingDiv.appendChild(tagline);

    return homeSection;
}

export default generateHomePage;