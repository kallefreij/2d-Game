import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="scoreBoard">
          <div class="score">
            <span>1</span>
            <span>:</span>
            <span>2</span>
          </div>
        </div>
        <canvas id="myCanvas" width="720" height="320"></canvas>
      </header>
    </div>
  );
}

export default App;
