import React from "react";
import { Box, Grid, Paper } from "@mui/material";
export default function UseMui() {
  //   return (
  //     <Box>
  //       {/*componente encapsulador dos componentes*/}
  //       <Grid container>
  //         {/* O container indica que essa tag grid recebe todos os componentes dentro dessa grade*/}
  //         <Grid item xs={12}>
  //           {/* indica que este componente fará parte de um ou vários ITENS da GRADE.*/}
  //           <Paper>xs=12</Paper>
  //         </Grid>
  //       </Grid>
  //     </Box>
  //   );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Paper>xs=4</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=4</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=4</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=4</Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
