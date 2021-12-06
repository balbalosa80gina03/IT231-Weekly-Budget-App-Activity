class Budget {
    constructor(budget) {
        this.budget = Number( budget );
        this.budgetLeft = this.budget;
    }

    substractFromBudget(amount) {
        return this.budgetLeft -= amount;
    }
}


class HTML {


    insertBudget(amount) {

        budgetTotal.innerHTML = `${amount}`;
        budgetLeft.innerHTML = `${amount}`;
    }


    printMessage(message, className) {
        const messageWrapper = document.createElement('div');
        messageWrapper.classList.add('text-center', 'alert', className);
        messageWrapper.appendChild(document.createTextNode(message));

        document.querySelector('.primary').insertBefore(messageWrapper, addExpenseForm);


        setTimeout(function() {
            document.querySelector('.primary .alert').remove();
            // addExpenseForm.reset();
        }, 3000);

    }

    addExpenseToList(name, amount) {
        const expensesList = document.querySelector('#expenses ul');

        const li = document.createElement('li');
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        li.innerHTML = `
            ${name}
            <span class="badge badge-primary badge-pill">$ ${amount}</span>
        `;

        expensesList.appendChild(li);
    }

    trackBudget(amount) {
        const budgetLeftDollars = budget.substractFromBudget(amount);
        budgetLeft.innerHTML = `${budgetLeftDollars}`;

        if( (budget.budget / 4 ) > budgetLeftDollars ) {
            budgetLeft.parentElement.parentElement.classList.remove('alert-succes', 'alert-warning');
            budgetLeft.parentElement.parentElement.classList.add('alert-dander');

        } else if( (budget.budget / 2 ) > budgetLeftDollars ) {
            budgetLeft.parentElement.parentElement.classList.remove('alert-succes');
            budgetLeft.parentElement.parentElement.classList.add('alert-warning');
        }
    }
}