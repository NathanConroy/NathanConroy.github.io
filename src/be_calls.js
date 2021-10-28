import POSTS_URL from './consts';


function retrievePosts() {
    return axios(POSTS_URL);
}
