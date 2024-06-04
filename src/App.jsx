import React from 'react';
import { WeatherProvider } from './hooks/useConnection';
import All from './components/All';

function App() {
  return (
    <WeatherProvider>
      <All />
    </WeatherProvider>
  );
}

export default App;
