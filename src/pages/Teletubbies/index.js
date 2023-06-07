import React, { useEffect, useState } from "react";
import { Container, Grid, Paper, Button, Typography } from "@mui/material";
import teletubbiesData from "../../Data/teletubbies.json";

function Tele() {
  return (
    <div className="root">
      <Paper className="">
        <Typography variant="h1" component="div">
          Title
        </Typography>
      </Paper>
      <Container>
        <Grid
          container
          className="row"
          sx={{ border: "1px solid black" }}
          my={3}
        >
          <Grid item xs={12} md={6} lg={2}>
            <div className="img-container">
              <img
                src="data:image/jpeg;base64,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"
                alt="sdfsfsd"
                style={{ width: "100%", height: "100%", paddingTop: "30px" }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={10}>
            <Grid component="div">
              <Typography
                variant="h4"
                component="div"
                align="left"
                sx={{ px: 2 }}
              >
                name
              </Typography>
              <Typography variant="body1" component="div" sx={{ px: 2 }}>
                description:Dipsy is the second Teletubby with an antenna that
                refers to a dipstick because of his name. Dipsy's skin tone is
                slightly darker than the other Teletubbies, implying that he is
                black. He is jolly and likes talking to himself. He wears a
                white hat with black cow spots.
              </Typography>
              <div className="button-container" align="left" sx={{ my: 2 }}>
                <Button variant="outlined" color="primary" sx={{ mx: 2 }}>
                  traits1
                </Button>
                <Button variant="outlined" color="primary" sx={{ my: 2 }}>
                  traits2
                </Button>
                <Button variant="outlined" color="primary" sx={{ mx: 2 }}>
                  traits3
                </Button>
                <Button variant="outlined" color="primary">
                  traits4
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Tele;
