import React from 'react';
import logo from './logo.svg';
import './App.css';
import { names } from './persons';

const Hello = ({ name, surname }) => <p>
  hellow <h1>{name} {surname}</h1>
</p>

const Table = ({ persons }) => {

  let rows = names.map((ob, i) =>
    <tr>
      <td>{ob.name}</td>
      <td>{ob.surname}</td>
      <td><button onClick={() => choose(i)}>choose</button></td>
    </tr>
  )
  let choose = (i) => alert("chosen " + i)

  return (<table>
    <tr>
      <th>name</th>
      <th>surname</th>
      <th>say Hellow</th>
    </tr>
    {rows} </table>)
}

class App extends React.Component {
  render() {
    let name = names.map((ob) =>
      <Hello name={ob.name} surname={ob.surname} />)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Table persons={names} />


        </header>
      </div>
    );
  }
}

export default App;
