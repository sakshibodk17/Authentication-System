import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from './Components/Homepage';
import About from './Components/About';
import Events from './Components/Events';
import Contacts from './Components/Contacts';
import Sidebar from './Components/Sidebar';
import CreateAccount from './Components/CreateAccount';
const router= createBrowserRouter(
  [
    {
      path:"/",
      element: <div>
        <Sidebar/>
      <Homepage/>,
      </div>
    },
    {
      path:"/about",
      element:<div>
        <Sidebar/>
      <About/>,
      </div>
    },
    {
      path:"/events",
      element:<div>
        <Sidebar/>
      <Events/>,
      </div>
    },
    {
      path:"/contacts",
      element:<div>
        <Sidebar/>
        <Contacts/>,
        </div>
    },
    {
      path:"/createaccount",
      element:<div>
        <Homepage/>
        <CreateAccount/>,
        </div>
    },
    
  ]
);




function App() {
  return (

     <div>
      <RouterProvider router={router}
/>     </div>
   
  );
}

export default App
