import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup, Stack } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";


const Mui_04_TogglegrpButton = () => {
  // const [formats,setFormats] = useState([])

  const handleChangeFormats = (e)=>{
   
  }
  return (
    <div>
      <Stack direction="row">
        <ToggleButtonGroup aria-label="text formatting "  onChange={(e)=>{handleChangeFormats()}}>
          <ToggleButton value="bold" aria-label="bold" name = "bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic" name = "italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underline" aria-lable="underline" name = "underline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </div>
  );
};

export default Mui_04_TogglegrpButton;
