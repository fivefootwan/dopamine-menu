import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
       <h1>HELLO</h1>
      </header>

      <div className='Page-content'>

        <form className='Quiz'> {/*onSubmit={(e) => {e.preventDefault;}}*/}
          <p>Quiz</p>

          <div className='Question-card'>
            <h2 className='Question'>Pick your setting</h2>
              <div className='Options'>
                <p className='Option'>
                <input type="checkbox"/> 🛋️ Chill at home
                </p>

                <p className='Option'>
                <input type="checkbox"/> 🚶‍♀️ Go outside
                </p>

                <p className='Option'>
                <input type="checkbox"/> 🎧 Headphones on
                </p>

                <p className='Option'>
                <input type="checkbox"/>🕯️ Curl up in a cozy corner
                </p>

                <p className='Option'>
                <input type="checkbox"/>🗺️ Visit somewhere new (even nearby)
                </p>

                <p className='Option'>
                <input type="checkbox"/>🎨 Set up a creative zone
                </p>

                <p className='Custom-Option'>
                ...Or choose your own
                <input placeholder='e.g.dance'/>
                </p>

              </div>
          </div>

          <div className='Question-card'>
            <h2 className='Question'>Choose your comfort move:</h2>
              <div className='Options'>
                <p className='Option'>
                <input type="checkbox"/> 🍜 Eat
                </p>

                <p className='Option'>
                <input type="checkbox"/>📱 Scroll
                </p>

                <p className='Option'>
                <input type="checkbox"/>🧸 Cuddle something
                </p>

                <p className='Option'>
                <input type="checkbox"/>🛏️ Make a nest of blankets
                </p>

                <p className='Option'>
                <input type="checkbox"/>🌀 Play with a fidget or stress toy
                </p>

                <p className='Option'>
                <input type="checkbox"/>🌸 Smell something soothing (tea, candle)
                </p>

                <p className='Custom-Option'>
                ...Or choose your own
                <input placeholder='e.g.dance'/>
                </p>
              </div>
          </div>

          <div className='Question-card'>
            <h2 className='Question'>Pick a mood booster</h2>
            <div className='Options'>
              <p className='Option'>
              <input type="checkbox"/>🎶 Music
              </p>

              <p className='Option'>
              <input type="checkbox"/>✍️ Write
              </p>

              <p className='Option'>
              <input type="checkbox"/>📞 Talk to someone
              </p>

              <p className='Option'>
              <input type="checkbox"/>💃 Dance for a minute
              </p>

              <p className='Option'>
              <input type="checkbox"/>🖌️ Doodle something
              </p>

              <p className='Option'>
              <input type="checkbox"/>🌬️ Do 3 deep breaths
              </p>

              <p className='Custom-Option'>
              ...Or choose your own
              <input placeholder='e.g.dance'/>
              </p>
            </div>
          </div>

          <div className='Question-card'>
            <h2 className='Question'>Which feels most rewarding right now?</h2>
            <div className='Options'>
              <p className='Option'>
              <input type="checkbox"/>✅ Check something off
              </p>

              <p className='Option'>
              <input type="checkbox"/>💡 Learn something
              </p>

              <p className='Option'>
              <input type="checkbox"/>✨ Do nothing
              </p>

              <p className='Option'>
              <input type="checkbox"/>🧹 Tidy a small area
              </p>

              <p className='Option'>
              <input type="checkbox"/>🎁 Do a small kindness for someone
              </p>

              <p className='Option'>
              <input type="checkbox"/>📓 Make a mini plan or list
              </p>

              <p className='Custom-Option'>
              ...Or choose your own
              <input placeholder='e.g.dance'/>
              </p>
            </div>
          </div>

          <div className='Question-card'>
            <h2 className='Question'>What’s your energy vibe?</h2>
            <div className='Options'>
              <p className='Option'>
              <input type="radio" name="energy"/>🔋 Full tank
              </p>

              <p className='Option'>
              <input type="radio" name="energy"/>😐 Meh
              </p>

              <p className='Option'>
              <input type="radio" name="energy"/>🪫 Running on fumes
              </p>

            </div>
          </div>

          <button type="submit" className='Submit-button'>Send your result</button>

        </form>

        <div id='Menu-result'>
          <p>menu</p>
        </div>

      </div>
    </div>
  );
}

export default App;
