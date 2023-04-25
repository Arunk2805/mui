import React from 'react'
import {Grid, Typography} from "@mui/material"

const Mui_06_Grid = () => {
  return (
    <Grid container align = "center"  border={3} mt={2}>
      {/* xs is about 600px */}
      {/* sm is about 900px */}
      {/* md is about 1200px  */}
      {/* lg is about 1500px */}
      {/* xl is above 1500px */}
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Typography variant='h5'>COL 1</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Typography variant='h5'>COL 2</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Typography variant='h5'>COL 3</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Typography variant='h5'>COL 4</Typography>
        <Grid container >
          <Grid item md={4}xs={4}>inner grid  4 </Grid>
          <Grid item md={2} xs={2}>inner grid  2</Grid>
          <Grid item md={6} xs={6}>inner grid  6 </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Mui_06_Grid
