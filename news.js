import * as newslist from './data/newslist.js';

let $newslist = newslist.newslist;

// *순회?
$newslist.forEach(Console);

function Console(value, idx){
    console.log(value, idx);
}

console.log(newslist.newslist[0].logoImgUrl, '가져온것');

// const fnNewsListTemplate = ({
//   logoImgUrl,
//   company,
//   thumbnews: { imageUrl },
//   thumbnews: { text },
//   newslist
// }) => {
// console.log(logoImgUrl, '함수 통과');
//   return `<div class="title">
//     <div class="logo-wrap">
//         <img class="company" src="${logoImgUrl}" alt="${company}">
//     </div>
//         <button> <a href="#">X</a> </button>
//     </div>
//     <div class="newsList">
//         <div class="img-title-wrap">
//             <img src="${imageUrl}" alt="">
//             <div class="title-desc">${text}</div>
//         </div>
//         <ul>
//          ${newslist.reduce((html, newsTitle) => {
//            return html + "<li>" + newsTitle + "</li>";
//          }, "")}
//         </ul>
//     </div>`;
// };
var a = newslist.newslist[0].logoImgUrl;
var b = newslist.newslist[1].logoImgUrl;


const fnNewsListTemplate = ({logoImgUrl, b}) => {
    console.log(logoImgUrl, '함수 통과');
    return `
    <div>${logoImgUrl}</div>
    `;
}

fnNewsListTemplate(newslist);

export { fnNewsListTemplate };
