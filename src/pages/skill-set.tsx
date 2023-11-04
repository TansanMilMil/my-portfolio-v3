import { useEffect, useState } from "react";
import Styles from '../styles/index/index.module.scss';
import OwnStyles from '../styles/skill-set/skill-set.module.scss';
declare var Chart: any;
declare var Typewriter: any;

export default function SkillSet() {
    const [chartSize, setChartSize] = useState('pc');
    let isResponsive: boolean = false;

    const renderChart = () => {
        const myChartElement: any = document.getElementById('myChart') as any;
        const ctx: any = myChartElement.getContext('2d');

        const experience: {label: string, value: number, bgColor: string, borderColor: string}[] = [
            {label: 'Spring Framework', value: 1.5, bgColor: 'rgba(173, 255, 47, 0.2)', borderColor: 'rgba(173, 255, 47, 1)'},
            {label: 'AWS(Lambda, RDS, S3, etc...)', value: 3.5, bgColor:  'rgba(255, 206, 86, 0.2)', borderColor: 'rgba(255, 206, 86, 1)'},
            {label: 'Angular', value: 3.5, bgColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgba(255, 99, 132, 1)'},
            {label: 'React', value: 2.0, bgColor: 'rgba(54, 162, 235, 0.2)', borderColor: 'rgba(54, 162, 235, 1)'},
            {label: 'Ruby on Rails', value: 0.5, bgColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgba(255, 99, 132, 1)'},
            {label: 'ASP.NET Core(C#)', value: 3.5, bgColor: 'rgba(153, 102, 255, 0.2)', borderColor: 'rgba(153, 102, 255, 1)'},
            {label: 'HTML, JavaScript, CSS', value: 5.0, bgColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgba(255, 99, 132, 1)'},
            {label: 'PostgreSQL', value: 3.5, bgColor: 'rgba(54, 162, 235, 0.2)', borderColor: 'rgba(54, 162, 235, 1)'},
            {label: 'MySQL', value: 2.5, bgColor: 'rgba(54, 162, 235, 0.2)', borderColor: 'rgba(54, 162, 235, 1)'},
            {label: 'TypeScript', value: 5.0, bgColor: 'rgba(54, 162, 235, 0.2)', borderColor: 'rgba(54, 162, 235, 1)'},
            {label: 'Python', value: 3.0, bgColor: 'rgba(54, 162, 235, 0.2)', borderColor: 'rgba(54, 162, 235, 1)'},
            {label: 'Ruby', value: 1, bgColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgba(255, 99, 132, 1)'},
            {label: 'Swift', value: 2, bgColor: 'rgba(75, 192, 192, 0.2)', borderColor: 'rgba(75, 192, 192, 1)'},
            {label: 'Xamarin', value: 0.25, bgColor: 'rgba(75, 192, 192, 0.2)', borderColor: 'rgba(75, 192, 192, 1)'},
            {label: 'Docker', value: 2.5, bgColor: 'rgba(54, 162, 235, 0.2)', borderColor: 'rgba(54, 162, 235, 1)'},
            {label: 'Git', value: 5.0, bgColor: 'rgba(200, 200, 200, 0.2)', borderColor: 'rgba(200, 200, 200, 1)'},
        ];
        const labels = experience.map(x => x.label);
        const values = experience.map(x => x.value);

        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '経験年数',
                    data: values,
                    backgroundColor: experience.map(x => x.bgColor),
                    borderColor: experience.map(x => x.borderColor),
                    borderWidth: 1
                }]
            },
            options: {
                responsive: isResponsive,
                indexAxis: 'y',
                plugins: {
                    legend: {
                        labels: {
                            color: '#ccc'
                        }
                    }
                },
                scales: {
                    y: {
                        ticks: {
                            color: '#ccc'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#ccc'
                        }
                    },
                }
            }
        });
    };

    useEffect(() => {
        document.title = 'SkillSet - My Portfolio';

        if (document.documentElement.clientWidth <= 950) {
            setChartSize('phone');
            isResponsive = true;
        }

        setTimeout(() => {
            renderChart();
        }, 100);

        new Typewriter('#skill-set', {
            strings: document.getElementById('skill-set')?.innerText,
            autoStart: true,
            delay: 60,
        })        
    }, []);

    return (
        <div>
            <h1 id="skill-set" className={Styles.headerText}>SkillSet</h1>

            <div className={OwnStyles.chartArea}>
                {chartSize === 'pc' &&
                    <div className="ms-5 me-5">
                        <canvas id="myChart" width="800" height="500"></canvas>
                    </div>
                }
                {chartSize === 'phone' &&
                    <div>
                        <canvas id="myChart" height="400"></canvas>
                    </div>
                }
            </div>
        </div>
    )
}
