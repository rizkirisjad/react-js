/** @format */

// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useGlobalContext } from './context';

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    <main>
      <div className="loading" style={{ marginTop: '8rem' }}></div>
    </main>;
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
