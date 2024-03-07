import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function Sentiment() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy existing chart instance if it exists
    if (chartInstance.current !== null) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Buy', 'Sell', 'Hold'],
        datasets: [
          {
            label: 'Sentiment Analysis',
            data: [40, 30, 30], // Update with your actual data
            backgroundColor: [
              'rgba(75, 192, 192, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 205, 86, 0.6)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 205, 86, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }, []);

  return (
    <div className='sen' style={{ display: 'flex' }}>
      <div style={{ width: '50%', padding: '20px', border: '2px solid #ddd', borderRadius: '10px', boxSizing: 'border-box' }}>
        <h2 style={{ textAlign: 'center' }}>Sentiment Analysis</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <canvas ref={chartRef} width="50" height="50" style={{ maxWidth: '100%' }} />
          </div>
          <div style={{ flex: 1 }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem' }}>
                <span style={{ backgroundColor: 'rgba(75, 192, 192, 0.6)', display: 'inline-block', width: '20px', height: '20px', marginRight: '5px' }}></span>
                <span>Buy: 40%</span>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <span style={{ backgroundColor: 'rgba(255, 99, 132, 0.6)', display: 'inline-block', width: '20px', height: '20px', marginRight: '5px' }}></span>
                <span>Sell: 30%</span>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <span style={{ backgroundColor: 'rgba(255, 205, 86, 0.6)', display: 'inline-block', width: '20px', height: '20px', marginRight: '5px' }}></span>
                <span>Hold: 30%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ width: '50%', padding: '20px', boxSizing: 'border-box' }}>
        <h2 style={{ textAlign: 'center' }}>Key Events for Bitcoin</h2>
        <div style={{ border: '2px solid #ddd', borderRadius: '10px', padding: '10px', marginTop: '20px', backgroundColor: '#e1f5fe', borderRadius: '10px' }}>
          <p>1. Bitcoin reaches an all-time high price of $64,863 on April 14, 2021.</p>
          <p>2. El Salvador becomes the first country to adopt Bitcoin as legal tender on September 7, 2021.</p>
          <p>3. Tesla announces it will accept Bitcoin as payment for its vehicles on February 8, 2021.</p>
        </div>
      </div>
    </div>
  );
}

export default Sentiment;
