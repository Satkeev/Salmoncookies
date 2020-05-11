var hoursOfOperation = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var allStores = [];
var parentElement = document.getElementById('table');


function StoreLocation(name, minCustPerHour, maxCustPerHour, avgCookiePerCust){
    this.name = name;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookiePerCust = avgCookiePerCust;
    this.openingHour = [];
    this.closingHour = [];
    this.totalCookiesSold = 0;
    this.cookiesEachHour = [];
    this.custPerHour = [];
    this.cookiesForTheDay = 0;
    allStores.push(this);
}
 
StoreLocation.prototype.st = function() {
        for (var i=0; i<hoursOfOperation.length; i++){
        var randomCust = Math.floor(Math.random()*(this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
        this.custPerHour.push(randomCust);
        var cookiesSold = Math.round(randomCust*this.avgCookiePerCust);
        this.cookiesEachHour.push(cookiesSold);
        this.totalCookiesSold += cookiesSold;
    }
    
};

StoreLocation.prototype.render = function (){
    
    //creating tr for each StoreLocation
    var parentElement = document.getElementById('table');
    var tableRow = document.createElement('tr');
    tableRow.setAttribute('id', `${this.name}-store-row`);
    parentElement.appendChild(tableRow);
  
    //create th for each StoreLocation
    parentElement = document.getElementById(`${this.name}-store-row`);
    var tableHead = document.createElement('th');
    // tableHead.setAttribute('scope', 'row');
    tableHead.innerText = `${this.name}`;
    parentElement.appendChild(tableHead);
     var sum = 0;
    // tableRow = document.createElement('tr');
  for(var i=0; i<hoursOfOperation.length; i++){
      // create the element
      var tableData = document.createElement('td');
      // give it content
      tableData.textContent = this.cookiesEachHour[i];
      sum+=this.cookiesEachHour[i];
      // append it
      parentElement.appendChild(tableData);
    }
    tableData = document.createElement('td');
    tableData.textContent = sum;
    parentElement.appendChild(tableData);
    
};
  
 function renderHoursRow() {
   var parentElement = document.getElementById('table');
   var tableRow = document.createElement('tr');
    tableRow.setAttribute('id', 'hours-row');
    parentElement.appendChild(tableRow);
    parentElement = document.getElementById('hours-row');
    //insert blank th element
    var blankTableHead = document.createElement('th');
    parentElement.appendChild(blankTableHead);
    
  for(var i=0; i<hoursOfOperation.length; i++){
        console.log('hoursOfOperation',hoursOfOperation[i]);
        // put 'color' on the table
        tableHeader = document.createElement('th');
        tableHeader.textContent = hoursOfOperation[i];
        parentElement.appendChild(tableHeader);
    }
    
    tableData = document.createElement('td');
   tableData.textContent = 'Total daily';
   tableRow.appendChild(tableData);  
  }

StoreLocation.prototype.cookiesForTheDay = function(){
  this.cookiesEachHour();
  // loop through cookies sold each hour array 
    // add them all together
  for(var i=0; i<this.cookiesEachHour.length; i++){
    this.totalCookiesForTheDay += this.cookiesEachHour[i];
    // this.totalCookiesForTheDay = this.totalCookiesForTheDay + this.cookiesSoldEachHour[i]
  }
}

 function renderFooterRow(){
  var totalOfAllTotals = 0;
  var tableRow = document.createElement('tr');
  var tableData = document.createElement('td');
  tableData.textContent = 'Hourly Total';
  tableRow.appendChild(tableData);  

  for(var i=0; i<hoursOfOperation.length; i++){
    var sum = 0;
    for(var j=0; j<allStores.length; j++){
    sum += allStores[j].cookiesEachHour[i];
    }

    totalOfAllTotals += sum;
    tableData = document.createElement('td');
    tableData.textContent = sum;
    tableRow.appendChild(tableData);

  }


  // append the total of all totals
  // create a td
  tableData = document.createElement('td');
  // fill it the total
  tableData.textContent = totalOfAllTotals;
  // append it to the table row
  tableRow.appendChild(tableData);  
  
  // append table row to parent
  parentElement.appendChild(tableRow);
}

// helper functions
function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max-min +1)) + min;
}

var seattle = new StoreLocation('Seattle', 23, 65, 6.3);
var tokyo = new StoreLocation('Tokyo', 3, 24, 1.2);
var dubai = new StoreLocation('Dubai', 11, 38, 3.7);
var paris = new StoreLocation('Paris',20, 38, 2.3);
var lima = new StoreLocation('Lima', 2, 16, 4.6);

renderHoursRow();

seattle.st();
seattle.render();

tokyo.st();
tokyo.render();

dubai.st();
dubai.render();

paris.st();
paris.render();

lima.st();
lima.render();

renderFooterRow();


        
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  