import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function SendFeedback() {
  const [replyName, setReplyName] = useState("");
  const [replyEmail, setReplyEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", replyName);
    console.log("Email:", replyEmail);
    console.log("Feedback:", feedback);
    // Here you could add your logic to submit the feedback to a backend service or API
  };

  return (
    <Container className="my-5">
      <h2 className="mb-2 fw-bold text-success">Send Feedback</h2>
      <div className="row gx-5">
        <div className="col-lg-8">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="replyName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                className="mb-3"
                type="text"
                placeholder="Enter your name"
                value={replyName}
                onChange={(event) => setReplyName(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="replyEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                className="mb-3"
                type="email"
                placeholder="Enter your email"
                value={replyEmail}
                onChange={(event) => setReplyEmail(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="feedback">
              <Form.Label>Your Feedback</Form.Label>
              <Form.Control
                className="mb-3"
                as="textarea"
                rows={5}
                placeholder="Enter your feedback"
                value={feedback}
                onChange={(event) => setFeedback(event.target.value)}
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>

      <div className="mt-5 text-center">
        <h3 className="mb-4 text-success">We'd love to hear from you!</h3>
        <p>
          If you have any questions or comments, please don't hesitate to
          contact us at{" "}
          <a href="mailto:feedback@kitchensecret.com">
            feedback@kitchensecret.com
          </a>
          .
        </p>
      </div>
    </Container>
  );
}

export default SendFeedback;
