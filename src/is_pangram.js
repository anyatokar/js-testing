const isPangram = function(text) {
  text = text.toLowerCase()
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const hashMap = {}

  for (let i = 0; i < alphabet.length; i++) {
    hashMap[alphabet[i]] = 0;
  }

  for (let i = 0; i < text.length; i++) {
    hashMap[text[i]] += 1;
  }

  for (const key in hashMap) {
    if (hashMap[key] === 0) {
      return false }
  }
  return true
};

module.exports = isPangram;
