function dashify (str) {
  return str
    .replace(/[ \t]/g, '-')
    .replace(/[^-a-zA-Z0-9]/g, '')
    .toLowerCase()
}

module.exports = dashify
