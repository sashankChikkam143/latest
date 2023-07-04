import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ExcludeDialogBox() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="warning" onClick={handleClickOpen}>
        Package Excludes
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography>Pacakge Exclude</Typography>
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <list>
            <li>Food & Accommodation</li>
            <li>Darshan / Pooja Tickets</li>
            <li>Multiple Pick/Drop Points in City.</li>
            <li>No Cab is Used after 10:00PM in Srisailam.</li>
            <li>If any Change in Plan Should inform to us early</li>
            <li>Hyd City Tour Is Not Included in the Fare.</li>
        </list>
        </DialogContent>
        <DialogActions>
          <Button autoFocus  variant="contained" onClick={handleClose}>
            CLOSE
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}