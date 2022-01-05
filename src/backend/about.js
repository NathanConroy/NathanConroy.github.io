
import { getAboutURL } from './urls';

/*
 * Retrieves About Page content.
 */
export async function retrieveAbout() {
  return axios.get(getAboutURL());
}
