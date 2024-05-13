
/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */
export default function customThemeConfig(theme){

	return {
		modalChild: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			minWidth: 360,
			bgcolor: 'background.paper',
			boxShadow: 24,
			p: 4,
			pt: 0,

		}
	}
}