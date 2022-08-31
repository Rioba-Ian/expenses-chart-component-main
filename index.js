import data from "./data.json" assert {type: "json"}

console.table(data)


data.map(item => {
    const chartContainer = document.getElementById("chart")
    const barContainer = document.createElement('div')
    const bar = document.createElement('div');
    const day = document.createElement('p')

    const dayWeek = item.day
    const barHeight = `${(item.amount / 7)}rem`


    // bar
    bar.classList.add('bar');
    bar.style.height = barHeight

    // day
    day.classList.add('day')
    day.innerText = dayWeek

    // bar container
    barContainer.classList.add('bar-container')

    barContainer.appendChild(bar)
    barContainer.appendChild(day)

    chartContainer.append(barContainer)
})


/*
This was an initial method I had tried to display the data

*/

// const days = data.map(item => item.day)
// const amount = data.map(item => item.amount)


// console.table(days, amount)

// const displayExpenses = () => {
//     let dataList = ''


//     dataList += `
//     <ul>
//     <li><span>days: ${data.map(item => item.day)}</span></li>
//     <li><span>amount: ${data.map(item => item.amount)}</span></li>
//     </ul>
//     `
//     document.getElementById('chart').innerHTML = dataList

// }

// displayExpenses()
