import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

export interface ConfirmationDialogRawProps {
  id: string;
  keepMounted: boolean;
  value: string;
  open: boolean;
  onClose: (value?: string) => void;
  data: any;
  dataCallback: any;
}

function ConfirmationDialogRaw(props: ConfirmationDialogRawProps) {
  const {
    dataCallback,
    data,
    onClose,
    value: valueProp,
    open,
    ...other
  } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleOk = () => {
    onClose(value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    dataCallback(event.target.value);
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 300 } }}
      maxWidth='xs'
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          name='selection menu'
          value={value}
          onChange={handleChange}
        >
          {data.map((option: any) => (
            <FormControlLabel
              value={option.label}
              key={option.id}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}

export default function ConfirmationDialog({
  data,
  setSelectedObject,
  dataCallback,
}: any) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(data[0].label);

  React.useEffect(() => {
    const selectedObject = data.find((object: any) => object.label === value);
    setSelectedObject(selectedObject);
  }, [data, setSelectedObject, value]);

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue?: string) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 1000 }}>
      <List component='div' role='group'>
        <ListItem
          button
          divider
          aria-haspopup='true'
          onClick={handleClickListItem}
        >
          <ListItemText secondary={value} />
        </ListItem>

        <ConfirmationDialogRaw
          id='option-menu'
          keepMounted
          open={open}
          onClose={handleClose}
          value={value}
          data={data}
          dataCallback={dataCallback}
        />
      </List>
    </Box>
  );
}
