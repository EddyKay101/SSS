const utils = require('./utils/utilities');
/** 
 * Adds packSize to list of pack sizes
 * @param packSize
*/
const addToPackSize = (packSize) => {
    const packs = utils.getSweetPacks();
    packs.push(packSize);

    utils.saveToFile(packs, 'sweetPacks.json');
    console.log('Pack Size added!');
}

/** 
 * Removes size from list of sizes
 * @param packSize
*/
const removePackSize = (packSize) => {
    const packs = utils.getSweetPacks();

    const packSizeToRemove = packs.indexOf(packSize);
    if (packSizeToRemove > -1) {
        packs.splice(packSizeToRemove, 1);
        const updated = packs;
        console.log(`[-] Removed...`);
        utils.saveToFile(updated, 'sweetPacks.json');
    } else {
        console.log('That size does not exist!');
    }
}


/** 
 * Adds to order
 * @param packSize
*/
const addSweetToOrder = (packSize) => {
    const packs = utils.getSweetPacks();
    const orders = utils.getOrders();
    const order = sendSweets(packs, packSize)
    orders.push(order);

    utils.saveToFile(orders, 'orders.json');
    console.log('Order added!');
}

/** 
 * Checks the customer order and returns sweet packs needed to fulfil order
 * @param packSizes
 * @param order
 * @returns {array}
*/
const sendSweets = (packSizes, order) => {
    let sweetPacks = [];

    // Sort the pack size in descending order
    const sortedPacks = packSizes.sort(function compare(a, b) {
        return b - a;
    });

    // Check if order exists
    if (sortedPacks.indexOf(order) > -1) {
        sweetPacks.push(sortedPacks[sortedPacks.indexOf(order)]);
    }
    else {
        sortedPacks.forEach((pack, index, array) => {

            while (pack <= order) {
                order -= pack;
                sweetPacks.push(pack);
            }

            if (array[array.length - 1] === pack && order < pack) {
                sweetPacks.push(pack);
            }

        });
    }
    return sweetPacks;
}

module.exports = {
    addToPackSize: addToPackSize,
    sendSweets: sendSweets,
    removePackSize: removePackSize,
    addSweetToOrder: addSweetToOrder

}