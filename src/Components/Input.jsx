import React from "react";
import axios from "axios";

import { Typography, Box } from "@mui/material";
import { Form, Button } from "react-bootstrap";

class InputMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      message: "",
      createdAt: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    let { name, message } = this.state;
    axios
      .post(
        "https://saysomething-server-project.vercel.app/api/message",
        {
          name: name,
          message: message,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        console.log("data was successfully added");
      })
      .catch((err) => {
        alert("You cannot sent the message");
      });
    e.preventDefault();
  }

  render() {
    let { name, message } = this.state;

    return (
      <div className="input-form">
        <Box
          sx={{
            mt: 2,
            mb: 5,
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: 50,
                sm: 60,
                md: 70,
                lg: 80,
                xl: 90,
              },
              mb: 2,
              color: "tomato",
            }}
            variant="h2"
          >
            Say<b>Something</b>
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: 20,
                sm: 30,
                md: 30,
                lg: 30,
                xl: 40,
              },
            }}
            variant="h5"
          >
            You can say anything, here 🤙
          </Typography>
        </Box>
        <Box
          component={"div"}
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
            pl: 3,
            pr: 3,
            border: "solid tomato",
            borderRadius: "20px",
            textAlign: "left",
          }}
        >
          <Form className="w-100" onSubmit={this.handleSubmit}>
            <Form.Group className="mb-2 mt-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                If name is blank, you'll be recognized as "Anonymous"
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your message"
                name="message"
                value={message}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Button
              size="lg"
              variant="dark"
              type="submit"
              value="submit"
              className="mb-4"
            >
              Submit
            </Button>
          </Form>
        </Box>
      </div>
    );
  }
}

export default InputMessage;
