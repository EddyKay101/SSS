const fs = require('fs');

/** 
 * saves to File
 * @param item
 * @param location
*/
const saveToFile = (item, location) => {
    const dataJSON = JSON.stringify(item);
    fs.writeFileSync(location, dataJSON);
}

/** 
 * Gets existing orders from file
*/
const getOrders = () => {
    try {
        const dataBuffer = fs.readFileSync('orders.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

/** 
 * Gets existing sweet packs from file
*/
const getSweetPacks = () => {
    try {
        const dataBuffer = fs.readFileSync('sweetPacks.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}


module.exports = {
    saveToFile: saveToFile,
    getOrders: getOrders,
    getSweetPacks: getSweetPacks

}