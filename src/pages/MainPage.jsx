import React, { useState } from "react";

// Material UI
// import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";
import NormalButton from "../components/NormalButton";
import NormalTextField from "../components/NormalTextField";
import { useHistory } from "react-router-dom";

//helpers
import CalculatePay from "../helpers/CalculatePay";

// export function reducer(state, action) {
//   switch (action.type) {
//     case "SET_TEXTFIELD":
//       return {
//         ...state,
//         textFieldStr: action
//       };
//     case "TOGGLE_BUTTON":
//       return {
//         ...state,
//         buttonBool: !state.buttonBool
//       };
// }

const initialState = {
  duration: 0,
  otLimit: 0,
  basicRate: 0,
  otRate: 0,
  pay: 0
}

export default function MainPage() {
  let history = useHistory();

  const handleSecond = () => history.push("/Second");

  const [pageState, setPage] = useState(initialState);

  const handleDuration = (value) => {
    setPage(prevState => {
      const { otLimit, basicRate, otRate } = prevState;
      return {
        ...prevState,
        duration: value,
        pay: CalculatePay(value, otLimit, basicRate, otRate)
      }
    })
  };

  const handleOTlimit = (value) => {
    setPage(prevState => {
      const { duration, basicRate, otRate } = prevState;
      return {
        ...prevState,
        otLimit: value,
        pay: CalculatePay(duration, value, basicRate, otRate)

      }
    })
  };
  
  const handleBasicRate = (value) => {
    setPage(prevState => {
      const { duration, otLimit, otRate } = prevState;
      return {
        ...prevState,
        basicRate: value,
        pay: CalculatePay(duration, otLimit, value, otRate)
      }
    })
  };

  const handleOTrate = (value) => {
    setPage(prevState => {
      const { duration, otLimit, basicRate } = prevState;
      return {
        ...prevState,
        otRate: value,
        pay: CalculatePay(duration, otLimit, basicRate, value)
      }
    })
  };


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
          <Box width="100%" mx="auto" mt={1} pt={0.5} pb={5} display="flex" justifyItems="center" flexDirection="column">
            <ThemeProvider theme={theme}>
              <Typography variant="h2">
                  Pay Calculator
              </Typography>
              <NormalTextField title="Shift Duration" value={pageState.duration} onChange={(e) => handleDuration(e.target.value)}/>
              <NormalTextField title="Overtime Hour Limit" value={pageState.otLimit} onChange={(e) => handleOTlimit(e.target.value)}/>
              <NormalTextField title="Basic Pay Rate" value={pageState.basicRate} onChange={(e) => handleBasicRate(e.target.value)}/>
              <NormalTextField title="Overtime Pay Rate" value={pageState.otRate} onChange={(e) => handleOTrate(e.target.value)}/>
              <Typography variant="h4">
                Your pay is : {pageState.pay}
              </Typography>
            </ThemeProvider>
          </Box>
      </div>
    </React.Fragment>
  );
}
