import './App.css';
// import React, {Component} from 'react'; //for class based component
import React, {useState} from 'react'; //for function based component
import Navbar from './component/Navbar';
import News from './component/News';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

// export default class App extends Component { //for class based component
const App = () => { //for function based component

  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState('light');
  const [modeText, setModeText] = useState('Enable Dark Mode');

  const toggleMode = () => {
    if (mode==='light') {
      setMode('dark');
      document.body.style.background = '#2f4f4f';
      setModeText('Disable Dark Mode');
    } else {
      setMode('light');
      document.body.style.background = 'white';
      setModeText('Enable Dark Mode');
    }
  }

  // state = { //for class based component
  //   progress: 0,
  // }

  // setProgress = (progress) => { //for class based component
  //   setState({progress: progress})
  // }

  // render() { //for class based component
    return (
      <div>
        <Router>
          <LoadingBar height={3} color='#f11946' progress={progress} />
          <Navbar modeText={modeText} mode={mode} toggleMode={toggleMode} />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} mode={mode} apiKey={apiKey} key="general" country="in" pageSize={8} category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} mode={mode} apiKey={apiKey} key="business" country="in" pageSize={8} category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} mode={mode} apiKey={apiKey} key="entertainment" country="in" pageSize={8} category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} mode={mode} apiKey={apiKey} key="health" country="in" pageSize={8} category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} mode={mode} apiKey={apiKey} key="science" country="in" pageSize={8} category="science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} mode={mode} apiKey={apiKey} key="sports" country="in" pageSize={8} category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} mode={mode} apiKey={apiKey} key="technology" country="in" pageSize={8} category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  // }; //for class based component

}

export default App;