import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom'
import MainLandingPage from './components/MainLandingPage/MainLandingPage';
import EventOrganisers from './components/EventOrganisers/EventOrganisers';
import Stucalender from './components/Stucalender/Stucalender';
import Errorroute from './Errorroute/Errorroute';
import OnGoingEvents from './components/OnGoingEvents/OnGoingEvents';
import Clubs from './components/Clubs/Clubs';
import Students from './components/Students/Students';
import Rootlayout from './components/Rootlayout/Rootlayout';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';
import Calendar from '../src/components/Stucalender/Calendar';
import Csi from './components/Clubs/Csi';
import Gdsc from './components/Clubs/Gdsc';
import Orgcalender from './components/Orgcalender/Orgcalender';

function App() {
  let router = createBrowserRouter([
    {
      path: '',
      element: <Rootlayout/>,
      errorElement: <Errorroute />,
      children: [
        {
          path:'',
          element:<MainLandingPage/>
        },  
        {
         path: 'students',
          element: <Students/>,
          children: [
            {
              path: 'upcoming',
              element: <UpcomingEvents/>
            },
            {
              path: 'stucalender',
              element: <Calendar />
            },
            {
              path: 'clubs',
              element: <Clubs />
            },
            {
              path:'',
              element:<OnGoingEvents />
            }
          ]
        },
        {
          path: 'org',
          element: <EventOrganisers />
        },
        {
          path:'csi',
          element:<Csi/>
        },{
          path: 'orgcal',
          element: <Orgcalender/>
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


    
     
  
