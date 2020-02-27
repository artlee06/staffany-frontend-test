import React, { useState } from "react";

// Material UI
// import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";

import { useHistory } from "react-router-dom";

export default function SecondPage() {
  let history = useHistory();

  const handleMain = () => history.push("/Main");
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#50D9CD"
      },
      textColor: "#FFF"
    },
    typography: {
      button: {
        textTransform: "none",
        fontWeight: 600,
        color: "white",
        textColor: "#FFF"
      }
    },
    paper: {
      maxWidth: 100
    },
    overrides: {
      // Style sheet name ⚛️
      MuiButton: {
        // Name of the rule
        label: {
          // Some CSS
          // color: "white"
        }
      }
    }
  });
  return (
    <React.Fragment>
      <div>
          <Box width="100%" mx="auto" mt={1} pt={0.5} pb={5}>
            <ThemeProvider theme={theme}>
              <Typography variant="h2">
                  Welcome to the secret second page
              </Typography>
              <Button variant="contained" onClick={handleMain}>
                Go to Main page 
              </Button>
            </ThemeProvider>
          </Box>
      </div>
    </React.Fragment>
  );
}
