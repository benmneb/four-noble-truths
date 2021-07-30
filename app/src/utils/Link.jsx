import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
    boxShadow: (props) =>
      `inset 0 ${props.footerLink ? 0 : '-3px'} 0 ${
        theme.palette.primary.main
      }`,
    transition: `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
    '&:hover': {
      color:
        theme.palette.type === 'dark'
          ? theme.palette.primary.contrastText
          : theme.palette.text.primary,
      boxShadow: `inset 0 -1.15rem 0 ${theme.palette.primary.main}`,
    },
  },
}));

export function Link({ children, ...props }) {
  const styles = useStyles({ ...props });

  return (
    <a className={styles.link} {...props}>
      {children}
    </a>
  );
}
