import {useSelector} from 'react-redux';

import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline, StyledEngineProvider} from '@mui/material';

// routing
import {AppRouter} from '@routes';

// defaultTheme
import themes from './themes';

// project imports
import NavigationScroll from './layout/NavigationScroll';
import {Toaster} from "sonner";
import PropTypes from "prop-types";

// ==============================|| APP ||============================== //

const App = ({basename}) => {
	const customization = useSelector((state) => state.customization);

	return (

		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={themes(customization)}>
				<AppRouter basename={basename}>
					<NavigationScroll>
						<CssBaseline/>
					</NavigationScroll>
				</AppRouter>
				<Toaster richColors position={"top-right"} toastOptions={{}}/>
			</ThemeProvider>
		</StyledEngineProvider>
	);
};
App.propTypes = {
	basename: PropTypes.string,
}
export default App;
