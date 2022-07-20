'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
        '2022-06-01T21:31:17.178Z',
        '2022-06-02T07:42:02.383Z',
        '2022-06-03T09:15:04.904Z',
        '2022-06-04T10:17:24.185Z',
        '2022-06-05T14:11:59.604Z',
        '2022-06-06T17:01:17.194Z',
        '2022-06-07T23:36:17.929Z',
        '2022-06-09T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'en-NG', // de-DE
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
        '2022-06-01T21:31:17.178Z',
        '2022-06-02T07:42:02.383Z',
        '2022-06-03T09:15:04.904Z',
        '2022-06-04T10:17:24.185Z',
        '2022-06-05T14:11:59.604Z',
        '2022-06-06T17:01:17.194Z',
        '2022-06-07T23:36:17.929Z',
        '2022-06-09T10:51:36.790Z',
    ],
    currency: 'USD',
    locale: 'en-US',
};
const account3 = {
    owner: 'Abiodun Opeyemi John',
    movements: [10000, 2000, 2000, 4000, 4000000, -200, -100, 40000],
    interestRate: 2,
    pin: 6957,


    movementsDates: [
        '2022-06-01T21:31:17.178Z',
        '2022-06-02T07:42:02.383Z',
        '2022-06-03T09:15:04.904Z',
        '2022-06-04T10:17:24.185Z',
        '2022-06-05T14:11:59.604Z',
        '2022-06-06T17:01:17.194Z',
        '2022-06-07T23:36:17.929Z',
        '2022-06-09T10:51:36.790Z',
    ],
    currency: 'USD',
    locale: 'en-US',
}
const account4 = {
    owner: 'Ghostcoder Christopher Oluwafemi Egbaaibon',
    movements: [-10000, -2000, -2000, -4000, -4000000, -200, -100, -40000],
    interestRate: 0,
    pin: 5555,


    movementsDates: [
        '2022-06-01T21:31:17.178Z',
        '2022-06-02T07:42:02.383Z',
        '2022-06-03T09:15:04.904Z',
        '2022-06-04T10:17:24.185Z',
        '2022-06-05T14:11:59.604Z',
        '2022-06-06T17:01:17.194Z',
        '2022-06-07T23:36:17.929Z',
        '2022-06-09T10:51:36.790Z',
    ],
    currency: 'USD',
    locale: 'en-US',
}
const account5 = {
    owner: 'Hackeinstein',
    movements: [10000, 2000, 4000, 4000000, -200, -100, 40000],
    interestRate: 2,
    pin: 6957,


    movementsDates: [
        '2022-06-01T21:31:17.178Z',
        '2022-06-03T09:15:04.904Z',
        '2022-06-04T10:17:24.185Z',
        '2022-06-05T14:11:59.604Z',
        '2022-06-06T17:01:17.194Z',
        '2022-06-07T23:36:17.929Z',
        '2022-06-09T10:51:36.790Z',
    ],
    currency: 'USD',
    locale: 'en-US',
}
const account6 = {
    owner: 'Afolayan Esther',
    movements: [-200, -100, 40000],
    interestRate: 2,
    pin: 6957,


    movementsDates: [
        '2022-06-06T17:01:17.194Z',
        '2022-06-07T23:36:17.929Z',
        '2022-06-09T10:51:36.790Z',
    ],
    currency: 'USD',
    locale: 'en-US',
}

const accounts = [account1, account2, account3, account4, account5, account6];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions
// Creating Date Formats
const formatMovementDate = function(date, locale) {
    // Calculating days passed
    const calcdayspassed = (date1, date2) => Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

    // Calculating days passed between current date and movement date.
    const dayspassed = calcdayspassed(new Date(), date);

    console.log(dayspassed);

    //Giving the formats 
    if (dayspassed === 0) return 'Today';
    if (dayspassed === 1) return 'Yesterday'
    if (dayspassed <= 7) return `${dayspassed} days ago`

    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth()+ 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);

}
const formatcurrency = function(value, locale, currency) {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(value)

}


const displayMovements = function(acc, sort = false) {
        containerMovements.innerHTML = '';

        const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

        //Templale literal
        movs.forEach(function(mov, i) {
            const type = mov > 0 ? 'deposit' : 'withdrawal';
            const date = new Date(acc.movementsDates[i])
            const displayDate = formatMovementDate(date, acc.locale);

            const formattedMovs = formatcurrency(mov, acc.locale, acc.currency)

            const html = `
  
     <div class="movements__row">
      <div class="movements__type   movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${formattedMovs}</div>
     </div> 
   `;
            containerMovements.insertAdjacentHTML("afterbegin", html)
        });
    }
    // console.log(containerMovements.innerHTML);
    // movements: [200, 450, -400, 3000, -650, -130, 70, 1300],


const calcDisplayBalance = function(acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = formatcurrency(acc.balance, acc.locale, acc.currency)
};
const calcDisplaySummary = function(acc) {
    const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = formatcurrency(incomes, acc.locale, acc.currency);

    const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = formatcurrency(Math.abs(out), acc.locale, acc.currency)

    const interest = acc.movements.filter(mov => mov > 0).map(deposit => (deposit * acc.interestRate) / 100).filter((int, i, arr) => {
        return int >= 1;
    }).reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = formatcurrency(interest, acc.locale, acc.currency);

}




const createUsernames = function(accs) {

    accs.forEach(function(acc) {
        acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
    })

}
createUsernames(accounts);


const updateUI = function(acc) {

    // Display Movements
    displayMovements(acc);
    //Display balance
    calcDisplayBalance(currentAccount);
    //Display Summary
    calcDisplaySummary(currentAccount)
};

const startLogOutTimer = function() {
    const ticktok = function() {
            const min = String(Math.trunc(time / 60)).padStart(2, 0)
            const sec = String(time % 60).padStart(2, 0);
            // In each call, print the remaining time to UI
            labelTimer.textContent = `${min}:${sec}`;


            // When 0 seconds, stop timer and log out user
            if (time === 0) {
                clearInterval(timer);
                labelWelcome.textContent = 'Log in to get started';
                containerApp.style.opacity = 0;
            }
            //Decrease 
            time--;

        }
        //Setting time to 5 minutes
    let time = 600;
    // Call the timer every second
    ticktok();
    const timer = setInterval(ticktok, 1000)

    return timer;
};

////////////////////////////////////////
//EVENT HANDLERS

let currentAccount, timer;

// Experimenting API


btnLogin.addEventListener('click', function(e) {
    //Prevent form from refreshing
    e.preventDefault();

    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

    console.log(currentAccount);

    if (currentAccount && currentAccount.pin === +(inputLoginPin.value)) {
        //Display UI AND WELCOME MESSAGE
        labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity = 100;

        //Create current date and time
        const now = new Date();
        const options = {
                hour: 'numeric',
                minute: 'numeric',
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
                //weekday: 'numeric'
            }
            // const locale = navigator.language;
            // console.log(locale)

        labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);
        // const day = `${now.getDate()}`.padStart(2, 0);
        // const month = `${now.getMonth()+ 1}`.padStart(2, 0);
        // const year = now.getFullYear();
        // const hour = `${now.getHours()}`.padStart(2, 0);
        // const min = `${now.getMinutes()}`.padStart(2, 0);
        // labelDate.textContent = `${day}/${month}/${year},${hour}:${min}`;

        //Clear input fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();
        if (timer) clearInterval(timer)
        timer = startLogOutTimer();
        //UPDATE UI
        updateUI(currentAccount)
    }
});

// Transfer

btnTransfer.addEventListener('click', function(e) {
    e.preventDefault();
    const amount = +(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);


    inputTransferAmount.value = inputTransferTo.value = '';

    console.log(amount, receiverAcc);


    if (amount > 0 &&
        receiverAcc &&
        currentAccount.balance >= amount && receiverAcc.username !== currentAccount.username) {
        //Alert
        //alert('Transfer Succesful✅')
        //DOING THE TRANSFER
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        //Add transfer date
        currentAccount.movementsDates.push(new Date().toISOString())
        receiverAcc.movementsDates.push(new Date().toISOString())

        //UPDATE UI
        updateUI(currentAccount)

        //Reset timer
        clearInterval(timer);
        timer = startLogOutTimer();

    }
});

btnLoan.addEventListener('click', function(e) {
    e.preventDefault();

    const amount = Math.floor(inputLoanAmount.value);

    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        setTimeout(function() {
            //Add movement
            currentAccount.movements.push(amount);

            //Add Loan date
            currentAccount.movementsDates.push(new Date().toISOString());

            //Update UI
            updateUI(currentAccount);

            //Reset timer
            clearInterval(timer);
            timer = startLogOutTimer();
        }, 2500)
    }
    inputLoanAmount.value = "";
})

btnClose.addEventListener('click', function(e) {
    e.preventDefault()

    if (
        inputCloseUsername.value == currentAccount.username && +inputClosePin.value == currentAccount.pin
    ) {
        const index = accounts.findIndex(acc => acc.username === currentAccount.username);

        console.log(index);

        //DELETE UI
        accounts.splice(index, 1);

        //HIDE UI
        containerApp.style.opacity = 0;
    }
    inputCloseUsername.value = inputClosePin.value = '';
})

let sorted = false
btnSort.addEventListener('click', function(e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted
})



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
console.log(23 === 23.0)
console.log(0.1 + 0.2)

//conversion
console.log(Number('23'))
console.log(+'23');

//Parsing
console.log(Number.parseInt('30px'));
console.log(Number.parseFloat('2.5rem'))

//Check if value is not a number
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'))

// Checking if a value is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'))
console.log(Number.isFinite(+'20X'))
*/
/*
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, 23, '23', 2));
console.log(Math.max(5, 18, '23px', 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1)

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(10, 20))

// Rounding integers
console.log(Math.round(23.3));
console.log(Math.round(23.9));


console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));


console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

console.log(Math.trunc(23.3));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3))

//Rounding Decimals
console.log((2.7).toFixed(0)); // tofixed will always return a string
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2)); */

//Remainder Operator returns the remainder of a division
/*
console.log(5 % 2);
console.log(5 / 2);

console.log(8 % 3);
console.log(8 / 3);

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514))

labelBalance.addEventListener('click', function() {

    const div = document.querySelectorAll('.movements__row')
    console.log(Array.from(div))
    Array.from(div).forEach(function(row, i) {
        if (i % 2 === 0) row.style.backgroundColor = 'orangered';
        if (i % 3 === 0) row.style.backgroundColor = 'blue'
    })
});
//USE FOR NTH TERM
*/

/*
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);


console.log(BigInt(26348494039475023957930727034593));

//Operations */

//Create A Date
/*
const now = new Date();
console.log(now);

console.log(new Date('Jun 08 2022 19:25:05'));
console.log(new Date('December 24,2015'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 33, 15, 23, 5));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));
*/
//working with dates
/*
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());  */

/*
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcdayspassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcdayspassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1); */

/*
const nun = 3884765.82;

const options = {
    style: "currency",
    unit: "celsius",
    currency: 'EUR',
}

console.log('US:   ', new Intl.NumberFormat('en-US', options).format(nun))
console.log('Germany:  ', new Intl.NumberFormat('de-DE', options).format(nun))
console.log('Syria:  ', new Intl.NumberFormat('ar-SY', options).format(nun))
console.log(navigator.language, new Intl.NumberFormat(navigator.language).format(nun)) */

/*
// setTimeout (runback function runs only once)
const ingredients = ['Olives', 'Spinach']
    //You can pass arguments in the function
const Pizzatimer = setTimeout((ing1, ing2) => console.log(`Here is your Cake with ${ing1} and ${ing2}🥮`), 3000, ...ingredients);

console.log('waiting.... ');

if (ingredients.includes('Spinach')) clearTimeout(Pizzatimer) */

//setinterval //works concurrently
/*
setInterval(function() {
    const now = new Date();
    console.log(now)
}, 1000) */