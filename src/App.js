import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import Form  from './components/Form';
import FormFinal from './components/FormFinal';
import Submitted from './components/Submitted';

function App() {
  return (
    <div className='app'>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/job-selection" element={<FormFinal />}  />
          <Route path="application-submitted" element={<Submitted />} />
        </Routes>
      {/* <Container />
      <Form /> */}
      {/* <FormFinal /> */}
      {/* <Submitted /> */}
    </div>
  );
}

export default App;
