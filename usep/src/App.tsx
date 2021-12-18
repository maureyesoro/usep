import './App.css';
import Layout from "./layout/component";
import {Routes, Route} from 'react-router-dom';
// import Home from './views/home/component';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Home />}/> */}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
