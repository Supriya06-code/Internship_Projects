
// let portfolio = [];
// let chart; // Reference to the chart instance

// document.getElementById('investmentForm').addEventListener('submit', function (e) {
//     e.preventDefault();

//     const assetName = document.getElementById('assetName').value;
//     const investedAmount = parseFloat(document.getElementById('investedAmount').value);
//     const currentValue = parseFloat(document.getElementById('currentValue').value);

//     const investment = { assetName, investedAmount, currentValue };
//     portfolio.push(investment);

//     updatePortfolio();
//     updateChart();
//     clearForm();
// });

// // function updatePortfolio() {
// //     const investmentList = document.getElementById('investmentList');
// //     investmentList.innerHTML = ''; // Clear current list

// //     portfolio.forEach((investment, index) => {
// //         investmentList.innerHTML += `
// //             <div>
// //                 <span><strong>${investment.assetName}</strong></span>
// //                 <span>Invested Amount: $${investment.investedAmount.toFixed(2)}</span>
// //                 <span>Current Value: $${investment.currentValue.toFixed(2)}</span>
// //                 <button onclick="editInvestment(${index})">Edit</button>
// //                 <button onclick="deleteInvestment(${index})">Delete</button>
// //             </div>
// //         `;
// //     });

// //     calculateTotalValue();
// // }
// function updatePortfolio() {
//     const investmentList = document.getElementById('investmentList');
//     investmentList.innerHTML = ''; // Clear the table before re-populating

//     portfolio.forEach((investment, index) => {
//         const percentageChange = ((investment.currentValue - investment.investedAmount) / investment.investedAmount * 100).toFixed(2);

//         const row = `
//             <tr>
//                 <td>${investment.assetName}</td>
//                 <td>$${investment.investedAmount.toFixed(2)}</td>
//                 <td>$${investment.currentValue.toFixed(2)}</td>
//                 <td>${percentageChange}%</td>
//                 <td>
//                     <button onclick="editInvestment(${index})">Update</button>
//                     <button onclick="removeInvestment(${index})">Remove</button>
//                 </td>
//             </tr>
//         `;
//         investmentList.innerHTML += row;
//     });

//     // Call the function to update the total value as well
//     calculateTotalValue();
// }

// function calculateTotalValue() {
//     const totalValue = portfolio.reduce((total, investment) => total + investment.currentValue, 0);
//     document.getElementById('totalValue').innerText = `Total Value: $${totalValue.toFixed(2)}`;
// }

// function updateChart() {
//     const labels = portfolio.map(investment => investment.assetName);
//     const data = portfolio.map(investment => investment.currentValue);

//     if (chart) {
//         chart.destroy(); // Destroy previous chart instance
//     }

//     const ctx = document.getElementById('investmentChart').getContext('2d');
//     chart = new Chart(ctx, {
//         type: 'pie',
//         data: {
//             labels: labels,
//             datasets: [{
//                 label: 'Investment Distribution',
//                 data: data,
//                 backgroundColor: [
//                     '#3498db',
//                     '#e74c3c',
//                     '#2ecc71',
//                     '#f1c40f',
//                     '#9b59b6',
//                     '#e67e22',
//                 ],
//                 borderColor: '#fff',
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             responsive: true,
//             plugins: {
//                 legend: {
//                     position: 'top',
//                 }
//             }
//         }
//     });
// }

// function clearForm() {
//     document.getElementById('assetName').value = '';
//     document.getElementById('investedAmount').value = '';
//     document.getElementById('currentValue').value = '';
// }


// function removeInvestment(index) {
//     portfolio.splice(index, 1);
//     updatePortfolio();
// }

// function editInvestment(index) {
//     const investment = portfolio[index];
//     document.getElementById('updateAssetName').value = investment.assetName;
//     document.getElementById('updateInvestedAmount').value = investment.investedAmount;
//     document.getElementById('updateCurrentValue').value = investment.currentValue;
//     document.getElementById('updateForm').style.display = 'block';
//     document.getElementById('investmentForm').style.display = 'none';

//     document.getElementById('updateForm').onsubmit = function (e) {
//         e.preventDefault();
//         investment.assetName = document.getElementById('updateAssetName').value;
//         investment.investedAmount = parseFloat(document.getElementById('updateInvestedAmount').value);
//         investment.currentValue = parseFloat(document.getElementById('updateCurrentValue').value);
//         updatePortfolio();
//         updateChart();
//         document.getElementById('updateForm').style.display = 'none';
//         document.getElementById('investmentForm').style.display = 'block';
//     };
// }

// function cancelUpdate() {
//     document.getElementById('updateForm').style.display = 'none';
//     document.getElementById('investmentForm').style.display = 'block';
// }


let portfolio = [];
let chart; // Reference to the chart instance

document.getElementById('investmentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const assetName = document.getElementById('assetName').value;
    const investedAmount = parseFloat(document.getElementById('investedAmount').value);
    const currentValue = parseFloat(document.getElementById('currentValue').value);

    const investment = { assetName, investedAmount, currentValue };
    portfolio.push(investment);

    updatePortfolio();
    updateChart();
    clearForm();
});

function updatePortfolio() {
    const investmentList = document.getElementById('investmentList');
    investmentList.innerHTML = ''; // Clear the table before re-populating

    portfolio.forEach((investment, index) => {
        const percentageChange = ((investment.currentValue - investment.investedAmount) / investment.investedAmount * 100).toFixed(2);

        const row = `
            <tr>
                <td>${investment.assetName}</td>
                <td>$${investment.investedAmount.toFixed(2)}</td>
                <td>$${investment.currentValue.toFixed(2)}</td>
                <td>${percentageChange}%</td>
                <td>
                    <button onclick="editInvestment(${index})">Update</button>
                    <button onclick="removeInvestment(${index})">Remove</button>
                </td>
            </tr>
        `;
        investmentList.innerHTML += row;
    });

    calculateTotalValue();
}

function calculateTotalValue() {
    const totalValue = portfolio.reduce((total, investment) => total + investment.currentValue, 0);
    document.getElementById('totalValue').innerText = `Total Value: $${totalValue.toFixed(2)}`;
}

function updateChart() {
    const labels = portfolio.map(investment => investment.assetName);
    const data = portfolio.map(investment => investment.currentValue);

    if (chart) {
        chart.destroy(); // Destroy previous chart instance
    }

    const ctx = document.getElementById('investmentChart').getContext('2d');
    chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Investment Distribution',
                data: data,
                backgroundColor: [
                    '#3498db',
                    '#e74c3c',
                    '#2ecc71',
                    '#f1c40f',
                    '#9b59b6',
                    '#e67e22',
                ],
                borderColor: '#fff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });
}

function clearForm() {
    document.getElementById('assetName').value = '';
    document.getElementById('investedAmount').value = '';
    document.getElementById('currentValue').value = '';
}

function removeInvestment(index) {
    portfolio.splice(index, 1); // Remove the investment from the portfolio
    updatePortfolio();            // Update the portfolio display
    updateChart();               // Update the chart after removal
}

function editInvestment(index) {
    const investment = portfolio[index];
    document.getElementById('updateAssetName').value = investment.assetName;
    document.getElementById('updateInvestedAmount').value = investment.investedAmount;
    document.getElementById('updateCurrentValue').value = investment.currentValue;
    document.getElementById('updateForm').style.display = 'block';
    document.getElementById('investmentForm').style.display = 'none';

    document.getElementById('updateForm').onsubmit = function (e) {
        e.preventDefault();
        investment.assetName = document.getElementById('updateAssetName').value;
        investment.investedAmount = parseFloat(document.getElementById('updateInvestedAmount').value);
        investment.currentValue = parseFloat(document.getElementById('updateCurrentValue').value);
        updatePortfolio();
        updateChart();
        document.getElementById('updateForm').style.display = 'none';
        document.getElementById('investmentForm').style.display = 'block';
    };
}

function cancelUpdate() {
    document.getElementById('updateForm').style.display = 'none';
    document.getElementById('investmentForm').style.display = 'block';
}
