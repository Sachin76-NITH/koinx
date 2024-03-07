import React from 'react';
import { Card, CardHeader, CardBody, Stack, StackDivider, Box, Heading, Text } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Fundamentals from './Fundamentals';
import About from '../About';
import Sentiment from '../Sentiment';
import Overview from './Overview';
function Cards() {
  return (
    <div>
      <Tabs size='lg' variant='soft-rounded' colorScheme='green' align='center' isFitted variant='enclosed'>
  <TabList >
    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Overview</Tab>
    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Fundamentals</Tab>
    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Sentiment</Tab>
    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>About</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p><Overview/></p>
    </TabPanel>
    <TabPanel>
      <p><Fundamentals/></p>
    </TabPanel> <TabPanel>
      <p><Sentiment/></p>
    </TabPanel> <TabPanel>
      <p><About/></p>
    </TabPanel>
  </TabPanels>
</Tabs>
    </div>
  );
}

export default Cards;
