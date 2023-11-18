import React from 'react'
import Datatable from './Datatable'
import { Paper } from '@mui/material';

const userColumns = [
    { field: "id", headerName: "ServiceId",width:270},
    {
      field: "servicename",
      headerName: "Service Name",
      width:250  
    },
    {
      field: "plan",
      headerName: "Plan",
      width: 200,
      renderCell: (params) => {
        return (
         <Paper sx={{background:(theme)=>theme.palette.common['grey'],color:(theme)=>theme.palette.primary['main'],p:1}} elevation={1}>{params.row.plan}</Paper>
        );
    }},
    {
      field: "price",
      headerName: "Price",
      width: 200,
    },
  ];

  const servicesAll = [
    {
        "id": "6554ba9fb6652e61bdc01ce8",
        "productId": "prod_P0fHy7OZwYPVKZ",
        "servicename": "Kubernets",
        "description": "1GB RAM , 2 Core CPU",
        "plan": "Basic",
        "priceId": "price_1OCdwXSCZn81mFB25Dni9AYj",
        "duration": "12 days",
        "__v": 0
    },
    {
        "id": "6554bc6a845290a26d612ad5",
        "productId": "prod_P0jrXpBOdITFEL",
        "servicename": "Kubernets",
        "description": "2GB RAM , 2 Core CPU",
        "plan": "Standard",
        "priceId": "price_1OCiO8SCZn81mFB2ra2SxQsD",
        "duration": "24 days",
        "__v": 0
    },
    {
        "id": "6554d38b315c13bbf1cbe44c",
        "productId": "prod_P0lTCfmmEEaEsw",
        "servicename": "Docker",
        "description": "Number of concurrent builds : 5",
        "plan": "Basic",
        "price": 5,
        "priceId": "price_1OCjwbSCZn81mFB2Wt6raEio",
        "duration": "3",
        "__v": 0
    },
    {
        "id": "6556260cb15edce354fe3722",
        "productId": "prod_P18l28pAiJVEwl",
        "servicename": "Docker",
        "description": "Number of concurrent builds : 20",
        "plan": "Standard",
        "price": 35,
        "priceId": "price_1OD6UISCZn81mFB2oIdFagkj",
        "duration": "halfyearly",
        "__v": 0
    },
    {
        "id": "6556264db15edce354fe3724",
        "productId": "prod_P18mGEZkMYmkQq",
        "servicename": "Docker",
        "description": "Number of concurrent builds : 20",
        "plan": "Standard",
        "price": 65,
        "priceId": "price_1OD6VLSCZn81mFB21iS8YZOt",
        "duration": "yearly",
        "__v": 0
    }
]
  
  
  
function Services() {

    return (
        <Datatable tableField={userColumns} tableData={servicesAll} title={"Service"} />
    )
}

export default Services