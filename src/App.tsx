import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MapOutlined  from '@mui/icons-material/MapOutlined'
import Map from '@mui/icons-material/Map'
import Navbar from './components/Navbar/Navbar';
import Router from './Router'
import Layout from './Layout';

const navbarNavlinks = [{
  to: '/',
  icon: <MapOutlined fontSize='large' />,
  iconSelected: <Map fontSize='large' />
},
{
  to: '/test',
  icon: <MapOutlined fontSize='large' />,
  iconSelected: <Map fontSize='large' />
},
{
  to: '/test1',
  icon: <MapOutlined fontSize='large' />,
  iconSelected: <Map fontSize='large' />
}]

function App() {
  return (
    <div>
      <BrowserRouter >
        <Layout 
          navigation={<Navbar navlinks={navbarNavlinks} />}
          main={<Router />}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
