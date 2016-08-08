# Anatolian Groceries
Small webapp to manage grocery list for people in rural areas.

## Features
- Choose from available products to put on your grocery list by specifying an amount
- Add custom items to list of available products
- Reset available products (remove custom ones)
- Remove items from your grocery list one by one
- Empty grocery list at once

## Technology
A very minimal stack: Angular, jQuery and Bootstrap. Uses localStorage to save custom products and product lists.


## Installation

    bower install

## Editing available products
in assets/main-controller.js you can add products by adding elements to the initial product array. Specify name, image and count: 0.
