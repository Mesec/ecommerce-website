import { Container } from '@mui/material';
import './App.css';
import Layout from './components/Layout/Layout';
// import { useSelector, useDispatch } from 'react-redux'
import Navbar from './components/Navbar/Navbar'
import Routes from './components/Routes/Routes'
function App() {
  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()

  return (
    <Container style={{ width: '100%', padding: '0', maxWidth: '100%' }}>
      <Layout/>
      {/* <Header /> */}
      {/* <button
        aria-label="Increment value"
        onClick={ () => dispatch(increment()) }
      >
        Increment
      </button>
      <span>{ count }</span>
      <button
        aria-label="Decrement value"
        onClick={ () => dispatch(decrement()) }
      >
        Decrement
      </button> */}
    </Container>
  );
}

export default App;
