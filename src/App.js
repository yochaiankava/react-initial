import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Calculator from './components/Calculator';
import Products from './components/Products';






function App() {
  return (
    <>  
    <div>start line app</div>
    <br></br>
    <Header text="hello header text" subtext="hello header subtext"/> 
   
    <Calculator/>
    <Products/> 
    <Footer text="hello foter text" subtext="hello foter subtext"/>  
    <div>end line app</div>
    
    </>
  );

}

export default App;
