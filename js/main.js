import newsSection from './newsSection.js'
import { fnNewsListTemplate } from '../news.js'

// *초기화
document.addEventListener("DOMContentLoaded", () => {
    const news = new newsSection();
    news.init(fnNewsListTemplate);

    news.logoImgUrl;
});

// fnNewsListTemplate(newslist[0].logoImgUrl);


// *이벤트 영역
var leftbtn = document.querySelector('.left');
var rightbtn = document.querySelector('.right');


leftbtn.addEventListener('click', ()=>{
    console.log('next json');
});

rightbtn.addEventListener('click', ()=>{
    console.log('prev json');
});