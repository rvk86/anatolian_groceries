var products = {

    storageKey: "groceries",


    starterProducts: {

        'banana': {
            name:"Muz",
            image:"assets/images/bananas.jpg",
            count: 0 },
        'apple': {
            name:"Elma",
            image:"assets/images/apples.jpg",
            count: 0 },
        'dates': {
            name:"Tarih",
            image:"assets/images/dates.jpg",
            count: 0 },
        'grapes': {
            name:"Üzum",
            image:"assets/images/grapes.jpg",
            count: 0 }

    },


    list: function() {

        return JSON.parse(localStorage.getItem(this.storageKey));

    },


    selected: function() {

        var list = this.list();
        var selected = {};

        for(var key in list) {
            if(list[key]['count'] > 0) {
                selected[key] = list[key];
            }
        }

        return selected;

    },


    empty: function() {

        var list = this.list();

        for(var key in list) {
            list[key]['count'] = 0;
        }

        this.set(list);

    },


    selectedCount: function() {

        return Object.keys(this.selected()).length;

    },


    set: function(list) {

        localStorage.setItem(this.storageKey, JSON.stringify(list));
        return list;

    },


    reset: function() {

        localStorage.removeItem(this.storageKey);
        this.set(this.starterProducts);

    },


    countItem: function(key, count) {

        var list = this.list();
        var product = list[key];

        if(product['count'] > 0 || count > 0) {
            product['count'] = product['count'] + count;
        }

        this.set(list);
        return product['count'];

    }

};