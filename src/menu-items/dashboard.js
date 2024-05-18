// assets
import { IconDashboard , IconArticle} from '@tabler/icons-react';

// constant
const icons = { IconDashboard, IconArticle };

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
      id: 'home-invoices',
      title: 'Commandes',
      type: 'item',
      url: '/orders',
      icon: icons.IconArticle,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
