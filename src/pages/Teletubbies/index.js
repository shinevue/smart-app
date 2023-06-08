import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Button,
  Avatar,
  TextField,
  InputAdornment,
  Paper,
} from "@mui/material";
import teletubbiesData from "../../Data/teletubbies.json";
import SearchIcon from "@mui/icons-material/Search";

const Tele = () => {
  const [teletubbies, setTeletubbies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Load the first 20 Teletubbies on mount
    setTeletubbies(teletubbiesData.slice(0, 20));
  }, []);

  function handleScroll() {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      searchTerm === ""
    ) {
      // Load the next 20 Teletubbies if search term is empty
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

  const filteredTeletubbies = teletubbies.filter((teletubby) =>
    teletubby.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Container>
        <Grid>
          <Typography
            variant="h2"
            sx={{
              border: "2px solid",
              borderColor: "primary.main",
              color: "Blue",
            }}
            mt={4}
            mb={3}
          >
            Teletubbies
          </Typography>
        </Grid>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search Teletubbies by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: {
              bgcolor: "background.paper",
              borderRadius: 2,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.main",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.light",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "secondary.main",
              },
              "& .MuiOutlinedInput-input": {
                color: "text.primary",
              },
              "& .MuiInputLabel-root": {
                color: "text.secondary",
              },
            },
          }}
        />
        {filteredTeletubbies.map((teletubby, index) => (
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
                    <Grid container spacing={2} justifyContent="flex-start">
                      <Grid item>
                        <Paper variant="outlined" sx={{ p: 1 }}>
                          {teletubby.traits[0]}
                        </Paper>
                      </Grid>
                      <Grid item>
                        <Paper variant="outlined" sx={{ p: 1 }}>
                          {teletubby.traits[1]}
                        </Paper>
                      </Grid>
                      <Grid item>
                        <Paper variant="outlined" sx={{ p: 1 }}>
                          {teletubby.traits[2]}
                        </Paper>
                      </Grid>
                      <Grid item>
                        <Paper variant="outlined" sx={{ p: 1 }}>
                          {teletubby.traits[3]}
                        </Paper>
                      </Grid>
                    </Grid>
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
                    <Grid container spacing={2} justifyContent="flex-start">
                      <Grid item>
                        <Paper variant="outlined" sx={{ p: 1 }}>
                          {teletubby.traits[0]}
                        </Paper>
                      </Grid>
                      <Grid item>
                        <Paper variant="outlined" sx={{ p: 1 }}>
                          {teletubby.traits[1]}
                        </Paper>
                      </Grid>
                      <Grid item>
                        <Paper variant="outlined" sx={{ p: 1 }}>
                          {teletubby.traits[2]}
                        </Paper>
                      </Grid>
                      <Grid item>
                        <Paper variant="outlined" sx={{ p: 1 }}>
                          {teletubby.traits[3]}
                        </Paper>
                      </Grid>
                    </Grid>
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
