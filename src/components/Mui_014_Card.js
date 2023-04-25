import React from 'react'
import {Box, Stack, Typography }from "@mui/material"

const Mui_014_Card = () => {
  return (
    <Box>
      <Stack spacing={3}  >
      <Box my={3}>
        <Typography variant='h5' align='center' color={"warning.main"} >Card with Example</Typography>
      </Box>
     
      </Stack>
    </Box>
  )
}

export default Mui_014_Card
