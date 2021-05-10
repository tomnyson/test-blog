import {Route, BrowserRouter} from 'react-router-dom'

import Home from './components/pages/Home'
import About from './components/pages/About'
import Resume from './components/pages/Resume'
import Blogs from './components/pages/Blogs'
import Quotes from './components/pages/Quotes'

import './styles/app.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/resume' component={Resume}/>
        <Route path='/quotes' component={Quotes}/>
        <Route path='/blogs' component={Blogs}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
