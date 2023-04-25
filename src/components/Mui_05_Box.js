import React from "react";
import { Box } from "@mui/material";

const Mui_05_Box = () => {
  return (
    <Box mx={2}>
      <Box
        mt={2}
        mx={3}
        p={2}
        fontSize={17}
        fontWeight={500}
        display={"flex"}
        // flexDirection={"column"}
        // justifyContent={"space-between"}
        justifyContent={"space-evenly"}
        // alignContent={"center"}
        color={"white"}
        bgcolor={"secondary.main"}
        borderRadius={10}
        borderColor={"success"}
      >
        <p  >Box Model</p>
        <p>box model</p>
      </Box>
      <Box mx={3} component={"p"} fontFamily={"arial"} fontSize={19}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates culpa! Mollitia odit incidunt fuga aspernatur hic error, ipsum amet nostrum magnam saepe unde ad impedit sed cum natus, dolores reprehenderit asperiores vel sint numquam maiores. Dolor amet maxime omnis corrupti voluptatum saepe quam fugit?
      </Box>
    </Box>
  );
};

export default Mui_05_Box;
