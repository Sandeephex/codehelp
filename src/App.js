import './App.css';
import SurveyForm from './components/SurveyForm';

function App() {
  sessionStorage.setItem("Apipathurl","https://trackhr.trackhr.tech/sandbox/")
  return (
    <>
      <SurveyForm/>
    </>
  );
}

export default App;
