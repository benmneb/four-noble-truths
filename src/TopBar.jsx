import { AppBar, Box, Toolbar, Typography, IconButton } from '@material-ui/core';
import { InfoRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import SettingsMenu from './SettingsMenu';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginBottom: theme.spacing(4)
	},
	title: {
		flexGrow: 1,
		textAlign: 'center'
	}
}));

export default function TopBar() {
	const styles = useStyles();

	return (
		<Box className={styles.root}>
			<AppBar position="static" color="inherit">
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="about">
						<InfoRounded />
					</IconButton>
					<Typography variant="h6" component="h1" className={styles.title}>
						The Four Noble Truths
					</Typography>
					<SettingsMenu />
				</Toolbar>
			</AppBar>
		</Box>
	);
}
