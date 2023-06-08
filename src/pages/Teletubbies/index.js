import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  Avatar,
} from "@mui/material";
import teletubbiesData from "../../Data/teletubbies.json";

const Tele = () => {
  const [teletubbies, setTeletubbies] = useState([]);

  useEffect(() => {
    // Load the first 20 Teletubbies on mount
    setTeletubbies(teletubbiesData.slice(0, 20));
  }, []);

  function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // Load the next 20 Teletubbies
      const startIndex = teletubbies.length;
      const endIndex = startIndex + 20;
      setTeletubbies([
        ...teletubbies,
        ...teletubbiesData.slice(startIndex, endIndex),
      ]);
    }
  }

  useEffect(() => {
    // Add scroll listener on mount
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Remove scroll listener on unmount
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div>
      <Container>
        <Grid>
          <Typography
            variant="h2"
            sx={{
              border: "2px solid",
              borderColor: "primary.main",
            }}
            mt={4}
            mb={3}
          >
            Teletubbies
          </Typography>
        </Grid>
        {teletubbies.map((teletubby, index) => (
          <Grid
            container
            sx={{
              border: "2px solid",
              borderColor: "success.main",
            }}
            p={2}
            my={2}
            key={index}
          >
            {index % 2 === 0 ? (
              <>
                <Grid item xs={12} md={6} lg={2}>
                  <div className="img-container">
                    <img
                      src="1.jpg"
                      alt={teletubby.image_url}
                      style={{
                        width: "100%",
                        height: "100%",
                        paddingTop: "30px",
                      }}
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
                      {teletubby.name}
                    </Typography>
                    <Typography variant="body1" component="div" sx={{ px: 2 }}>
                      {teletubby.description}
                    </Typography>
                    <div
                      className="button-container"
                      align="left"
                      sx={{ my: 2 }}
                    >
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
              </>
            ) : (
              <>
                 <Grid item xs={12} md={6} lg={10}>
                  <Grid component="div">
                    <Typography
                      variant="h4"
                      component="div"
                      align="left"
                      sx={{ px: 2 }}
                    >
                      {teletubby.name}
                    </Typography>
                    <Typography variant="body1" component="div" sx={{ px: 2 }}>
                      {teletubby.description}
                    </Typography>
                    <div
                      className="button-container"
                      align="left"
                      sx={{ my: 2 }}
                    >
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
                <Grid item xs={2}>
                  <Avatar
                    alt="Remy Sharp"
                    variant="square"
                    src={teletubby.image_url}
                    sx={{ width: "150px", height: "150px" }}
                  />
                </Grid>
              </>
            )}
          </Grid>
        ))}
      </Container>
    </div>
  );
};

export default Tele;
