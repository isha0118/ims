import React, {useState} from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {Dialog} from '@mui/material';
import {DialogActions} from '@mui/material';
import {Button} from '@mui/material';
import FormDialog from './updateForm';
import { deleteItems } from '../helpers/apis/api';

export const MoreActions = props => {

    const {rowData} = props;
    const [dialogOpen, setDialogOpen] = useState(false);
    const [formOpen, setFormOpen] = useState(false);

  const handleUpdate = () => {
    setDialogOpen(false);
    setFormOpen(true);
  };

  const handleDelete = () => {
    const deleteId = rowData.id;
    deleteItems(deleteId)
    props.handleDeletion(deleteId);
    setDialogOpen(false);
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  
  return (
    <><MoreHorizIcon size="small" onClick={handleOpenDialog} />
    <Dialog open={dialogOpen}>
        <DialogActions>
            <Button onClick={handleUpdate}>Update</Button>
            <Button onClick={handleDelete}>Delete</Button>
            <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
    </Dialog>
    {formOpen && <FormDialog rowData={rowData} handleUpdate={props.handleUpdate}/>}
    </>
  )

}
