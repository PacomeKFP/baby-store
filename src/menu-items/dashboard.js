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
      id: 'home-factures',
      title: 'Factures',
      type: 'item',
      url: '/factures',
      icon: icons.IconArticle,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
