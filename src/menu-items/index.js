import dashboard from './dashboard';
import pages from './pages';
import utilities from './utilities';
import other from './other';
import articles from "@menu-items/products.js";
import categories from "@menu-items/categories.js";

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard, categories, articles, other, pages, utilities],
};

export default menuItems;
