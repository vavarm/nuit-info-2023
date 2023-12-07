import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

function Chart() {
    /*
    // UseState
    const [csvData, setCsvData] = useState([]);

    // UseEffect
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('/new-co2-emissions.csv');
            const data = await response.text();
            const parsedData = [];

            // Utilisation de csv-parser pour analyser le contenu CSV
            data
            .trim() // Supprimer les espaces blancs au début et à la fin
            .split('\n') // Diviser les lignes du CSV
            .forEach((row) => {
                const rowData = row.split(',');
                parsedData.push(rowData);
            });

            setCsvData(parsedData);
        } catch (error) {
            console.error('Error fetching or parsing CSV file:', error);
        }
        };

        fetchData();
    }, []);
    */

    const [chartData, setChartData] = useState({});

    useEffect(() => {
      // Exemple de données factices pour le graphique
      const fakeChartData = {
        labels: ['2000', '2005', '2010', '2015', '2020'],
        datasets: [
          {
            label: 'CO2 Emissions (World)',
            data: [25, 30, 28, 35, 32],
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 2,
          },
        ],
      };
  
      setChartData(fakeChartData);
    }, []);

    return (
        <div>
          <h1>Contenu du fichier CSV :</h1>
          <pre>{/*JSON.stringify(csvData, null, 2)*/}</pre>
          {/* Affichez vos données CSV dans votre composant comme vous le souhaitez */}
          <div>{chartData}</div>
          {/*
          <Line
            data={chartData}
            options={{
            scales: {
                x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'Year',
                },
                },
                y: {
                type: 'linear',
                position: 'left',
                title: {
                    display: true,
                    text: 'CO2 Emissions (Million Metric Tons)',
                },
                },
            },
            }}
        />
        */}
        </div>
    );
}

export default Chart