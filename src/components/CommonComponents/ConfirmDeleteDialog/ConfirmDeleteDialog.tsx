import { useDispatch } from 'react-redux';
import { deleteExpenseOption } from '../../../redux/features/expenseSlice';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
} from '@mui/material';

const ConfirmDeleteDialog = ({ setDeleteConfirmation, transactionId }: any) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteExpenseOption(transactionId));
    console.log('handle delete');
    setDeleteConfirmation(false);
  };
  return (
    <Dialog open={true} maxWidth='sm' fullWidth>
      <DialogTitle>Confirm delete</DialogTitle>
      <Box position='absolute' top={0} right={0}></Box>
      <DialogContent>
        <Typography>Do you want to delete this one</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          color='primary'
          variant='contained'
          onClick={() => {
            setDeleteConfirmation(false);
          }}
        >
          Cancel
        </Button>
        <Button
          color='secondary'
          variant='contained'
          onClick={() => {
            handleDelete();
          }}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDeleteDialog;
