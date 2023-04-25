import React, { useState } from 'react'
import {Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, Typography} from "@mui/material"

const Mui_09_RadioButton = () => {
  const [choice,setChoice] = useState(null)
  console.log(choice)
  return (
    <Box>
      <Typography variant='h4' align='center'>Radio Buttons</Typography>
      <Stack spacing={3} direction={"row"} px={3}>
      <FormControl name= "country">
        <FormLabel >Enter your country name</FormLabel>
        <RadioGroup value={choice} onChange={(e)=> setChoice(e.target.value)}>
          <FormControlLabel label = "india" value="india" control={<Radio />}/>
          <FormControlLabel label = "america" value="america" control={<Radio  color="error"/>}/>
          <FormControlLabel label = "australia" value="australia" control={<Radio size='small' color='success'/> }/>
        </RadioGroup>
      </FormControl>
      </Stack>
    </Box>
  )
}

export default Mui_09_RadioButton
