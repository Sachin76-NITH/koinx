import React, { useEffect, useState } from 'react';

function Trending() {
  const [trendingCurrencies, setTrendingCurrencies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingCurrencies = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending', {
          headers: {
   
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch trending currencies');
        }
        const data = await response.json();
        // Slice the trending currencies to display only the top 3
        setTrendingCurrencies(data.coins.slice(0, 3).map(coin => coin.item));
      } catch (error) {
        setError(error.message);
      }
    };

    fetchTrendingCurrencies();
  }, []);

  if (error) {
    return <div>Error fetching trending currencies: {error}</div>;
  }

  return (
    <div className='table-container trend'>
      <h2 className='s'>Top 3 Trending Currencies</h2>
      <table className="table">
     
        <tbody>
          {trendingCurrencies.map(currency => (
            <tr key={currency.id}>
              <td>{currency.name}</td>
              <td>{currency.symbol}</td>
              <td>
                <img src={currency.large} alt={`${currency.name} Symbol`} style={{ width: '30px', height: '30px' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Trending;
