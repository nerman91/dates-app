import React from 'react';
import './main.global.scss';
import { Substrate } from './Components/Substrate';
import { Layout } from './Components/Layout';
import { Title } from './Components/Title';
import { PaginationEvents } from './Components/PaginationEvents';
import { EventsContextProvider } from './Context/EventsProvider';
import { Slider } from './Components/Slider';
import { AnimateMenu } from './Components/AnimateMenu';

export function App() {
  return (
    <EventsContextProvider>
      <Layout>
        <Substrate />
        <Title />
        <AnimateMenu />
        <PaginationEvents />
        <Slider />
      </Layout>
    </EventsContextProvider>
  );
}
