import React, { useState } from "react";
import {
  Box,
  TextField,
  Stack,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Mui_07_TextField = () => {
  const [info, setInfo] = useState();
  // console.log(info)

  const [eye, setEye] = useState(false);
  const handleEye = ()=>{
    setEye(!eye)
  }
  return (
    <Box mx={2}>
      <Typography variant="h4" color={"secondary.main"} align="center">
        text field example
      </Typography>
      <Stack>
        <Stack spacing={2} direction={"row"} m={2}>
          <TextField label="Name" variant="outlined" />
          <TextField label="Name" variant="filled" />
          <TextField label="Name" variant="standard" />
        </Stack>
        <Stack spacing={2} direction={"row"} m={2}>
          <TextField
            label="Name"
            variant="outlined"
            size="small"
            inputProps={{ readOnly: true }}
          />
          <TextField label="Name" variant="filled" size="small" />
          <TextField label="Name" variant="standard" size="small" />
        </Stack>
        <Stack spacing={2} direction={"row"} m={2}>
          <TextField
            label="Name"
            variant="outlined"
            size="small"
            placeholder="enter your name"
          />
          <TextField
            variant="outlined"
            size="small"
            placeholder="enter your name"
          />
          <TextField
            type="password"
            label=" password"
            variant="outlined"
            size="small"
            placeholder=" Enter your Password"
          />
          <TextField type="date" variant="outlined" size="small" label = "enter data "  />
          <TextField type="time" variant="outlined" size="small" />
        </Stack>
        <Stack m={2} spacing={2} direction={"row"}>
          <TextField
            label="password"
            required
            type="password"
            value={info}
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">RS</InputAdornment>
              ),
            }}
            onChange={(e) => setInfo(e.target.value)}
            helperText={
              !info
                ? "password is required "
                : "do not share your passqord to any one !"
            }
            error={!info}
          />
        </Stack>

        <Stack spacing={2} direction={"row"}>
          <TextField
            label="password"
            type="password"
            size="small"
            variant="filled"
            placeholder="enter you password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"> p</InputAdornment>
              ),
            }}
          />
          <TextField
            label="password"
            type="password"
            size="small"
            variant="filled"
            InputProps={{
              endAdornment: <InputAdornment position="end"> p</InputAdornment>,
            }}
          />
        </Stack>
        <Stack spacing={2}m={2} direction={"row"}>
          <TextField
            type={eye ? "text" : "password"}
            label="password"
            size="small"
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleEye}>{eye ? (<VisibilityIcon/>) : (<VisibilityOffIcon/>)}</IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Mui_07_TextField;
