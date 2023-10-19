import { Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SetupPage from './assets/pages/SetupPage';
import QuestionPage from './assets/pages/QuestionPage';
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<SetupPage/>}/>
        <Route path='/questions' element={<QuestionPage/>}/>
      </Routes>
    </>
  )
}

export default App
