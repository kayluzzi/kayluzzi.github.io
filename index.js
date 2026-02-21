let data = [
    { breed: "Border Terrier", type: "Terrier", size: "Small", intelligence: "70%", lifetimeCost: "$22,638", longevityYears: "14" },
    { breed: "Cairn Terrier", type: "Terrier", size: "Small", intelligence: "61%", lifetimeCost: "$21,992", longevityYears: "13.84" },
    { breed: "Siberian Husky", type: "Working", size: "Large", intelligence: "45%", lifetimeCost: "$22,049", longevityYears: "12.58"},
    { breed: "Welsh Springer Spaniel", type: "Sporting", size: "Medium", intelligence: "69%", lifetimeCost: "$20,224", longevityYears: "12.49"},
    { breed: "English Cocker Spaniel", type: "Sporting", size: "Medium", intelligence: "82%", lifetimeCost: "$18,993", longevityYears: "11.66"},
    { breed: "Cocker Spaniel", type: "Sporting", size: "Small", intelligence: "79%", lifetimeCost: "$24,330", longevityYears: "12.5"},
    { breed: "Lhasa Apso", type: "Non-Sporting", size: "Small", intelligence: "15%", lifetimeCost: "$22,031", longevityYears: "13.92"},
    { breed: "Shetland Sheepdog", type: "Herding", size: "Small", intelligence: "94%", lifetimeCost: "$21,006", longevityYears: "12.53"},
    { breed: "West Highland White Terrier", type: "Terrier", size: "Small", intelligence: "41%", lifetimeCost: "$20,490", longevityYears: "12.8"},
    { breed: "Brittany", type: "Sporting", size: "Medium", intelligence: "80%", lifetimeCost: "$22,589", longevityYears: "12.92"},
    { breed: "German Shorthaired Pointer", type: "Sporting", size: "Large", intelligence: "84%", lifetimeCost: "$25,842", longevityYears: "11.46"},
    { breed: "Tibetan Spaniel", type: "Non-Sporting", size: "Small", intelligence: "43%", lifetimeCost: "$25,549", longevityYears: "14.42"},
    { breed: "Labrador Retriever", type: "Sporting", size: "Medium", intelligence: "93%", lifetimeCost: "$21,299", longevityYears: "12.04"},
    { breed: "Bichon Frise", type: "Non-Sporting", size: "Small", intelligence: "45%", lifetimeCost: "$19,735", longevityYears: "12.21"},
    { breed: "Irish Setter", type: "Sporting", size: "Large", intelligence: "61%", lifetimeCost: "$20,323", longevityYears: "11.63"},
    { breed: "Samoyed", type: "Working", size: "Medium", intelligence: "68%", lifetimeCost: "$25,352", longevityYears: "12.44"},
    { breed: "Shih Tzu", type: "Toy", size: "Small", intelligence: "13%", lifetimeCost: "$21,152", longevityYears: "13.2"},
    { breed: "Golden Retriever", type: "Sporting", size: "Medium", intelligence: "97%", lifetimeCost: "$21,447", longevityYears: "12.04"},
    { breed: "Chesapeake Bay Retriever", type: "Sporting", size: "Large", intelligence: "75%", lifetimeCost: "$16,697", longevityYears: "9.48"},
    { breed: "Papillon", type: "Toy", size: "Small", intelligence: "92%", lifetimeCost: "$21,001", longevityYears: "13"},
    { breed: "Gordon Setter", type: "Sporting", size: "Large", intelligence: "64%", lifetimeCost: "$19,605", longevityYears: "11.1"},
    { breed: "English Setter", type: "Sporting", size: "Large", intelligence: "56%", lifetimeCost: "$20,312", longevityYears: "11.57"},
    { breed: "Pug", type: "Toy", size: "Medium", intelligence: "29%", lifetimeCost: "$18,527", longevityYears: "11"},
    { breed: "Affenpinscher", type: "Toy", size: "Small", intelligence: "56%", lifetimeCost: "$18,333", longevityYears: "11.42"},
    { breed: "Miniature Schnauzer", type: "Terrier", size: "Small", intelligence: "87%", lifetimeCost: "$20,087", longevityYears: "11.81"},
    { breed: "Beagle", type: "Hound", size: "Small", intelligence: "9%", lifetimeCost: "$19,468", longevityYears: "12.3"},
    { breed: "Border Collie", type: "Herding", size: "Medium", intelligence: "100%", lifetimeCost: "$20,143", longevityYears: "12.52"},
    { breed: "Australian Terrier", type: "Terrier", size: "Small", intelligence: "64%", lifetimeCost: "$17,892", longevityYears: "11.05"},
    { breed: "Whippet", type: "Hound", size: "Medium", intelligence: "34%", lifetimeCost: "$20,976", longevityYears: "12.87"},
    { breed: "Boston Terrier", type: "Non-Sporting", size: "Medium", intelligence: "31%", lifetimeCost: "$17,741", longevityYears: "10.92"},
    { breed: "Bedlington Terrier", type: "Terrier", size: "Small", intelligence: "54%", lifetimeCost: "$22,107", longevityYears: "13.51"},
    { breed: "Cavalier King Charles Spaniel", type: "Toy", size: "Small", intelligence: "48%", lifetimeCost: "$18,639", longevityYears: "11.29"},
    { breed: "Dalmatian", type: "Non-Sporting", size: "Medium", intelligence: "55%", lifetimeCost: "$19,886", longevityYears: "11.27"},
    { breed: "Basset Hound", type: "Hound", size: "Small", intelligence: "11%", lifetimeCost: "$18,328", longevityYears: "11.43"},
    { breed: "Poodle", type: "Non-Sporting", size: "Medium", intelligence: "99%", lifetimeCost: "$21,237", longevityYears: "11.95"},
    { breed: "Staffordshire Bull Terrier", type: "Terrier", size: "Medium", intelligence: "37%", lifetimeCost: "$21,650", longevityYears: "12.05"},
    { breed: "Pembroke Welsh Corgi", type: "Herding", size: "Small", intelligence: "89%", lifetimeCost: "$23,978", longevityYears: "12.25"},
    { breed: "Clumber Spaniel", type: "Sporting", size: "Medium", intelligence: "56%", lifetimeCost: "$18,084", longevityYears: "10"},
    { breed: "Pomeranian", type: "Toy", size: "Small", intelligence: "77%", lifetimeCost: "$15,792", longevityYears: "9.67"},
    { breed: "Australian Shepherd", type: "Herding", size: "Medium", intelligence: "52%", lifetimeCost: "$21,458", longevityYears: "12.28"},
    { breed: "Greyhound", type: "Hound", size: "Large", intelligence: "43%", lifetimeCost: "$15,819", longevityYears: "9.36"},
    { breed: "Australian Cattle Dog", type: "Herding", size: "Medium", intelligence: "90%", lifetimeCost: "$20,395", longevityYears: "11.67"},
    { breed: "Chihuahua", type: "Toy", size: "Small", intelligence: "16%", lifetimeCost: "$26,250", longevityYears: "16.5"},
    { breed: "Doberman Pinscher", type: "Working", size: "Large", intelligence: "95%", lifetimeCost: "$18,397", longevityYears: "10.33"},
    { breed: "English Toy Spaniel", type: "Toy", size: "Small", intelligence: "45%", lifetimeCost: "$17,521", longevityYears: "10.1"},
    { breed: "French Bulldog", type: "Non-Sporting", size: "Medium", intelligence: "28%", lifetimeCost: "$17,266", longevityYears: "9"},
    { breed: "Boxer", type: "Working", size: "Medium", intelligence: "39%", lifetimeCost: "$15,746", longevityYears: "8.81"},
    { breed: "Rottweiler", type: "Working", size: "Large", intelligence: "91%", lifetimeCost: "$18,886", longevityYears: "9.11"},
    { breed: "Yorkshire Terrier", type: "Toy", size: "Small", intelligence: "75%", lifetimeCost: "$20,701", longevityYears: "12.6"},
    { breed: "Bullmastiff", type: "Working", size: "Large", intelligence: "14%", lifetimeCost: "$13,936", longevityYears: "7.57"},
    { breed: "German Shepherd", type: "Herding", size: "Large", intelligence: "98%", lifetimeCost: "$17,416", longevityYears: "9.73"},
    { breed: "Great Dane", type: "Working", size: "Large", intelligence: "39%", lifetimeCost: "$14,662", longevityYears: "6.96"},
    { breed: "Chow Chow", type: "Non-Sporting", size: "Medium", intelligence: "5%", lifetimeCost: "$15,898", longevityYears: "9.01"}
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
    // Globally set Sort direction
    let sortDirection = ""
    const handleTableBuild = () => {
        // Get tbody element
        let tbody = document.getElementById("dog-table").getElementsByTagName("tbody")[0]
        // Loop over our data
            for (let i = 0, len = data.length; i < len; i++) {
            // Build HTML for the <tr> tag
                const row = rowBuilder(data[i])
            // Insert HTML into the tbody
                tbody.insertAdjacentHTML('beforeend', row)
        }
    }
    handleTableBuild()
    
    const handleBreedClick = () => {
        // Get tbody element
        let tbody = document.getElementById("dog-table").getElementsByTagName("tbody")[0]
        // Initialize sorted data
        let sortedData = []
       
        // Determine sort diretion
        if (sortDirection === "" || sortDirection === "descending") {
            // Set sort direction
            sortDirection = "ascending"
             // Sort the data by house ascending
       sortedData = data.sort((a, b) => a.breed > b.breed ? 1 : a.breed < b.breed ? -1 : 0 )
        }
        //  return a.breed > b.breed ? 1 : -1
       
    else if (sortDirection === "ascending") {
        // Set sort direction
        sortDirection = "descending"
        // Sort the string data by house descending
        sortedData = data.sort((a, b) => a.breed > b.breed ? -1 : a.breed < b.breed ? 1 : 0 )
        }
  
        // Clear tbody innerHTML
        tbody.innerHTML = ''
        // Re-populate with sorted data
        for (let i = 0, len = sortedData.length; i < len; i++) {
            // Build HTML for the <tr> tag
               const row = rowBuilder(data[i])
            // Insert HTML into the tbody
                tbody.insertAdjacentHTML('beforeend', row)
        }
    }

    const handleTypeClick = () => {
        let tbody = document.getElementById("dog-table").getElementsByTagName("tbody")[0]
        let sortedData = []
        if (sortDirection === "" || sortDirection === "descending") {
            sortDirection = "ascending"
            sortedData = data.sort((a, b) => a.type > b.type ? 1 : a.type < b.type ? -1 : 0 )
        }
        else if (sortDirection === "ascending") {
            sortDirection = "descending"
            sortedData = data.sort((a, b) => a.type > b.type ? -1 : a.type < b.type ? 1 : 0 )
        }
        tbody.innerHTML = ''
        for (let i = 0, len = sortedData.length; i < len; i++) {
            const row = rowBuilder(data[i])
            tbody.insertAdjacentHTML('beforeend', row)
        }
    }

    const handleSizeClick = () => {
        let tbody = document.getElementById("dog-table").getElementsByTagName("tbody")[0]
        let sortedData = []
        if (sortDirection === "" || sortDirection === "descending") {
            sortDirection = "ascending"
            sortedData = data.sort((a, b) => a.size > b.size ? 1 : a.size < b.size ? -1 : 0)
        }
        else if (sortDirection === "ascending") {
            sortDirection = "descending"
            sortedData = data.sort((a, b) => a.size > b.size ? -1 : a.size < b.size ? 1 : 0)
        }
        tbody.innerHTML = ''
        for (let i = 0, len = sortedData.length; i < len; i++) {
           const row = rowBuilder(data[i])
            tbody.insertAdjacentHTML('beforeend', row)
        }
    }

    const handleIntellClick = () => {
        let tbody = document.getElementById("dog-table").getElementsByTagName("tbody")[0]
        let sortedData = []
        if (sortDirection === "" || sortDirection === "descending") {
            sortDirection = "ascending"
            sortedData = data.sort((a, b) => {
                const floata = parseFloat(a.intelligence) 
                const floatb = parseFloat(b.intelligence) 
                return floata > floatb ? 1 : floata < floatb ? -1 : 0
            })
        }
        else if (sortDirection === "ascending") {
            sortDirection = "descending"
            sortedData = data.sort((a, b) => {
                const floata = parseFloat(a.intelligence)
                const floatb = parseFloat(b.intelligence)
                return floata > floatb ? -1 : floata < floatb ? 1 : 0
        })
    }
        tbody.innerHTML = ''
        for (let i = 0, len = sortedData.length; i < len; i++) {
            const row = rowBuilder(data[i])
            tbody.insertAdjacentHTML('beforeend', row)
        }
    }

    const handleLifeClick = () => {
        let tbody = document.getElementById("dog-table").getElementsByTagName("tbody")[0]
        let sortedData = []
        if (sortDirection === "" || sortDirection === "descending") {
            sortDirection = "ascending"
            sortedData = data.sort((a, b) => a.lifetimeCost > b.lifetimeCost ? 1 : a.lifetimeCost < b.lifetimeCost ? -1 : 0)
        }   
        else if (sortDirection === "ascending") {
        sortDirection = "descending"
        sortedData = data.sort((a, b) => a.lifetimeCost > b.lifetimeCost ? -1 : a.lifetimeCost < b.lifetimeCost ? 1 : 0)
        }
        tbody.innerHTML = ''
        for (let i = 0, len = sortedData.length; i < len; i++) {
           const row = rowBuilder(data[i])
            tbody.insertAdjacentHTML('beforeend', row)
        }
}

const handleLongClick = () => {
    let tbody = document.getElementById("dog-table").getElementsByTagName("tbody")[0]
    let sortedData = []
    if (sortDirection === "" || sortDirection === "descending") {
        sortDirection = "ascending"
        sortedData = data.sort((a, b) => {
            
            const floata = parseFloat(a.longevityYears) 
            const floatb = parseFloat(b.longevityYears) 
            return floata > floatb ? 1 : floata < floatb ? -1 : 0
        })
        }   
    else if (sortDirection === "ascending") {
    sortDirection = "descending"
    sortedData = data.sort((a, b) => {
        const floata = parseFloat(a.longevityYears) 
        const floatb = parseFloat(b.longevityYears) 
        return floata > floatb ? -1 : floata < floatb ? 1 : 0
    })
    }
    tbody.innerHTML = ''
    for (let i = 0, len = sortedData.length; i < len; i++) {
        const row = rowBuilder(data[i])
        tbody.insertAdjacentHTML('beforeend', row)
    }
}

const searchFunction = () => {
    let input = document.getElementById("searchBar")
    let filter = input.value.toUpperCase()
    let table = document.getElementById("dog-table")
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
