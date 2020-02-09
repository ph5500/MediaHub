import React from 'react';
import logo from './logo.svg';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Board Game</h1>
        <p>class Square extends React.Component {
          render() {
            return (
              <button className="square">
                {/* TODO */}
              </button>
            );
          }
        }

        class Board extends React.Component {
          renderSquare(i:any) {
            return <Square />;
          }

          render() {
            const status = "Board game";

            return (
              <div>
                <div className="status">{status}</div>
                <div className="board-row">
                  {this.renderSquare(0)}
                  {this.renderSquare(1)}
                  {this.renderSquare(2)}
                </div>
                <div className="board-row">
                  {this.renderSquare(3)}
                  {this.renderSquare(4)}
                  {this.renderSquare(5)}
                </div>
                <div className="board-row">
                  {this.renderSquare(6)}
                  {this.renderSquare(7)}
                  {this.renderSquare(8)}
                  {this.renderSquare(9)}
                </div>
                <div className="board-row">
                  {this.renderSquare(10)}
                  {this.renderSquare(11)}
                  {this.renderSquare(12)}
              </div>
            );
          }
        }

        class Game extends React.Component {
          render() {
            return (
              <div className="game">
                <div className="game-board">
                  <Board />
                </div>
                <div className="game-info">
                  <div>{/* status */}</div>
                  <ol>{/* TODO */}</ol>
                </div>
              </div>
            );
          }
        }</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>Goodbye World</code>
        </p>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >

        Google
        </a>


      </header>
    </div>
  );
}


export default App;
