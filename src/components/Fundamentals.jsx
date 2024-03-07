import React, { useState, useEffect } from 'react';
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from '@chakra-ui/react';

function Fundamentals() {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true');
        if (!response.ok) {
          throw new Error('Failed to fetch Bitcoin data');
        }
        const data = await response.json();
        setBitcoinData(data.bitcoin);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
        setLoading(false);
      }
    };

    fetchBitcoinData();
  }, []);

  return (
    <div className='sen' style={{ display: 'flex' }}>
      <div style={{ flex: 1, marginRight: '20px' }}>
        <h2>Fundamentals (USD)</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <TableContainer className='m'>
            <Table variant='striped' colorScheme='teal'>
              <Thead>
                <Tr>
                  <Th>Metric</Th>
                  <Th>Value (USD)</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Bitcoin Price</Td>
                  <Td>{bitcoinData && bitcoinData.usd}</Td>
                </Tr>
                <Tr>
                  <Td>Market Cap</Td>
                  <Td>{bitcoinData && bitcoinData.usd_market_cap}</Td>
                </Tr>
                <Tr>
                  <Td>24h Volume</Td>
                  <Td>{bitcoinData && bitcoinData.usd_24h_vol}</Td>
                </Tr>
                <Tr>
                  <Td>24h Change (%)</Td>
                  <Td>{bitcoinData && bitcoinData.usd_24h_change}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </div>
      <div style={{ flex: 1 }}>
        <h2>Fundamentals (INR)</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <TableContainer>
            <Table variant='striped' colorScheme='teal'>
              <Thead>
                <Tr>
                  <Th>Metric</Th>
                  <Th>Value (INR)</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Bitcoin Price</Td>
                  <Td>{bitcoinData && bitcoinData.inr}</Td>
                </Tr>
                <Tr>
                  <Td>Market Cap</Td>
                  <Td>{bitcoinData && bitcoinData.inr_market_cap}</Td>
                </Tr>
                <Tr>
                  <Td>24h Volume</Td>
                  <Td>{bitcoinData && bitcoinData.inr_24h_vol}</Td>
                </Tr>
                <Tr>
                  <Td>24h Change (%)</Td>
                  <Td>{bitcoinData && bitcoinData.inr_24h_change}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
  );
}

export default Fundamentals;
