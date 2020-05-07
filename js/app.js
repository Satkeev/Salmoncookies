var hoursOfOperation = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

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
}
 
StoreLocation.prototype.st = function() {
    // var maxCustPerHour = location.maxCustPerHour;
    // var minCustPerHour = location.minCustPerHour;
    // var avgCookiePerCust = location.avgCookiePerCust;
    // var custPerHour = [];
    // var total = 0;
    // document.createElement('Seattle');
    // document.write("</br>");
    // var hoursOfOperation = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
    for (var i=0; i<hoursOfOperation.length; i++){
        var randomCust = Math.floor(Math.random()*(this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
        this.custPerHour.push(randomCust);
        var cookiesSold = Math.round(randomCust*this.avgCookiePerCust);
        this.cookiesEachHour.push(cookiesSold);
        // document.write(hoursOfOperation[i] + ' : ' + cookiesSold + ' cookies');
        // document.write("<br/>");
        this.totalCookiesSold += cookiesSold;
    }
    // document.write('Total: ' + total + ' cookies');
};

// append the tr to the parent element
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
    
    // tableRow = document.createElement('tr');
    for(var i=0; i<hoursOfOperation.length; i++){
      // create the element
      var tableData = document.createElement('td');
      // give it content
      tableData.textContent = this.cookiesEachHour[i];
      // append it
      parentElement.appendChild(tableData);
    }
};

    //    function st(location){
        
    //     };
        
    //     st(seattle);
     // goal: dynamical render a table to the DOM

//select the parent element

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



// new StoreLocation('Seattle')
// // // append table row to the parent
// parentElement.appendChild(tableRow); st(seattle);
      
        
        
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  