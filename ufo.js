let ufoData = [
    { date: "09/10/1949", time: "21:00", state: "Texas", country: "United States", duration: "60"},
    { date: "08/10/1955", time: "17:00", state: "England", country: "United Kingdom", duration: "0.20"},
    { date: "07/01/1956", time: "21:00", state: "Texas", country: "United States", duration: "60"},
    { date: "07/16/1960", time: "20:00", state: "Hawaii", country: "United States", duration: "15"},
    { date: "10/16/1961", time: "19:00", state: "Tennessee", country: "United States", duration: "5"},
    { date: "10/17/1965", time: "21:00", state: "Wales", country: "United Kingdom", duration: "3"},
    { date: "10/18/1965", time: "23:45", state: "Connecticut", country: "United States", duration: "20"},
    { date: "09/10/1966", time: "20:00", state: "Alabama", country: "United States", duration: "3"},
    { date: "08/10/1966", time: "21:00", state: "Florida", country: "United States", duration: "3"},
    { date: "04/10/1968", time: "13:00", state: "California", country: "United States", duration: "5"},
    { date: "08/10/1968", time: "19:00", state: "North Carolina", country: "United States", duration: "3"},
    { date: "10/18/1970", time: "16:00", state: "New York", country: "United States", duration: "30"},
    { date: "10/16/1970", time: "19:00", state: "Kentucky", country: "United States", duration: "3"},
    { date: "01/10/1971", time: "21:00", state: "North Carolina", country: "United States", duration: "0.30"},
    { date: "02/10/1972", time: "19:00", state: "Kentucky", country: "United States", duration: "20"},
    { date: "06/10/1972", time: "22:30", state: "Miami", country: "United States", duration: "2"},
    { date: "05/10/1973", time: "19:00", state: "Connecticut", country: "United States", duration: "30"},
    { date: "09/10/1974", time: "19:30", state: "Maine", country: "United States", duration: "45"},
    { date: "11/10/1974", time: "21:30", state: "Wales", country: "United Kingdom", duration: "20"},
    { date: "12/10/1974", time: "23:00", state: "Kansas", country: "United States", duration: "60"},
    { date: "12/10/1975", time: "17:00", state: "South Carolina", country: "United States", duration: "6"},
    { date: "12/10/1976", time: "20:30", state: "Washington", country: "United States", duration: "1"},
    { date: "11/10/1976", time: "22:00", state: "England", country: "United Kingdom", duration: "0.03"},
    { date: "10/10/1977", time: "12:00", state: "Texas", country: "United States", duration: "0.30"},
    { date: "02/16/1977", time: "22:00", state: "Kentucky", country: "United States", duration: "0.30"},
    { date: "10/16/1978", time: "02:00", state: "New York", country: "United States", duration: "5"},
    { date: "05/03/1979", time: "01:00", state: "New York", country: "United States", duration: "15"},
    { date: "02/14/1979", time: "22:00", state: "California", country: "United States", duration: "3"},
    { date: "10/14/1984", time: "12:00", state: "Miami", country: "United States", duration: "2"},
    { date: "04/14/1986", time: "20:00", state: "New York", country: "United States", duration: "3"},
    { date: "10/10/1988", time: "18:00", state: "Wisconsin", country: "United States", duration: "10"},
    { date: "10/19/1988", time: "22:45", state: "Washington", country: "United States", duration: "0.02"},
    { date: "10/09/1993", time: "22:00", state: "Illinois", country: "United States", duration: "0.08"},
    { date: "11/10/1995", time: "19:45", state: "Wisconsin", country: "United States", duration: "2"},
    { date: "12/10/1996", time: "22:00", state: "South Carolina", country: "United States", duration: "5"},
    { date: "10/10/1997", time: "16:00", state: "Indiana", country: "United States", duration: "240"},
    { date: "10/15/1997", time: "17:00", state: "Arizona", country: "United States", duration: "0.30"},
    { date: "10/14/1998", time: "03:30", state: "Arizona", country: "United States", duration: "0.15"},
    { date: "08/30/1999", time: "17:30", state: "Nevada", country: "United States", duration: "45"},
    { date: "10/30/2006", time: "20:30", state: "New York", country: "United States", duration: "1"},
    { date: "11/01/1998", time: "20:50", state: "North Carolina", country: "United States", duration: "0.02"},
    { date: "12/2/2000", time: "23:30", state: "Tennessee", country: "United States", duration: "120"},
    { date: "03/21/2003", time: "23:50", state: "Tennessee", country: "United States", duration: "0.15"},
    { date: "10/19/1999", time: "19:00", state: "California", country: "United States", duration: "60"},
    { date: "12/02/2000", time: "03:00", state: "Michigan", country: "United States", duration: "3"},
    { date: "12/02/2000", time: "20:20", state: "Michigan", country: "United States", duration: "0.15"},
    { date: "12/02/2000", time: "20:30", state: "Michigan", country: "United States", duration: "30"},
    { date: "07/26/2002", time: "23:00", state: "Nevada", country: "United States", duration: "0.30"},
    { date: "10/15/2002", time: "01:00", state: "Wisconsin", country: "United States", duration: "0.01"},
    { date: "10/20/2005", time: "14:45", state: "California", country: "United States", duration: "0.10"},
    { date: "10/30/2006", time: "23:00", state: "Ohio", country: "United States", duration: "5"},
    { date: "11/28/2007", time: "18:33", state: "Pittsburg", country: "United States", duration: "1"},
    { date: "11/28/2007", time: "01:30", state: "Florida", country: "United States", duration: "0.30"},
    { date: "11/28/2007", time: "22:00", state: "Texas", country: "United States", duration: "0.04"},
    { date: "1/24/2009", time: "01:15", state: "Michigan", country: "United States", duration: "5"},
    { date: "12/4/2009", time: "17:50", state: "Pittsburg", country: "United States", duration: "90"},
    { date: "12/4/2009", time: "20:00", state: "Ohio", country: "United States", duration: "15"},
    { date: "3/19/2009", time: "21:50", state: "Miami", country: "United States", duration: "5"},
    { date: "12/4/2010", time: "02:10", state: "Texas", country: "United States", duration: "3"},
    { date: "2/14/2010", time: "19:40", state: "Florida", country: "United States", duration: "6"},
    { date: "1/31/2011", time: "17:30", state: "California", country: "United States", duration: "10"},
    { date: "5/11/2005", time: "20:05", state: "Florida", country: "United States", duration: "30"},
    { date: "5/15/2006", time: "22:30", state: "Washington", country: "United States", duration: "0.10"},
    { date: "4/27/2007", time: "15:00", state: "Hawaii", country: "United States", duration: "0.45"},
    { date: "3/23/2011", time: "21:30", state: "Indiana", country: "United States", duration: "20"},
    { date: "6/12/2011", time: "21:30", state: "Florida", country: "United States", duration: "1"},
    { date: "5/13/2012", time: "10:27", state: "California", country: "United States", duration: "7"},
    { date: "5/13/2012", time: "20:20", state: "New York", country: "United States", duration: "3"},
    { date: "3/21/2014", time: "04:45", state: "Arizona", country: "United States", duration: "1"},
    { date: "3/19/2014", time: "22:20", state: "Ohio", country: "United States", duration: "0.05"},
    { date: "3/19/2014", time: "22:26", state: "Ohio", country: "United States", duration: "5"},
    { date: "4/8/2002", time: "17:40", state: "Ohio", country: "United States", duration: "0.30"},
    { date: "4/8/2002", time: "19:35", state: "Arizona", country: "United States", duration: "360"},
    { date: "3/20/2002", time: "20:50", state: "Arizona", country: "United States", duration: "1"},
    { date: "4/8/2002", time: "23:30", state: "Arizona", country: "United States", duration: "1"},
    { date: "12/3/2004", time: "06:45", state: "Maine", country: "United States", duration: "3"},
    { date: "3/28/2004", time: "18:45", state: "Arizona", country: "United States", duration: "5"},
    { date: "3/23/2004", time: "20:00", state: "California", country: "United States", duration: "120"},
    { date: "2/24/2007", time: "03:30", state: "Arizona", country: "United States", duration: "1"},
    { date: "5/11/2005", time: "22:00", state: "Texas", country: "United States", duration: "1"},
    { date: "5/15/2006", time: "21:00", state: "Texas", country: "United States", duration: "2"},
    { date: "4/27/2007", time: "20:15", state: "Pittsburg", country: "United States", duration: "0.30"},
    { date: "3/20/2007", time: "21:00", state: "California", country: "United States", duration: "5"},
    { date: "4/14/2009", time: "03:00", state: "Tennessee", country: "United States", duration: "30"},
    { date: "4/14/2009", time: "21:00", state: "Washington", country: "United States", duration: "120"},
    { date: "4/14/2009", time: "21:30", state: "Arizona", country: "United States", duration: "80"},
    { date: "05/24/2005", time: "18:30", state: "Alaska", country: "United States", duration: ".03" },
    { date: "03/19/2009", time: "19:00", state: "California", country: "United States", duration: "0.10" },
    { date: "07/03/2006", time: "14:30", state: "California", country: "United States", duration: "10" },
    { date: "01/10/2004", time: "19:00", state: "California", country: "United States", duration: "0.01" },
    { date: "10/10/2011", time: "21:00", state: "Arizona", country: "United States", duration: "120" },
    { date: "11/11/2013", time: "21:30", state: "Arizona", country: "United States", duration: "1" },
    { date: "03/19/2003", time: "19:01", state: "Arizona", country: "United States", duration: "1" },
    { date: "09/17/2009", time: "19:00", state: "Oregon", country: "United States", duration: "1" },
    { date: "08/05/2001", time: "18:50", state: "Oregon", country: "United States", duration: "5" },
    { date: "08/12/2008", time: "19:50", state: "Colorado", country: "United States", duration: "1" },
    { date: "04/16/2005", time: "01:00", state: "Colorado", country: "United States", duration: "2" },
    { date: "10/08/2007", time: "19:00", state: "Colorado", country: "United States", duration: "3" },
    { date: "07/19/2007", time: "01:00", state: "Colorado", country: "United States", duration: "4" },
    { date: "12/12/2013", time: "19:20", state: "Georgia", country: "United States", duration: "4" },
    { date: "12/12/2012", time: "19:00", state: "Georgia", country: "United States", duration: "5" },
    { date: "10/10/2012", time: "21:00", state: "Missouri", country: "United States", duration: "4" },
    { date: "11/11/2011", time: "20:00", state: "Missouri", country: "United States", duration: "120" },
    { date: "12/12/2012", time: "12:00", state: "New Jersey", country: "United States", duration: "10" },
    { date: "10/20/2010", time: "13:00", state: "New Jersey", country: "United States", duration: "12" },
    { date: "10/10/2003", time: "01:00", state: "New York", country: "United States", duration: "11" },
    { date: "10/10/2004", time: "01:30", state: "Orlando", country: "United States", duration: "11" },
    { date: "10/10/2005", time: "02:00", state: "Orlando", country: "United States", duration: "11" },
    { date: "10/10/2015", time: "02:00", state: "Orlando", country: "United States", duration: "11" }
]

     const rowBuilder = (data) => {
        const row = `
            <tr>
                <td>${data.breed}</td>
                <td>${data.type}</td>
                <td>${data.size}</td>
                <td>${data.intelligence}</td>
                <td>${data.lifetimeCost}</td>
                <td>${data.longevityYears}</td>
            </tr>
            `
            return row
    }
             // TABLE 
let sortDirection = ""
const handleTableBuild = () => {
    // Get tbody element
    let tbody = document.getElementById("ufo-table").getElementsByTagName("tbody")[0]
    // Loop over our data
        for (let i = 0, len = ufoData.length; i < len; i++) {
        // Build HTML for the <tr> tag
           const row = rowBuilder(data[i])
        // Insert HTML into the tbody
            tbody.insertAdjacentHTML('beforeend', row)
    }
}
handleTableBuild()
            // DATE DATA
const handleDateClick = () => {
    let tbody = document.getElementById("ufo-table").getElementsByTagName("tbody")[0]

    let sortedData = []

    if (sortDirection === "" || sortDirection === "descending") {
        sortDirection = "ascending"
    sortedData = ufoData.sort((a, b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return dateA > dateB ? 1 : dateA < dateB ? -1 : 0
    })
    }
    else if (sortDirection === "ascending") {
        sortDirection = "descending"
        sortedData = ufoData.sort((a, b) => {
            const dateA = new Date(a.date)
            const dateB = new Date(b.date)
            return dateA > dateB ? -1 : dateA < dateB ? 1 : 0
        })
    }
        tbody.innerHTML = ''
        for (let i = 0, len = sortedData.length; i < len; i++) {
           const row = rowBuilder(data[i])
            tbody.insertAdjacentHTML('beforeend', row)
        }
}
              // TIME DATA
const handleTimeClick = () => {
    let tbody = document.getElementById("ufo-table").getElementsByTagName("tbody")[0]
    let sortedData = []
    if (sortDirection === "" || sortDirection === "descending") {
        sortDirection = "ascending"
        sortedData = ufoData.sort((a, b) => a.time > b.time ? 1 : a.time < b.time ? -1 : 0)
    }  
    else if (sortDirection === "ascending") {
        sortDirection = "descending"
        sortedData = ufoData.sort((a, b) => a.time > b.time ? -1 : a.time < b.time ? 1 : 0)
    }
     tbody.innerHTML = ''
     for (let i = 0, len = sortedData.length; i < len; i++) {
        const row = rowBuilder(data[i])
        tbody.insertAdjacentHTML('beforeend', row)
    }
}
             // STATE DATA
const handleStateClick = () => {
    let tbody = document.getElementById("ufo-table").getElementsByTagName("tbody")[0]
    let sortedData = []
    if (sortDirection === "" || sortDirection === "descending") {
        sortDirection = "ascending"
        sortedData = ufoData.sort((a, b) => a.state > b.state ? 1 : a.state < b.state ? -1 : 0)
    }
    else if (sortDirection === "ascending") {
        sortDirection = "descending"
        sortedData = ufoData.sort((a, b) => a.state > b.state ? -1 : a.state < b.state ? 1 : 0)
    }
    tbody.innerHTML = ''
     for (let i = 0, len = sortedData.length; i < len; i++) {
       const row = rowBuilder(data[i])
        tbody.insertAdjacentHTML('beforeend', row)
    }
}
            //COUennesseeTRY DATA
const handleCountryClick = () => {
    let tbody = document.getElementById("ufo-table").getElementsByTagName("tbody")[0]
    let sortedData = []
    if (sortDirection === "" || sortDirection === "descending") {
        sortDirection = "ascending"
        sortedData = ufoData.sort((a, b) => a.country > b.country ? 1 : a.country < b.country ? -1 : 0)
    }
    else if (sortDirection === "ascending") {
        sortDirection = "descending"
        sortedData = ufoData.sort((a, b) => a.country > b.country ? -1 : a.country < b.country ? 1 : 0)
    }
    tbody.innerHTML = ''
     for (let i = 0, len = sortedData.length; i < len; i++) {
        const row = rowBuilder(data[i])
        tbody.insertAdjacentHTML('beforeend', row)
    }
}
             // DURATIOennessee DATA
const handleDurationClick = () => {
    let tbody = document.getElementById("ufo-table").getElementsByTagName("tbody")[0]

    let sortedData = []

    if (sortDirection === "" || sortDirection === "descending") {
        sortDirection = "ascending"
    sortedData = ufoData.sort((a, b) => {
        const floata = parseFloat(a.duration)
        const floatb = parseFloat(b.duration)
        return floata > floatb ? 1 : floata < floatb ? -1 : 0
    })
    }
    else if (sortDirection === "ascending") {
        sortDirection = "descending"
        sortedData = ufoData.sort((a, b) => {
            const floata = parseFloat(a.duration)
            const floatb = parseFloat(b.duration)
            return floata > floatb ? -1 : floata < floatb ? 1 : 0
        })
    }
        tbody.innerHTML = ''
        for (let i = 0, len = sortedData.length; i < len; i++) {
            const row = rowBuilder(data[i])
            tbody.insertAdjacentHTML('beforeend', row)
        }
}
          // SEARCHBAR
const searchFunction = () => {
    let input = document.getElementById("searchBar")
    let filter = input.value.toUpperCase()
    let table = document.getElementById("ufo-table")
    let tr = table.getElementsByTagName("tr")

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0]
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = ""
        } else {
          tr[i].style.display = "none"
        }
      }       
    }
  }
         // STICKY HEADER Oennessee South CarolinaROLL
  window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
