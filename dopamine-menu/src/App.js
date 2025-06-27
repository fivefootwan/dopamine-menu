import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
       <h1>HELLO</h1>
      </header>

      <div className='Page-content'>

        <div className='Quiz'>
          <p>Quiz</p>

          <div className='Question-card'>
            <h2 className='Question'>This is a question:</h2>
            <div className='Options'>
              <button className='Option'>Option 1</button>
              <button className='Option'>Option 2</button>
              <button className='Option'>Option 3</button>
              <button className='Option'>Option 4</button>
              <button className='Option'>Option 5</button>
              <button className='Option'>Option 6</button>
            </div>
          </div>

          <div className='Question-card'>
            <h2 className='Question'>This is a question:</h2>
            <div className='Options'>
              <button className='Option'>Option 1</button>
              <button className='Option'>Option 2</button>
              <button className='Option'>Option 3</button>
              <button className='Option'>Option 4</button>
              <button className='Option'>Option 5</button>
              <button className='Option'>Option 6</button>
            </div>
          </div>

          <div className='Question-card'>
            <h2 className='Question'>This is a question:</h2>
            <div className='Options'>
              <button className='Option'>Option 1</button>
              <button className='Option'>Option 2</button>
              <button className='Option'>Option 3</button>
              <button className='Option'>Option 4</button>
              <button className='Option'>Option 5</button>
              <button className='Option'>Option 6</button>
            </div>
          </div>



        </div>

        <div id='Menu-result'>
          <p>menu</p>
        </div>

      </div>
    </div>
  );
}

export default App;
