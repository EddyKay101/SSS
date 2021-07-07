const yargs = require('yargs');
const packs = require('./src/packs.js');

yargs.command({
    command: 'add-pack-size',
    describe: 'Add packsize to pack',
    builder: {
        packSize: {
            describe: 'Pack Size',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (argv) => {
        packs.addToPackSize(argv.packSize)

    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove packsize',
    builder: {
        packSize: {
            describe: 'Packsize to remove',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (argv) => {
        packs.removePackSize(argv.packSize);
    }
});

yargs.command({
    command: 'order',
    describe: 'Add to Order',
    builder: {
        order: {
            describe: 'Order Made',
            demandOption: true,
            type: 'array'
        }
    },
    handler: (argv) => {
        packs.addSweetToOrder(argv.order);
    }
});

yargs.parse();