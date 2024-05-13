// assets
import {IconBrandChrome,  IconHelp,  IconSquareRoundedPlus, IconCategory} from '@tabler/icons-react';
import  Inventory2Outlined from "@mui/icons-material/Inventory2Outlined"

// constant
const icons = { IconBrandChrome, IconHelp, IconSquareRoundedPlus, Inventory2Outlined, IconCategory };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const categories = {
  id: 'categories-nav',
  title: 'Menu Categories',
  type: 'group',
  children: [
    {
      id: 'categories-all',
      title: 'Toutes les catégories',
      type: 'item',
      url: '/categories',
      icon: icons.IconCategory,
      breadcrumbs: false
    },
    {
      id: 'categories-create',
      title: 'Nouvelle catégorie',
      type: 'item',
      url: '/categories/create',
      icon: icons.IconSquareRoundedPlus,
      breadcrumbs: false
    }
  ]
};

export default categories;
