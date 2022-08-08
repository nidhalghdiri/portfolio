import './Layout.css';
import OurNavbar from '../../components/navbar/Navbar';

import BG from '../../assets/images/background.png';




function Layout(props) {
  return (
    <div className="Layout" style={{backgroundImage: "url('"+ BG +"')"}}>
      <header>
          <OurNavbar routes={props.routes} />
          
      </header>
      <main>
       {props.children}
        
      </main>
    </div>
  );
}

export default Layout;