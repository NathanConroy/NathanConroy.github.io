import axios from 'axios';

import { getAboutURL } from './urls';

/*
 * Retrieves About Page content.
 */
export default async function retrieveAbout() {
  return axios.get(getAboutURL());
}
