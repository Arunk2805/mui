import React from "react";
import { Stack, ButtonGroup, Button } from "@mui/material";

const MuiGroupButtons = () => {
  return (
    <div>
      <h3>grouped buttons examples ! </h3>
      <Stack spacing={3}>
        <Stack direction="row">
          <ButtonGroup variant="contained">
            <Button>left</Button>
            <Button>center</Button>
            <Button>right</Button>
          </ButtonGroup>
        </Stack>
        <Stack direction="row">
          <ButtonGroup variant="contained" color="secondary" orientation="vertical">
            <Button>left</Button>
            <Button>center</Button>
            <Button>right</Button>
          </ButtonGroup>
        </Stack>
        <Stack direction="row">
          <ButtonGroup variant="text" orientation="vertical" >
            <Button>left</Button>
            <Button>center</Button>
            <Button>right</Button>
          </ButtonGroup>
        </Stack>
      </Stack>
    </div>
  );
};

export default MuiGroupButtons;
