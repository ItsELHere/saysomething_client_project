import React from "react";
import axios from "axios";

import { Box, Typography } from "@mui/material";

class MessageBox extends React.Component {
  constructor() {
    super();
    this.state = {
      message: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    setInterval(() => {
      axios
        .get("https://saysomething-server-project.vercel.app/api/message")
        .then((response) => {
          this.setState({ message: response.data, isLoading: false });
        })
        .catch((err) => {
          console.log(`Cant fetch the API ${err}`);
        });
    }, 1000);
  }

  render() {
    let { message, isLoading } = this.state;
    message = message.reverse();

    if (isLoading) {
      return (
        <Box
          sx={{
            width: {
              xs: 300,
              sm: 500,
              md: 600,
              lg: 800,
              xl: 1000,
            },
            height: "500px",
            margin: "0 auto",
            mt: 5,
            pl: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="h5">Please wait...</Typography>
        </Box>
      );
    } else {
      return (
        <div className="message-box mt-5">
          {message.map((data, i) => {
            return (
              <Box
                sx={{
                  width: {
                    xs: 300,
                    sm: 500,
                    md: 600,
                    lg: 800,
                    xl: 1000,
                  },
                  height: "auto",
                  margin: "0 auto",
                  mt: 3,
                  pl: 3,
                  border: "solid tomato",
                  borderRadius: "20px",
                  textAlign: "left",
                }}
                key={i}
              >
                <Typography
                  variant="h4"
                  sx={{ alignContent: "left", mt: 2, mb: 2 }}
                >
                  {data.name}
                </Typography>
                <Typography sx={{ mb: 2 }}>"{data.message}"</Typography>
                <Typography sx={{ mb: 2 }}>{data.createdAt}</Typography>
              </Box>
            );
          })}
        </div>
      );
    }
  }
}

export default MessageBox;
