console.log("hello mum.")
import data from "./data.json" assert {type: "json"}

console.log(data)

const days = data.map(item => item.day)
const amount = data.map(item => item.amount)


console.table(days, amount)

const displayExpenses = () => {
    let dataList = ''


    dataList += `
    <ul>
    <li><span>days: ${data.map(item => item.day)}</span></li>
    <li><span>amount: ${data.map(item => item.amount)}</span></li>
    </ul>
    `
    document.getElementById('chart').innerHTML = dataList

}

displayExpenses()
