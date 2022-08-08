import React, {Component} from 'react';
import Navbar from '../../components/navbar/Navbar';
import Slider from '../../components/slider/Slider';
// import About from '../../components/about/About';
class Home extends Component {
    render(){
        var test = "home";
        return(
            <div className={test}>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Slider />
                </main>
            </div>
          
          );
      }
  }
  export default Home;
      

        
