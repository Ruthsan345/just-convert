import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab, Body, Title, Left, Right, Footer, FooterTab, Button, Icon } from 'native-base';
import { Image } from 'react-native';

import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';
import Tab4 from './tabFour';
import Tab5 from './tabFive';

export default function App() {
  return (
    <Container >
      <Header hasTabs >
        <Body>
          <Title>    Just Convert 🔥</Title>
        </Body>
      </Header>
      <Tabs renderTabBar={() => <ScrollableTab />}>
        <Tab heading="Distance Conversion 🚧">
          <Tab1 />
        </Tab>
        <Tab heading="Temperature Conversion 🌡️">
          <Tab2 />
        </Tab>
        <Tab heading="Currency Conversion ​💴​💱​💵​">
          <Tab3 />
        </Tab>
        <Tab heading="Time Conversions 🕒">
          <Tab4 />
        </Tab>
        <Tab heading="Number Conversion 🔢">
          <Tab5 />
        </Tab>
      </Tabs>


      <Footer>
        <FooterTab>

        </FooterTab>
      </Footer>
    </Container >
  );
}


