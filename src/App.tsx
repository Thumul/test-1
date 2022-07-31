import './App.css';
import { Greet } from './components/greet';
import PersonsList from './components/personList';

function App() {

  const personList = [
    {
      name:{
        first: "Thumul",
        last: "Dasun"
      },
      age: 21,
      hobbies: ["Reading books","Collecting stramps"]
    },
    {
      name:{
        first: "Dulara",
        last: "Rashmika"
      },
      age: 24,
      hobbies: ["Photography"]
    },
    {
      name:{
        first: "Thilini",
        last: "Nimansala"
      },
      age: 30,
      hobbies: ["Reading books"]
    }
  ];
  return (
    <div className="App">
      <Greet name = "Thumul Dasun" messageCount={10}/>
      <PersonsList persons={personList} />
    </div>
  );
}

export default App;
