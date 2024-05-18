// assets
import { IconDashboard , IconArticle, IconUser} from '@tabler/icons-react';

// constant
const icons = { IconDashboard, IconArticle ,IconUser };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'dashboard-home',
      title: 'Tableau de bord',
      type: 'item',
      url: '/dashboard',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }, {
      id: 'home-orders',
      title: 'Commandes',
      type: 'item',
      url: '/orders',
      icon: icons.IconArticle,
      breadcrumbs: false
    },
    {
      id: 'home-users',
      title: 'Utilisateurs',
      type: 'item',
      url: '/users',
      icon: icons.IconUser,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
