import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Grid } from "@mui/material";

import {} from "api";

const Tele = () => {
 

 

  useEffect(() => {

  }, []);

  return (
    <>
      <Container>
        <Typography variant="h4">Teletubbies</Typography>
        <Grid container spacing={2}>
          <Grid item>
            <img src="" alt="1" />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="h5">Tinky Winky</Typography>
              </Grid>
              <Grid item>
                <Box sx={{ display: "flex", alignItems: "center" }}></Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Tele;
