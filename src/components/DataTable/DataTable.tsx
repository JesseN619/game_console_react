import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'name',
      headerName: 'Name',
      width: 300,

    },
    {
      field: 'company',
      headerName: 'Company',
      width: 300,

    },
    {
      field: 'releaseDate',
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
  
  const rows = [
    { id: 1, name: 'PlayStation 5', company: 'Sony Corporation', releaseDate: '11/12/2020', price: 499.99},
    { id: 2, name: 'Xbox 360', company: 'Microsoft Corporation', releaseDate: '11/22/2005', price: 399.00},
    { id: 3, name: 'GameCube', company: 'Nintendo', releaseDate: '11/05/2001', price: 199.00},

  ];
  
  export const DataTable = () => {
    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={rows.length}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    );
  }