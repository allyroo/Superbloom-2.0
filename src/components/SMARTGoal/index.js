import React, { useState } from "react";
import "./SMARTGoal.css";
import { Button, Modal } from "react-bootstrap";
// import { Button, Modal, Typography, Box } from "@material-ui/core";
// import {
//   createTheme,
//   responsiveFontSizes,
//   ThemeProvider,
// } from "@mui/material/styles";

// let theme = createTheme();
// theme = responsiveFontSizes(theme);

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// const goalStyle = {
//   border: "2px solid #FF0000",
// };

function SMARTGoal() {
  const [addGoal, setAddGoal] = useState(false);
  // const [category, setCategory] = useState("Nutrition");
  const [goalArr, setGoalArr] = useState([]);
  const [goal, setGoal] = useState("");

  const handleChange = (e) => {
    setGoal(e.target.value);
  };

  const handleSubmit = (e) => {
    setGoalArr((arr) => [...arr, goal]);
    e.preventDefault();
    setGoal("");
  };


  //Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ul>
        {goalArr.map((goal) => {
          return <li>{goal}</li>;
        })}
      </ul>
      <div className="sGoal">{goal} </div>
      <br />
      <Button variant="light" onClick={handleOpen}>
        Click to edit your SMART goal
      </Button>

      <Modal
        show={open}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>What's your goal for the week?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          S - Specific
          <br />
          M - Measurable
          <br />
          A - Achievable
          <br />
          R - Relevant
          <br />
          T - Time-based
          <br />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={goal}
              placeholder="Think S.M.A.R.T."
              onChange={handleChange}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>

    // <div>

    // <ul>
    //   {goalArr.map((goal) => {
    //     return <li>{goal}</li>;
    //   })}
    // </ul>
    // <Typography variant="h4">{goal} </Typography>
    //     <br />
    //     <Button variant="contained" onClick={handleOpen}>
    //       Set New Goal
    //     </Button>
    //     <Modal
    //       open={open}
    //       onClose={handleClose}
    //       aria-labelledby="modal-modal-title"
    //       aria-describedby="modal-modal-description"
    //     >
    //       <Box sx={style}>
    //         <Typography id="modal-modal-title" variant="h6" component="h2">
    // {showButton ? (
    //   <Button onClick={toggleAdd}>Click to edit your goal</Button>
    // ) : null}
    // {addGoal ? (
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       value={goal}
    //       placeholder="Think S.M.A.R.T."
    //       onChange={handleChange}
    //     />
    //   </form>
    // ) : null}
    //         </Typography>
    //         <Button variant="contained" type="submit" onClick={handleClose}>
    //           Add Goal
    //         </Button>

    //       </Box>
    //     </Modal>

    // </div>
  );
}
export default SMARTGoal;
