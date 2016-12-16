// Alias for getting elements
const get = id => document.getElementById(id);

// Get country where it's midnight
const getCountry = () => {
  /*
    Sup? - Getting curious?
    There's no rocket science nor magic here.
    Sorry to disappoint you.
    Here, have a cookie!
         ___
        /. .\
        | . |
        \__ /
  */
  const h = new Date().getUTCHours();
  const offset = h < 12 ? -h : 24 - h;
  const countries = {
    '-11': 'Niue',
    '-10': 'Cook Islands',
    '-9': 'Alaska',
    '-8': 'Pitcairn Islands',
    '-7': 'Mexico',
    '-6': 'Costa Rica',
    '-5': 'Jamaica',
    '-4': 'U.S. Virgin Islands',
    '-3': 'Argentina',
    '-2': 'South Sandwich Islands',
    '-1': 'Cape Verde',
    0: 'Saint Helena',
    1: 'Tunisia',
    2: 'Egypt',
    3: 'Kuwait',
    4: 'Georgia',
    5: 'Maldives',
    6: 'Kyrgyzstan',
    7: 'Christmas Island',
    8: 'China',
    9: 'Japan',
    10: 'Papua New Guinea',
    11: 'New Caledonia',
    12: 'Marshall Islands',
  };

  return countries[offset];
};

// Updates country shown by clock
const update = () => {
  get('country').textContent = getCountry();
};

// Shows info dialog for 5 seconds
const info = () => {
  get('clock').className = 'dialog';
  setTimeout(() => { get('clock').className = ''; }, 4000);
};

setInterval(update, 30000);
update();
