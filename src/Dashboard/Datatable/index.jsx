import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Card ,CardContent,Button} from "@mui/material";

const Datatable = ({tableField,tableData,title}) => {
  const [data, setData] = useState(tableData);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <Button variant="outlined" >Edit</Button>
            </Link>
            <Button variant="contained"
              
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <Card sx={{borderRadius:0,p:1}}>
    <CardContent>
    <div className="datatable">
      <div className="datatableTitle">
        Add New {title}
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={tableField.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
    </CardContent>
    </Card>
  );
};

export default Datatable;
