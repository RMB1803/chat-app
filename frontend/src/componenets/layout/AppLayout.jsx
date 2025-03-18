import React from 'react'
import Header from './Header'
import Title from '../shared/Title'
import { Grid2 } from '@mui/material'

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
        <>
          <Title />
          <Header />

          <Grid2 container height={"calc(100vh - 4rem)"} >
            
          </Grid2>

          <WrappedComponent {...props} />
        </>
    )
  }
}

export default AppLayout
