import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card ,CardContent,Button} from "@mui/material";


const Datatable = ({tableField,tableData,title,Rpage}) => {
  const [data, setData] = useState(tableData);
  const navigate=useNavigate();
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleClick=(e,user)=>{
    navigate(Rpage,{state:user});
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            
              <Button variant="outlined" onClick={(e)=>handleClick(e,params.row)}>Edit</Button>
              <Button variant="contained" onClick={() => handleDelete(params.row.id)}
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
        <Link to="/newuser" className="link">
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
