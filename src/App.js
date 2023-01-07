import './App.css';
import Nav from './components/Nav';
import Card from './components/Card';
import data from './Data';



function App() {
    const cardElements = data.map( (item) => {
        return(
            <Card 
                key = {item.id}
                {...item}
            />
        )
    })
  return (
    <div className="App">    
        <Nav />  
        {cardElements}
    </div>
  );
}

export default App;
