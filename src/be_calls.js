import axios from 'axios';

import { POSTS_URL } from './const';


export async function retrievePosts() {
    return axios.get(POSTS_URL);
}
