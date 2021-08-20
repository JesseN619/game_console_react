import React, {useState} from 'react';
import { DataGrid, GridColDef, GridRowModel, GridDataContainer, GridValueGetterParams } from '@material-ui/data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { 
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle 
} from '@material-ui/core';
import { ConsoleForm } from '../../components/ConsoleForm';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 425 },
  {
    field: 'name',
    headerName: 'Name',
    width: 250,
  },
  {
    field: 'company',
    headerName: 'Company',
    width: 250,
  },
  {
    field: 'release_date',
    headerName: 'Release Date',
  //   type: 'date',
    width: 165,
  },
  {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 110,
  },
];

interface gridData{
  id?:string;
}
  
export const DataTable = () => {
  let {consoleData, getData} = useGetData();
  let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<gridData>({id:''});

  let handleOpen = () => {
    setOpen(true)
  };
  let handleClose= () => {
    setOpen(false)
  };

  let deleteData = () => {
    server_calls.delete(gridData.id!)
    getData()
  };

  let handleCheckbox = (id:GridRowModel) =>{
    if(id[0] === undefined){
        setData({id:''})
    }else{
        setData({id:id[0].toString()})
    }
    
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={consoleData} columns={columns} pageSize={5} checkboxSelection onSelectionModelChange = { handleCheckbox } />
      {console.log(gridData)}

      <Button onClick={handleOpen} variant="contained">Update</Button>
      <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

        {/*Dialog Pop Up begin */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update Console Console</DialogTitle>
        <DialogContent>
          <DialogContentText>Update Console</DialogContentText>
            <ConsoleForm id={gridData.id!}/>
        </DialogContent>
        <DialogActions>
          <Button onClick = {handleClose} color="primary">Cancel</Button>
          <Button onClick={handleClose} color = "primary">Done</Button> 
        </DialogActions>
      </Dialog>
      </div>
  );
}