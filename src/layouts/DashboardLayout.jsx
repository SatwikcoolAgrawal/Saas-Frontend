import { Grid } from '@mui/material'
import React from 'react'
import UserLayout from './UserLayout'
import {Container} from '@mui/material'

function DashboardLayout({children}) {
  
  return (
    <UserLayout>
      <Container component="main" sx={{ pt: 8, pb: 6 }} >
      {children}
      </Container>
    </UserLayout>
  )
}

export default DashboardLayout
