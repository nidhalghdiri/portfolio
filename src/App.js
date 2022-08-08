import './App.css';
import Layout from './container/layout/Layout';
import Slider from './components/slider/Slider';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Auth from './components/auth/Auth';
import { Route} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
const routes = [
  {  path: '/', name: 'Home', Component: Slider},
  {  path: '/about', name: 'About', Component: About},
  {  path: '/skills', name: 'Skills', Component: Skills},
  {  path: '/projects', name: 'Projects', Component: Projects},
  {  path: '/contact', name: 'Contact', Component: Contact},
  {  path: '/auth', name: 'Auth', Component: Auth},


];

function App() {
  return (
    <div className="App">
      <Layout routes={routes}>
      {routes.map(({path, Component}) => (
        <Route key={path} path={path} exact>
           {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
        </Route>
      ))}
      </Layout>
    </div>
  );
}

export default App;
