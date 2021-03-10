export function splitting(input, type = '') {
  const item1 = []
  const item2 = []
  input.map((item) => {
    if (item.programType == 'series' && item.releaseYear >= 2015) {
      item1.push(item)
    } else if (item.programType == 'movie' && item.releaseYear >= 2015) {
      item2.push(item)
    }
  })
  let output = []
  if (type === 'movies') {
    output = item2
  } else if (type === 'series') {
    output = item1
  }

  return output
}

export function sortAsc(arr, field) {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) return 1

    if (b[field] > a[field]) return -1

    return 0
  })
}

export function sortDesc(arr, field) {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) return -1

    if (b[field] > a[field]) return 1

    return 0
  })
}
