import React from "react";
import InputMessage from "./Components/Input";

import "./App.css";
import MessageBox from "./Components/MessageBox";
import { Typography } from "@mui/material";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <InputMessage />
        <MessageBox />
        <footer>
          <Typography
            variant="p"
            sx={{
              color: "#eaeaea",
            }}
          >
            © 2022 Imanuel Antonio. All rights reserved
          </Typography>
        </footer>
      </div>
    );
  }
}

export default App;
