let search = document.querySelector("#search")
let myInput = document.querySelector("#myInput")
let newInputs = document.querySelector("#newInputs")
let addButton = document.querySelector("#addButton")
let h2 = document.querySelector("h2")
let arr = []

addButton.addEventListener("click", () => {
    let trimInput = myInput.value.trim()
    if (trimInput == '') {
        alert('Boslugu doldur')
    } else {
        arr.push({ deyer: trimInput})
        if (arr.length > 0) {
            h2.style.display = 'none'
            show(arr)
        }
        myInput.value = ""
    }
    addEdit()
})

let inputDiv = document.querySelectorAll(".inputDiv")
function addEdit() {
    let editButtons = document.querySelectorAll(".edit")
    let newInput = document.querySelectorAll(".newInput")
    editButtons.forEach((item, index) => {
        item.addEventListener("click", () => {
            arr[index].deyer = newInput[index].value
            console.log(arr)
        })
    })
}

function show(array) {
    newInputs.innerHTML = " "
    array.forEach((item, index) => {
        newInputs.innerHTML +=
            `
        <div class="inputDiv">
    <input type="text" class="newInput" value="${item.deyer}">
    <button class="edit">edit</button>
    <button class="delete"  onclick="deleteFunk(${index})">delete</button>
     </div>
    `
    })
}


function deleteFunk(i) {
    let filterArr = arr.filter((item, index)=> index != i)
    console.log(filterArr);
    arr = filterArr
    show(arr)
    console.log(filterArr.length);
    if(arr.length <= 0){
         h2.style.display = 'block'
    }
}
search.addEventListener("keyup", () => {
    let mySearch = search.value.toLowerCase()

    let searchArray = arr.filter(item => {
        return item.deyer.toLowerCase().includes(mySearch)
    })
    show(searchArray)
})


