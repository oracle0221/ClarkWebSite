import {useState, useEffect} from 'react'
import {Switch, Route, useLocation, useHistory} from 'react-router-dom'

import './App.css';
import logo from './assets/logo.png';

// 页面
import Index from './pages/index'
import About from './pages/about'

const menuArr = [
  {
    name:"首页",
    path:"/",
  },
  {
    name:"关于FutureTalent",
    path:"/about",
  },
  {
    name:"联系我们",
    path:"/aa",
  },
  {
    name:"工作机会",
    path:"/bb",
  },
];

function App() {

  const [menus, setMenus] = useState(menuArr);
  const Location = useLocation();
  const History = useHistory();

  return (
    <div className="App">
      <div className="loading" ></div>
      <div className="wrap" >
        <div className="header" >
          <div className="header-box" >
            <div className="common-width-1200 header-line" >
              <a>
                <img src={logo} />
              </a>
              <ul>
                {
                  menus.map((item, index)=>(
                    <li key={index} 
                    className={Location.pathname===item.path?'active':''}
                    onClick={()=>{
                      History.push(item.path)
                    }}
                   >{item.name}</li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="shadow" ></div>
        </div>
        <div className="content-box" >
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/home" exact component={Index} />
            <Route path="/about" exact component={About} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
