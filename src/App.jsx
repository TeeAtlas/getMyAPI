import './App.css';
import CountryInfo from './components/CountryInfo';

function App() {
  return (
    <>
      <h1>My IP and Location</h1>
      <CountryInfo />
    </>
  );
}

export default App


// display map -> line 32 component needs to be fix
// use set location to store lang dn long into state
// that you will have to pass in line 32