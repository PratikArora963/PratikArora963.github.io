import React from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  CardActionArea,
  Typography,
} from "@mui/material";
import banner from "../assets/ludo.png";
import playstore from "../assets/playstore.svg";
import appstore from "../assets/appstore.png";

const Home = () => {
  return (
    <Box
      sx={{
        background: "transparent",
        color: "white",
        padding: "0 0.2rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "space-between",
        height: "calc(100vh - 64px)",
      }}
    >
      <Card style={{ marginTop: "0.7rem" }}>
        <CardActionArea>
          <CardMedia component="img" image={banner} alt="snakes and ladder" />
        </CardActionArea>
      </Card>
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        className="mainText"
        style={{ fontSize: "1.6rem", letterSpacing: "2.5px" }}
      >
        For The First Time <br />
        Experience LUDO In 3D
      </Typography>
      <span>
        <img src={playstore} alt="" width={300} height={100} />
        <img src={appstore} alt="" width={230} height={66} />
      </span>
      <Button
        variant="contained"
        style={{
          padding: "0.5rem 3rem",
          fontSize: "1.5rem",
          fontWeight: "500",
          letterSpacing: "1.5px",
          background: "black",
          marginBottom: "3rem",
        }}
      >
        Coming Soon ...
      </Button>
    </Box>
  );
};

export default Home;
