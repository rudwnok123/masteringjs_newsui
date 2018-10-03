import { newslist } from '../data/newslist.js';
import { fnNewsListTemplate } from '../news.js'
export default class newsSection {
    constructor(company, id, logoImgUrl, newlist) {
        this.company = company;
        this.id = id;
        this.logoImgUrl = logoImgUrl;
        this.newlist = newlist;
    }
    init(fnNewsListTemplate, fnNewsCompanyList) {
        this.company = "KBS";
    }

    nextNews(){}
    preNews(){}
    choiceNews(){}
}
