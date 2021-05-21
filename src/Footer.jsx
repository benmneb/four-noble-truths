import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		height: theme.spacing(5),
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
}));

export default function Footer() {
	const styles = useStyles();

	return (
		<Box className={styles.root}>
			<Typography>&copy; {new Date().getFullYear()} benmneb</Typography>
		</Box>
	);
}
