const inputBtn = document.getElementById("input-btn")

let myLeads = []
const inputEl = document.getElementById("input-el")

const ulEl = document.getElementById("ul-el")

const leadsFromLocalStore = JSON.parse(localStorage.getItem("leads"))

let deleteBtn = document.getElementById("delete-btn")

const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStore){
    myLeads = leadsFromLocalStore
    renderLeads(myLeads)
}

console.log(leadsFromLocalStore)

function renderLeads(leads){
    let listItems = ""

    for (index = 0; index < leads.length; index++){
        listItems += `<li>
                        <a href="${leads[index]}" target="_blank">${leads[index]}</a>
                    </li>`
    }

    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("leads", JSON.stringify(myLeads))

    renderLeads(myLeads)


})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})


tabBtn.addEventListener("click", function(){

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        let activeTab = tabs[0];
        let activeTabId = activeTab.id

        myLeads.push(tabs[0].url)
        localStorage.setItem("leads", JSON.stringify(myLeads))
        renderLeads(myLeads)
    })
    
})