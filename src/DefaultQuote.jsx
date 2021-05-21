import { Box, Typography, Fade, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	quote: {
		cursor: 'pointer',
		textAlign: 'center',
		'& figcaption:nth-child(2)': {
			marginTop: theme.spacing(1)
		}
	}
}));

export default function DefaultQuote() {
	const styles = useStyles();

	function handleQuoteClick() {
		return window.open(
			`https://suttacentral.net/sn56.24/en/sujato?ref=4NobleTruths`,
			'_blank',
			'noopener noreferrer'
		);
	}

	return (
		<Fade in>
			<Box className={styles.root} component="figure">
				<Tooltip arrow title="Read this sutta on SuttaCentral.net">
					<Box className={styles.quote} onClick={handleQuoteClick}>
						<Typography component="blockquote">
							"Whatever perfected ones, fully awakened Buddhas, truly wake up
							<br />
							— in the past, future, or present —<br />
							all of them truly wake up to the Four Noble Truths."
						</Typography>
						<Typography variant="subtitle2" component="figcaption">
							- The Buddha
						</Typography>
					</Box>
				</Tooltip>
			</Box>
		</Fade>
	);
}
