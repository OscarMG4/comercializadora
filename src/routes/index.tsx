import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../components/layout';
import { Home } from '../modules/home';
import { AboutUs } from '../modules/about-us';
import { Services } from '../modules/services';
import { Contact } from '../modules/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: '/nosotros',
    element: (
      <MainLayout>
        <AboutUs />
      </MainLayout>
    ),
  },
  {
    path: '/servicios',
    element: (
      <MainLayout>
        <Services />
      </MainLayout>
    ),
  },
  {
    path: '/contacto',
    element: (
      <MainLayout>
        <Contact />
      </MainLayout>
    ),
  }
]);

export default router;
