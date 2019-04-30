import axios from 'axios';
import { key, proxy } from '../config';

//http://food2fork.com/api/search
//639c81401b317a526f16d0b9c22a4205

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}
