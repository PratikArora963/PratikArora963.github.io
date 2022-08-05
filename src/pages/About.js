import React from "react";
import { Box, Typography } from "@mui/material";

const About = ({ setShowPolicy }) => {
  return (
    <Box
      sx={{
        background: "transparent",
        color: "white",
        padding: "0 1rem",
        textAlign: "justify",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "space-between",
        height: "calc(100vh - 64px)",
      }}
    >
      <Typography
        gutterBottom
        variant="p"
        component="div"
        style={{ paddingTop: "2rem", fontSize: "1.1rem" }}
      >
        Skill Based Games is a company Registered in Gondia Maharashtra. With
        his team, our founder Mr. Pratik Arora has been keenly involved in
        developing the favourite Indian games in 3D. We bring you back your
        childhood games upgraded with technology. Enjoy nostalgia with our 3D
        Games…
      </Typography>

      <Typography
        gutterBottom
        variant="h5"
        component="p"
        style={{ fontSize: "1.2rem", letterSpacing: "1.5px" }}
      >
        <b>Contact:</b>
        <br /> +91 84850 46957
        <br />
        <br />
        <b>Email:</b>
        <br /> arorapratik963@gmail.com
        <br />
        <br />
        <b>Address:</b>
        <br /> SBG Office, Near Star Fine Arts, Railtoli, Gondia - 441601
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "space-between",
          width: "100%",
          paddingBottom: "3rem",
        }}
        onClick={() => setShowPolicy(true)}
      >
        <Typography sx={{ minWidth: 100, fontSize: "1.1rem" }}>
          Privacy Policy
        </Typography>
        <Typography sx={{ minWidth: 100, fontSize: "1.1rem" }}>T&C</Typography>
        <Typography sx={{ minWidth: 100, fontSize: "1.1rem" }}>
          Refund Policy
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
