# Simon's Sweet Shop Application.

#### Intro

The purpose of this is to enable SSS to send out packs of sweets with as little wastage as possible for any given order size. To add to this, is the ability for Simon to modify pack sizes.

#### Tech Stack

Stack used to build this feature is minimal

. Node Js
. Jest for unit testing
. Yargs for command line user input

#### Process

Before you get started run **npm i** to get all dependencies from package.json.

###### Adding Pack Size

In order to add PackSizes insert this command onto the terminal.

```
node app.js add-pack-size --packSize <sizeToAdd> i.e. 40
```

This would add an array of sizes to **_sweetPacks.json_** a file created to hold sweet packs.

###### Removing Pack Size

To remove pack sizes insert this command onto the terminal

```
node app.js remove --packSize <sizeToRemove> i.e. 500
```

This would alter **_sweetPacks.json_** and remove the exact pack size.

###### Adding to Order

This process allows Simon to add orders made by clients with the sweet packs needed to fulfil the order.

To add to order, insert this command onto the terminal

```
node app.js order --order <orderMade> i.e. 12001
```

This will use the existing sweet Packs and get the right amount of sweets to send in form of an Array.

###### File Structure

src  
│ ├── utils  
│  
│  
├── tests  
└── readme

###### Tests

Tests have been written to cater for different use cases
