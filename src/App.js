import React from 'react';
import HelloWorld from './components/HelloWorld'
import CounterExample from './components/CounterExample'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
   <div>
     <Header />

     <HelloWorld name="John"/>

     <Footer />
   </div>
  );
}

export default App;
