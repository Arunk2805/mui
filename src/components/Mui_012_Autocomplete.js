import React, { useState } from "react";
import { Autocomplete, Box, TextField, Typography,Radio } from "@mui/material";

const Mui_012_Autocomplete = () => {
  const lang = ["html", "css", "javascript", "reactJs"];
  const [selectLang, setSelectLang] = useState(null);
  const handleSelect = (e, newValue) => {
    setSelectLang(newValue);
  };
  const langObj = lang.map((value, index) => ({
    id: index + 1,
    lang: value,
  }));

  const nameList = [
    {
      firstName: "Arun",
      lastName: "Kumar",
    },
    {
      firstName: "naveen",
      lastName: "Kumar",
    },
    {
      firstName: "murali",
      lastName: "Krishna",
    },
    {
      firstName: "venu",
      lastName: "prasad",
    },
  ];
  const [value , setValue] = useState(null)
  const handleChange = (e,newValue)=>{
    setValue(newValue)
  }
  console.log(value)

  const optionParam = {
    options: nameList,
    getOptionLabel: (options) => options.firstName+" "+options.lastName
  }
  return (
    <Box>
      <Typography variant="h5" align="center" color={"secondary"} my={2}>
        Auto Complete Example
      </Typography>
      <Box mx={3} width={300}>
        <Autocomplete
          options={lang}
          value={selectLang}
          onChange={handleSelect}
          freeSolo
          renderInput={(parms) => (
            <TextField {...parms} label="select your language" />
          )}
        />
        selected language : {selectLang}
      </Box>

      <Box m={3}>
        <Typography variant="h5" my={3} color={"secondary"} align="center">
          Auto Complete with Multiple Attributes Examples{" "}
        </Typography>
        <Box mx={3} width={400}>
          <Autocomplete 
          // options={nameList}
          // getOptionLabel={(option) => option.firstName +" "+ option.lastName}
          {...optionParam}
          value={value}
          onChange={handleChange}
          renderInput={(parms)=> <TextField {...parms} label="Select Name"/>}
         
          isOptionEqualToValue={(option , value) => option.value === value.value}
          />
          <br />
        <Typography variant="h6 "> selected Name  : { value ? value.firstName + " "  +value.lastName : null}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Mui_012_Autocomplete;
