import React from 'react'
import {Typography} from "@mui/material"

const MuiTypography = () => {
  return (
    <div>
      {/* // component property changes the html tag h4 to h1 in the browser   */}
      <Typography variant='h1' > h1 Heading ...</Typography>
      <Typography variant='h2' > h2 Heading ...</Typography>
      <Typography variant='h3' > h3 Heading ...</Typography>
      <Typography variant='h4'  component="h1"> h4 Heading ...</Typography>
      <Typography variant='h5' > h5 Heading ...</Typography>
      <Typography variant='h6' > h6 Heading ...</Typography>


      <Typography variant='subtitle1' > Sub Title 1</Typography>
      <Typography variant='subtitle2' > Sub Title 2</Typography>
      <Typography variant='body1' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, hic recusandae sapiente reiciendis consectetur architecto culpa adipisci tempore a vel fuga consequatur repellat non itaque tenetur, aut totam. Officiis commodi dolorem quod ab earum perferendis inventore alias quo harum quia illum, exercitationem quis delectus repellat dolor deleniti rem deserunt quae!</Typography> <br /><br />
      <Typography variant='body2' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempore laudantium aliquid beatae quaerat optio consequatur fugit, ab aliquam sequi corrupti qui ipsum alias aspernatur ad natus. Aliquam, ducimus dolor! Sed, ipsa. Sed, voluptas sit omnis nobis hic at debitis doloribus numquam culpa ipsa quod minima dolore repellendus beatae obcaecati cupiditate ea commodi accusamus. Praesentium harum, enim numquam vel commodi adipisci? Fugiat doloribus enim ab? Ea asperiores saepe repellat repudiandae.</Typography>
    </div>
  )
}

export default MuiTypography
