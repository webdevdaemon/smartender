export default function slugify(queryString = '') {
  return queryString && queryString.toLowerCase().split(' ').join('-').trim()
}