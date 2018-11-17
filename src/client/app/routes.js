import DashboardPage from './components/page/DashboardPage';
import LoginPage from './components/page/LoginPage';
import NotFoundPage from './components/page/NotFoundPage';
// import { LoginPage, DashboardPage, NotFoundPage } from './components';

export const Routes = [
  {
    path: '/',
    exact: true,
    component: DashboardPage
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    component: NotFoundPage
  }
];
