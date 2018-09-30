import newsSection from './newsSection.js'
// import { fnNewsListTemplate } from '../news.js'
import { fnNewsListTemplate  } from '../news.js';

document.addEventListener("DOMContentLoaded", () => {
    const news = new newsSection();
    news.init(fnNewsListTemplate);
});


document.addEventListener('click', ()=>{

});