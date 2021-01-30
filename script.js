// we declear a function for change ticket quantity by button
function handleTicketChange(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + '-ticket-quantity');
    const ticketQuantity = parseInt(ticketInput.value);
    // declear two condition
    let ticketNewQuantity = ticketQuantity;
    if (isIncrease == true) {
        ticketNewQuantity = ticketQuantity + 1;
    }
    if (isIncrease == false && ticketQuantity > 0) {
        ticketNewQuantity = ticketQuantity - 1;
    }
    ticketInput.value = ticketNewQuantity;
    document.getElementById(ticket + '-ticket-quantity').innerText = ticketNewQuantity;
    calculateToatl(); //connect a function
    document.getElementById(ticket).innerText = ticketNewQuantity;
}

// declear a function for calculate price, tax, total amount of ticket
function calculateToatl() {
    const firstClassTicketQuantity = getInputValue('first-class');
    const economyClassTicketQuantity = getInputValue('economy-class');

    //calculate price of ticket
    const totalTicketCost = firstClassTicketQuantity * 150 + economyClassTicketQuantity * 100;
    document.getElementById('sub-total').innerText = totalTicketCost;
    document.getElementById('price').innerText = totalTicketCost;

    //calculate tax of choosing ticket/tickets
    const tax = Math.round(totalTicketCost * 0.1);
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('tax').innerText = tax;

    // calculate total amount of ticket price with tax;
    const finalTotal = totalTicketCost + tax;
    document.getElementById('final-total').innerText = finalTotal;
    document.getElementById('total').innerText = finalTotal;

}

//here we make the input value of ticket to intiger
function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-ticket-quantity');
    const ticketQuantity = parseInt(ticketInput.value);
    return ticketQuantity;
}

// here we do some work with book noe button
const loginBtn = document.getElementById('book-now');
loginBtn.addEventListener('click', function () {
    const hideTicketSelectioArea = document.getElementById('ticket-selection');
    hideTicketSelectioArea.style.display = 'none'; //here we hide the display area
    const hideBodyBackground = document.getElementById('body');
    hideBodyBackground.style.background = 'none'; //here we hide the display background
    const confirmationArea = document.getElementById("confirmation-sms");
    confirmationArea.style.display = "block"; // here we show the ticket confirmation area
});
