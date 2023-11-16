const getRandomNumber = (num) => {
  const randomDecimal = Math.random();
  const randomNumber = Math.floor(randomDecimal * (num));
  return randomNumber;
};

export default getRandomNumber;
