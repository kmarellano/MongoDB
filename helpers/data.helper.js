const letterAndNumberRandomizer = (letters) => {
  const randomIndex = Math.floor(Math.random() * letters.length);
  return letters[randomIndex];
};

module.exports = letterAndNumberRandomizer;
