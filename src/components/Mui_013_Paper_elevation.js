import React from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";

const Mui_013_Paper_elevation = () => {
  return (
    <Box m={3}>
      <Typography variant="h5" color={"error"}>
        Paper with Elevation Example{" "}
      </Typography>

      <Box
        m={3}
        sx={{
          display: "flex",
        }}
      >
        <Box width={300} mx={3}>
          <Paper sx={{ marginBottom: "30px" }} elevation={10}>
            <Typography variant="h5" mx={2} pt={3}>
              Paper heading
            </Typography>
            <Typography variant="subtitle2" px={3} pt={1} pb={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              sed voluptas sapiente fugiat delectus modi accusamus sequi debitis
              et quasi quo quod distinctio, dolores eius odit ut commodi culpa.
              Atque perspiciatis tempore et, qui ullam,{" "}
            </Typography>
          </Paper>
        </Box>
        <Box width={300} mx={3}>
          <Paper sx={{ marginBottom: "30px" }} elevation={20}>
            <Typography variant="h5" mx={2} pt={3}>
              Paper heading
            </Typography>
            <Typography variant="subtitle2" px={3} pt={1} pb={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              sed voluptas sapiente fugiat delectus modi accusamus sequi debitis
              et quasi quo quod distinctio, dolores eius odit ut commodi culpa.
              Atque perspiciatis tempore et, qui ullam,{" "}
            </Typography>
          </Paper>
        </Box>
        <Box width={300} mx={3}>
          <Paper sx={{ marginBottom: "30px" }} elevation={15}>
            <Typography variant="h5" mx={2} pt={3}>
              Paper heading
            </Typography>
            <Typography variant="subtitle2" px={3} pt={1} pb={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              sed voluptas sapiente fugiat delectus modi accusamus sequi debitis
              et quasi quo quod distinctio, dolores eius odit ut commodi culpa.
              Atque perspiciatis tempore et, qui ullam,{" "}
            </Typography>
          </Paper>
        </Box>
        <Box width={300} mx={3}>
          <Paper sx={{ marginBottom: "30px" }} elevation={5}>
            <Typography variant="h5" mx={2} pt={3}>
              Paper heading
            </Typography>
            <Typography variant="subtitle2" px={3} pt={1} pb={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              sed voluptas sapiente fugiat delectus modi accusamus sequi debitis
              et quasi quo quod distinctio, dolores eius odit ut commodi culpa.
              Atque perspiciatis tempore et, qui ullam,{" "}
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Mui_013_Paper_elevation;
