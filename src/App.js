import './App.css';

const style = {
  frontSize : "50px",
  textTransform:"capitalize",
  padding: "40px 0px"
}

const name = ['zubair' , 'jov roy' , 'Ferdous' , 'Roy name']
const develope = 
[
  {name:'zubair bin ferdous' , job:'App developer'},
  {name:'zubair bin khan' , job:'Web developer'},
  {name:'ali bin ferdous' , job:'Full stack developer'},
  {name:'Roy khan' , job:'Back end developer'},
  {name:'Mam bin jal' , job:'Desktop developer'}

]
function App() {
  return (
    <div className="App">
      <Header></Header>
      
      {/* {
        name.map(data => <li>{data}</li> )
      } */}

      {
        name.map(data => <Person name={data}></Person> )
      }
       <h3>this is ok now</h3>
       <h3>this is all react.js</h3>
      {
        develope.map(data => <Reason name = {data.name} data = {data.job}></Reason>)
      }

      
      {/* <Person name = {name[0]} data = "App developer"></Person>
      <Person name = {name[1]} data = "web developer"></Person> */}
     
    </div>
  );
}

function Person(props) {
  return (
    <div className="div">
      <h1> {props.name} </h1>
      <h2> {props.data} </h2>
    </div>
  )
}
function Header() {
  return ( <h1 style={style}>this is new World of Component</h1> )
}

function Reason(props) {
  return (
    <div className="div2">
       <h1> {props.name} </h1>
      <h2> {props.data} </h2>
    </div>
  )
}

export default App;
