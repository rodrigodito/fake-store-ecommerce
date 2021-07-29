import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function SnackbarAlert({ children, open, setOpen }) {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return(
    <Snackbar 
      open={open} 
      autoHideDuration={1500} 
      onClose={handleClose}
      anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
    >
      <Alert onClose={handleClose} severity="success">
        {children}
      </Alert>
    </Snackbar>
  )
}

export default SnackbarAlert;