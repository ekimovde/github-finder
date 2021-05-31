export default function sortRepos (rep, typeSort) {
  let app = rep
  return app.sort((a, b) => {
    let mod = 1
    if (typeSort.currentSortDir === 'desc') mod = -1

    // Name repository sort
    if (typeSort.currentSort === 'name') {
      if (a[typeSort.currentSort] < b[typeSort.currentSort]) return -1 * mod
      if (a[typeSort.currentSort] > b[typeSort.currentSort]) return 1 * mod
    }

    // Star sort
    if (typeSort.currentSort === 'stargazers_count') {
      if (a[typeSort.currentSort] < b[typeSort.currentSort]) return -1 * mod
      if (a[typeSort.currentSort] > b[typeSort.currentSort]) return 1 * mod
    }
    return 0
  })
}