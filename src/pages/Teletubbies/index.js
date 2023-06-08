import React, { useEffect, useState } from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import {getCurrenTeletubbyData} from "api"

const Teletubbies = () => {
 
  const [teletubbies, setTeletubbies] = useState([]);
  const [visibleTeletubbies, setVisibleTeletubbies] = useState(20);

  const getTeletubbies = async () => {
    try {
      const response = await getCurrenTeletubbyData();
      setTeletubbies(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTeletubbies();
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        setVisibleTeletubbies(visibleTeletubbies + 20);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleTeletubbies]);

  return (


      <Container>
        <Grid>
          <Typography
            variant="h2"
            sx={{
              border: "3px solid",
              borderColor: "primary.main",
              color: "Blue",
              padding: 4,
              boxShadow: 3,
            }}
            mt={4}
            mb={3}
          >
            Teletubbies
          </Typography>
        </Grid>
        {teletubbies.slice(0, visibleTeletubbies).map((teletubby, index) => (
          <Grid key={index}>
            <>
              <Grid
                container
                alignItems="center"
                sx={{
                  border: "2px solid",
                  borderColor: "success.main",
                  boxShadow: 2,
                }}
                p={2}
                my={2}
                direction={`${index % 2 ? "row-reverse" : ""}`}
              >
                <Grid item xs={12} md={3} lg={3}>
                  <div className="img-container">
                    <img
                      src={teletubby.image_url}
                      alt={teletubby.image_url}
                      style={{
                        width: "180px",
                        height: "180px",
                        padding: "auto",
                      }}
                    />
                  </div>
                </Grid>
    <Container>
      <Grid>
        <Typography
          variant="h2"
          sx={{
            border: "3px solid",
            borderColor: "primary.main",
            color: "Blue",
            padding: 4,
            boxShadow: 3,
          }}
          mt={4}
          mb={3}
        >
          Teletubbies
        </Typography>
      </Grid>
      {teletubbies.map((teletubby, index) => (
        <Grid key={index}>
          <>
            <Grid
              container
              alignItems="center"
              sx={{
                border: "2px solid",
                borderColor: "success.main",
                boxShadow: 2,
              }}
              p={2}
              my={2}
              direction={`${index % 2 ? "row-reverse" : ""}`}
            >
              <Grid item xs={12} md={3} lg={3}>
                <div className="img-container">
                  <img
                    src={teletubby.image_url}
                    alt={teletubby.image_url}
                    style={{
                      width: "180px",
                      height: "180px",
                      padding: "auto",
                    }}
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={9} lg={9}>
                <Grid component="div">
                  <Typography
                    variant="h4"
                    component="div"
                    align="left"
                    sx={{ px: 2, my: 1 }}
                  >
                    {teletubby.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{ px: 2, my: 1 }}
                  >
                    {teletubby.description}
                  </Typography>
                  <Grid container spacing={2} justifyContent="flex-start">
                    {teletubby.traits.map((item, key) => {
                      return (
                        <Grid item key={key} my={1}>
                          <Paper variant="outlined" sx={{ p: 1 }}>
                            {item}
                          </Paper>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </>
        </Grid>
      ))}
    </Container>
  );
};

export default Teletubbies;
