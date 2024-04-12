const parseQuery = require('./queryParser');
const readCSV = require('./csvReader');
const { parse } = require('json2csv');

async function executeSELECTQuery(query) {
    const { fields, table } = parseQuery(query);
    const data = await readCSV(`${table}.csv`);

    return data.map(row => {
        const filteredRow = {};
        fields.forEach(field => {
            filteredRow[field] = row[field];
        });
        return filteredRow;
    });
}

module.exports = executeSELECTQuery;