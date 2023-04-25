import React, { useState } from "react";
import { Box, Rating, Typography } from "@mui/material";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MoodIcon from '@mui/icons-material/Mood';

const Mui_011_Rating = () => {
  const [value, setValue] = useState();
  const [emoji, setEmoji] = useState(2);
  const handleRating = (e) => {
    setValue(e.target.value);
  };
  const handleEmoji = (e, newValue) => {
    setEmoji(newValue);
  };
  return (
    <Box>
      <Box m={2}>
        <Typography variant="h4" align="center">
          Rating Example !
        </Typography>
        <Rating
          value={value}
          onChange={handleRating}
          size="large"
          precision={"0.5"}
          color="secondary"
        />
        <br />
        <p>Rating : {value}</p>
      </Box>
      <Box m={2}>
        <Typography variant="h4" align="center">
          Emoji Example !
        </Typography>
        <Rating
          value={emoji}
          onChange={handleEmoji}
          size="large"
          precision={"0.5"}
          color="secondary"
          defaultValue={emoji}
          icon= {<EmojiEmotionsIcon  color="success"/>}
          emptyIcon={<MoodIcon />}
          // readOnly
          
        />
        <br />
        <p>Rating : {emoji}</p>
      </Box>
    </Box>
  );
};

export default Mui_011_Rating;
