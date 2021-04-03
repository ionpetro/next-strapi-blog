import { getStrapiUrl } from "./api";

export function getStrapiMedia(media) {
  return media.url.startsWith("/") ? getStrapiUrl(media.url) : media.url;
}
