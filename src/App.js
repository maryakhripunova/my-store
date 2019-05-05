import React from 'react';
import logo from './logo.svg';
import './App.css';
import { names } from './persons';

const Hello = ({ name, surname }) => <p>
  hellow <h1>{name} {surname}</h1>
</p>

const Table = ({ persons, choose }) => {

  let rows = names.map((ob, i) =>
    <tr>
      <td>{ob.name}</td>
      <td>{ob.surname}</td>
      <td><button onClick={() => choose(i)}>choose</button></td>
    </tr>
  )


  return (<table>
    <tr>
      <th>name</th>
      <th>surname</th>
      <th>say Hellow</th>
    </tr>
    {rows} </table>)
}

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { chosen: 0 };
  }


  choose(i) {
    this.setState({ chosen: i })
  }

  render() {
    let person = names[this.state.chosen];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Table persons={names} choose={(i) => this.choose(i)} />
          <Hello name={person.name} surname={person.surname} />

        </header>
      </div>
    );
  }
}

export default App;
