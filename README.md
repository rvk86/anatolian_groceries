# Anatolian Groceries
Small webapp to manage grocery list for people in rural areas.

## Features
- Choose from available products to put on your grocery list by specifying an amount
- Add custom items to list of available products
- Reset available products (remove custom ones)
- Remove items from your grocery list one by one
- Empty grocery list at once

## Technology
A very minimal stack: jQuery, Bootstrap and Handlebars. Uses localStorage to save custom products and product lists.


## Installation

    bower install

## Editing available products
in assets/products.js you can add products by adding keys to the starterProducts. Specify name, image and count: 0.
