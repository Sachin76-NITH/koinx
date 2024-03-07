import React, { useEffect, useState } from 'react';

function Footer() {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        if (!response.ok) {
          throw new Error('Failed to fetch trending coins data');
        }
        const data = await response.json();
        setTrendingCoins(data.coins);
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className='foot' style={{ overflowX: 'auto', whiteSpace: 'nowrap', scrollbarWidth: 'none', msOverflowStyle: 'none', margin: "20px" }}>
      <div style={{ display: 'inline-block' }}>
        {trendingCoins.map((coin) => (
          <div key={coin.item.id} style={{ display: 'inline-block', margin: '0 10px 10px 0', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', minWidth: '200px' }}>
            <img src={coin.item.large} alt={`${coin.item.name} Symbol`} style={{ width: '50px', height: '50px' }} />
            <span style={{ marginLeft: '5px', fontSize: '18px' }}>{coin.item.symbol}</span>
            <img src={coin.item.data.sparkline} alt={`${coin.item.name} Sparkline`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
