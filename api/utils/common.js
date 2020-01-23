const sortByDate = (property, subP) => {
  return function (a, b) {
    const aDate = a[property][subP];
    const bDate = b[property][subP];
    if (aDate < bDate)
      return 1;
    else if (aDate > bDate)
      return -1;

    return 0;
  }
}

module.exports = { sortByDate };