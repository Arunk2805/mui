import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Typography,
} from "@mui/material";
const Mui_010_CheckBox = () => {
  const [select,setSelected] = useState([])
  const handleChange =(e)=>{
    const index = select.indexOf(e.target.value)
    if(index === -1) {
      setSelected([...select , e.target.value])
    }
    else{
      setSelected(select.filter((country) => country !== e.target.value))
    }
  }
  console.log(select)
  return (
    <Box>
      <Typography variant="h4" align="center" mt={2}>
        Example of Check box
      </Typography>
      <Box mx="20px">
        <FormControl name="country to go">
          <FormLabel>select the country you want to go </FormLabel>
          <FormGroup>
            <FormControlLabel
              value={"India"}
              label="India"
              control={<Checkbox color="success"  onChange={handleChange} />}
            />
            <FormControlLabel
              value={"Japan"}
              label="Japan"
              control={<Checkbox color="success" onChange={handleChange}/>}
            />
            <FormControlLabel
              value={"newyork"}
              label="newyork"
              control={<Checkbox color="success" onChange={handleChange} />}
            />
          </FormGroup>
        </FormControl>
        <p>your selected countries are : {select.join(" ,")}</p>
      </Box>
    </Box>
  );
};

export default Mui_010_CheckBox;
