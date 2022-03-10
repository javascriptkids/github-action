const fs = require('fs');
const data = require('./data.json');

const updateJSONData = async () => {
  const updatedValue = ++data.repetitionTotal;
  return await insertData(updatedValue);
};

const insertData = async (updatedValue) => {
  const payload = { repetitionTotal: updatedValue };
  fs.writeFileSync('./data.json', JSON.stringify(payload), { encoding: 'utf-8' });
  return updatedValue;
};

updateJSONData();
