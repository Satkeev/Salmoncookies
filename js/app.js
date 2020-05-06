var hoursOfOperation = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
function StoreLocation(name, minCustPerHour, maxCustPerHour, avgCookiePerCust){
    this.storeLocation = name;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookiePerCust = avgCookiePerCust;
    this.openingHour = [];
    this.closingHour = [];
    this.totalCookiesSold = 0;
    this.cookiesEachHour = [];
}
    
  
  
  
     var seattle = new StoreLocation('Seattle', 23, 65, 6.3, 6, 20, [], 0);
//   var tokyo = new StoreLocation('Tokyo', 3, 24, 1.2, 6, 20, [], 0);
//   var dubai = new StoreLocation('Dubai', 11, 38, 3.7, 6, 20, [], 0);
//   var paris = new StoreLocation('Paris',20, 38, 2.3, 6, 20, [], 0);
//   var lima = new StoreLocation('Lima', 2, 16, 4.6, 6, 20, [], 0);
  
       function st(location){
        var maxCustPerHour = location.maxCustPerHour;
        var minCustPerHour = location.minCustPerHour;
        var avgCookiePerCust = location.avgCookiePerCust;
        var custPerHour = [];
        var total = 0;
        document.createElement('Seattle');
        document.write("</br>");
        var hoursOfOperation = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
        for (var i=0; i<hoursOfOperation.length; i++){
        var randomCust = Math.floor(Math.random()*(maxCustPerHour - minCustPerHour + 1) + minCustPerHour);
        custPerHour.push(randomCust);
        var cookiesSold = Math.round(randomCust*avgCookiePerCust);
        document.write(hoursOfOperation[i] + ' : ' + cookiesSold + ' cookies');
        document.write("<br/>");
        total += cookiesSold;
        }
        document.write('Total: ' + total + ' cookies');
        console.log(cookiesSold);
        }
        ;
        
        st(seattle);
     // goal: dynamical render a table to the DOM

//select the parent element
var parentElement = document.getElementById('table');

// Make the first row

// create a tr
var tableRow = document.createElement('tr');
for(var i=0; i<hoursOfOperation.length; i++){
console.log('hoursOfOperation',hoursOfOperation[i]);
  // put 'color' on the table
  tableHeader = document.createElement('th');
  tableHeader.textContent = hoursOfOperation[i];
  tableRow.appendChild(tableHeader);
  
}
// append the tr to the parent element
StoreLocation.prototype.render = function (){
    parentElement.appendChild(tableRow);

    // Make the Second Row
    
    // var tableRow = document.createElement('tr');
    
    // // create a tr
    
    tableRow = document.createElement('tr');
    
    for(var i=0; i<hoursOfOperation.length; i++){
      // create the element
      var tableData = document.createElement('td');
      // give it content
      tableData.textContent = this.cookiesEachHour[i];
      // append it
      tableRow.appendChild(tableData);
    }
}

new StoreLocation('Seattle')
// // append table row to the parent
parentElement.appendChild(tableRow); st(seattle);
 
      
        
        
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  