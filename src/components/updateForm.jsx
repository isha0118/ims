import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {updateItems} from '../helpers/apis/api';

export default function FormDialog({rowData, handleUpdate}) {
  const [open, setOpen] = React.useState(true);
  const value = rowData;
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    setOpen(false);
    const updatedValue = await updateItems(value);
    handleUpdate(updatedValue);
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update the Item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is a single item update flow. You can update items in bulk via excel export flow. 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="productName"
            label="Product Name"
            fullWidth
            variant="standard"
            required
            defaultValue={rowData.productName}
            onChange={e => {value.productName = e.target.value}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Category"
            fullWidth
            variant="standard"
            required
            defaultValue={rowData.category}
            onChange={e => {value.category = e.target.value}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="quantity"
            label="Quantity"
            type="number"
            fullWidth
            variant="standard"
            required
            defaultValue={rowData.quantity}
            onChange={e => {value.quantity = e.target.value}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="ppu"
            label="Price Per Unit"
            type="number"
            fullWidth
            variant="standard"
            required
            defaultValue={rowData.ppu}
            onChange={e => {value.ppu = e.target.value}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="shelfNo"
            label="Shelf Number"
            fullWidth
            variant="standard"
            required
            defaultValue={rowData.shelfNo}
            onChange={e => {value.shelfNo = e.target.value}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="vendorLink"
            label="Vendor's Link"
            fullWidth
            variant="standard"
            required
            defaultValue={rowData.vendorLink}
            onChange={e => {value.vendorLink = e.target.value}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}