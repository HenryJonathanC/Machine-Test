import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Container from './components/Container';
// import Form  from './components/Form';
// import FormFinal from './components/FormFinal';
import Submitted from './components/Submitted';
import FormContainer from './components/FormContainer';


function App() {
  return (
    // <RouterProvider router={router} />
    <div className='app'>
        <Routes>
          <Route path="/" element={<FormContainer />} />
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
