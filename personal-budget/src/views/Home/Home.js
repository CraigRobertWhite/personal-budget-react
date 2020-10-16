import React from 'react';
import axios from 'axios'
import Chart from 'chart.js'

export default class Home extends React.Component{
    state = {
        articles: [],
        chartData: {
            datasets: [{
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)',
                    'rgb(255,80,239)'
                ]
            }],
            labels: []
        }
    };

    async getExpenses() {
        try {
            await axios.get('/budget').data.expenses?.forEach(expense => {
                this.chartData.datasets[0].data.push(expense.amount);
                this.chartData.labels.push(expense.type);
            });
        } catch (error) {
            console.log(error)
        }
    };

    createChart() {
        let context = document.getElementById('budget-chart');
        new Chart(context, {
            type: 'doughnut',
            data: this.chartData
        });
    };

    async componentDidMount() {
        await this.getExpenses();
        this.createChart();
    }

    render() {
        return (
            <main className="container center" aria-label="Main">
                <section className="page-area">
                    <article className="text-box">
                        <h1>Stay on track</h1>
                        <p>
                            Do you know where you are spending your money? If you really stop to track it down,
                            you would get surprised! Proper budget management depends on real data... and this
                            app will help you with that!
                        </p>
                    </article>

                    <article className="text-box">
                        <h1>Alerts</h1>
                        <p>
                            What if your clothing budget ended? You will get an alert. The goal is to never go over the
                            budget.
                        </p>
                    </article>

                    <article className="text-box">
                        <h1>Results</h1>
                        <p>
                            People who stick to a financial plan, budgeting every expense, get out of debt faster!
                            Also, they to live happier lives... since they expend without guilt or fear...
                            because they know it is all good and accounted for.
                        </p>
                    </article>

                    <article className="text-box">
                        <h1>Free</h1>
                        <p>
                            This app is free!!! And you are the only one holding your data!
                        </p>
                    </article>

                    <article className="text-box">
                        <h1>Stay on track</h1>
                        <p>
                            Do you know where you are spending your money? If you really stop to track it down,
                            you would get surprised! Proper budget management depends on real data... and this
                            app will help you with that!
                        </p>
                    </article>

                    <article className="text-box">
                        <h1>Alerts</h1>
                        <p>
                            What if your clothing budget ended? You will get an alert. The goal is to never go over the
                            budget.
                        </p>
                    </article>

                    <article className="text-box">
                        <h1>Results</h1>
                        <p>
                            People who stick to a financial plan, budgeting every expense, get out of debt faster!
                            Also, they to live happier lives... since they expend without guilt or fear...
                            because they know it is all good and accounted for.
                        </p>
                    </article>

                    <article className="text-box">
                        <h1>Free</h1>
                        <p>
                            This app is free!!! And you are the only one holding your data!
                        </p>
                    </article>
                </section>
                <section className="page-area">
                    <article>
                        <h1 style={{'textAlign': 'center'}}>Budget</h1>
                        <canvas id="budget-chart" width="400" height="400"/>
                    </article>
                </section>
            </main>
        );
    }
}
