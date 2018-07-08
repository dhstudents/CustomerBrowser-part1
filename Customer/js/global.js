// globals
let customers;
let pageSelection = "p2";
let pageAction = {
    p1: showCustomerDetails,
    p2: showCustomerOrders
}

function showCustomerDetails(thisObj) {
    let index = $(thisObj).attr('order') | 0; // cast it to number
    let card = customers[index].card();
    $("section").html(card);
}


function showCustomerOrders() {
    $.ajax(
        {
            url: 'data/orders.json',
            success: function(result) {
                alert(result);
            } 
        }
    );
}




// serve as customers prototype by setting __proto__
let cutomerMethods = {
    card: function()  { 
        let buffer = 'Customer Card';
        for (key in this) {
            if (!$.isFunction(this[key])) {
                 buffer += `<div>${key} - ${this[key]}</div>\n`
            }
        }
        return buffer;
    },
    rowList: function(index) {
        let buffer = '';
        buffer = `<div id='${this.CustomerID}' order='${index}'  title='${this.ContactName}'>${this.CompanyName}</div>`
        return buffer;
    }
}

// error this will save the window as this
// let cutomerMethods = {
//     card: () => { },
//     rowList: () => {alert(this)}
// }