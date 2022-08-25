console.log("hello mum.")
const canvasChart = document.getElementById("myChart").getContext('2d')

import data from "./data.json" assert {type: "json"}

console.log(data)

// for (let i = 0; i < data.length; i++) {
//     console.log(data[i].day)
// }

const days = data.map(item => item.day)
const amount = data.map(item => item.amount)

days.sum()

console.table(days.sum(), amount)

// const myChart = new Chart(canvasChart, {
//     type: 'bar',
//     data: {
//         labels: days,
//         datasets: [{
//             label: "days of the week",
//             data: Object.values(amount)
//         }
//         ]
//     }
// })