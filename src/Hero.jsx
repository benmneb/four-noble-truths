import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HeroImg from './assets/hero.jpg';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100vw',
		height: '80vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		objectFit: 'cover',
		objectPosition: 'center',
		height: '100%',
		width: '100%'
	}
}));

export default function Hero() {
	const styles = useStyles();

	return (
		<Box className={styles.root}>
			<img className={styles.image} src={HeroImg} alt="" />
		</Box>
	);
}
