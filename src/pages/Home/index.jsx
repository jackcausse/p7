import data from "../../data/data.json"
function Home() {
  data.forEach(e=> {console.log(e)})
  return <div>Page d'accueil</div>
}
// import data from './components/data';
// data = json.parse()
// let data = []
// data.forEach(element) => console.log(element)
export default Home









// import logo from './logo.svg'
// import '../App.css'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//     </div>
//   )
// }

// export default App