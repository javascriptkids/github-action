const greetingTo = (name) => {
  return `Hello ${name}!`;
};

const reduceAction = (numberArray) => {
  if (!Array.isArray(numberArray)) throw Error('Not allowed, you are not an array brother!');
  return numberArray.reduce((currentNumber, nextNumber) => currentNumber + nextNumber);
};

module.exports = {
  greetingTo,
  reduceAction,
};
