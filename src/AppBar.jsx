import {
	AppBar as Appbar,
	Box,
	Toolbar,
	Typography,
	IconButton
} from '@material-ui/core';
import { InfoRounded, SettingsRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

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

export default function AppBar() {
	const styles = useStyles();

	return (
		<Box className={styles.root}>
			<Appbar position="static" color="inherit">
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="about">
						<InfoRounded />
					</IconButton>
					<Typography variant="h6" component="h1" className={styles.title}>
						The Four Noble Truths
					</Typography>
					<IconButton edge="end" color="inherit" aria-label="settings">
						<SettingsRounded />
					</IconButton>
				</Toolbar>
			</Appbar>
		</Box>
	);
}
