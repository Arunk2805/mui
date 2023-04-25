import React, { useState } from 'react'
import {Box, MenuItem, TextField, Typography } from "@mui/material"
const Mui_08_select_DropDown = () => {
  const [lang , setLang] = useState("")
  const [language,setLanguage] = useState([])
  const langInfo = ["java" , "python", "react" , "HTML"]


  console.log(lang)
  console.log(language)
  return (
    <Box>
      <Typography variant='h4' align='center'> selcet and Drop Downs !</Typography>
      <Box >
        <Typography variant='h4'>single select value !</Typography>
      <TextField
      type='text'
      label = "select your language"
      value = {lang}
      onChange={(e)=>setLang(e.target.value)}
      select
      sx={{width : "300px"}}
      
      >
        {langInfo.map((lan)=>{
          return <MenuItem key={lan}  value = {lan}>{lan}</MenuItem>
        })}


      </TextField>
      <hr />
      </Box>
      <Box mx={3}>
        <Typography variant='h4'>multiple select value !</Typography>
      <TextField
      type='text'
      label = "select your language"
      value = {language}
      onChange={(e)=>setLanguage(e.target.value)}
      select
      sx={{width : "300px"}}
      SelectProps={{multiple:true}}
      >
        {langInfo.map((lan)=>{
          return <MenuItem key={lan}  value = {lan}>{lan}</MenuItem>
        })}


      </TextField>
        selected language : {language.join(",")}
      </Box>
    </Box>
  )
}

export default Mui_08_select_DropDown
