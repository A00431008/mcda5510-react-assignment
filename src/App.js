import './App.css';
import Navibar from './components/Navibar';
import Aboutpage from './views/Aboutpage';
import Mytownpage from './views/Mytownpage';
import { 
  createBrowserRouter, 
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Aboutpage />
  },
  {
    path: '/mytown',
    element: <Mytownpage />
  }
]);

function App() {
  return (
    <div className="container">
      <Navibar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
