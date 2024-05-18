// assets
import {IconBrandChrome,  IconHelp,  IconSquareRoundedPlus} from '@tabler/icons-react';
import  {Inventory2Outlined} from "@mui/icons-material"

// constant
const icons = { IconBrandChrome, IconHelp, IconSquareRoundedPlus, Inventory2Outlined };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const products = {
  id: 'products-nav',
  title: 'Menu produits',
  type: 'group',
  children: [
    {
      id: 'products-all',
      title: 'Tous les produits',
      type: 'item',
      url: '/products',
      icon: icons.Inventory2Outlined,
      breadcrumbs: false
    },
    // {
    //   id: 'products-create',
    //   title: 'Nouveau produit',
    //   type: 'item',
    //   url: '/products/create',
    //   icon: icons.IconSquareRoundedPlus,
    //   breadcrumbs: false
    // }
  ]
};

export default products;
