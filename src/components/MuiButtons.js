import React from "react";
import { Button, Stack,IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const MuiButtons = () => {
  return (
    <div>
      <h3>button examples in material ui !</h3>
      <Stack spacing={3}>
        <Stack   spacing={2} direction="row">
          <Button variant="text" href="https://google.com">
            text
          </Button>
          <Button variant="contained">contained</Button>
          <Button variant="outlined">outlined</Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button color="primary" variant="contained">
            primary
          </Button>
          <Button color="secondary" variant="contained">
            secondary
          </Button>
          <Button color="warning" variant="contained">
            warning
          </Button>
          <Button color="error" variant="contained">
            error
          </Button>
          <Button color="info" variant="contained">
            info
          </Button>
          <Button color="success" variant="contained">
            success
          </Button>
        </Stack>
        <Stack display="block" spacing={2} direction="row">
          <Button variant="contained" color="primary" size="small">
            small
          </Button>
          <Button variant="contained" color="primary" size="medium">
            medium
          </Button>
          <Button variant="contained" color="primary" size="large">
            large
          </Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button variant="contained" color="error"  startIcon={<SendIcon/>} disableRipple onClick={()=>{alert("clicked ! ")}}>Send</Button>
          <Button variant="contained" color="error"  endIcon={<SendIcon/>} disableElevation>Send</Button>
          <IconButton aria-label="send" color="success" size="medium">
            <SendIcon/>
            </IconButton>
        </Stack>
      </Stack>
    </div>
  );
};

export default MuiButtons;
