import React, { useState } from "react";
import "./SMARTGoal.css";
import { Button, Modal, Typography, Box } from "@material-ui/core";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const goalStyle = {
  border: "2px solid #FF0000",
};

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

  const [showButton, setShowButton] = useState(true);

  const toggleAdd = () => {
    setAddGoal(!addGoal);
    setShowButton(!showButton);
  };

  //Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ul>
        {goalArr.map((goal) => {
          return <li>{goal}</li>;
        })}
      </ul>
      <Typography variant="h3">{goal} </Typography>
      <br />
      <Button variant="contained" onClick={handleOpen}>
        Set New Goal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {showButton ? (
              <Button onClick={toggleAdd}>Click to edit your goal</Button>
            ) : null}
            {addGoal ? (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={goal}
                  placeholder="Think S.M.A.R.T."
                  onChange={handleChange}
                />
                <br />
              </form>
            ) : null}
          </Typography>
          <Button variant="contained" type="submit">
            Add Goal
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form>
              <label>
                Enter Here:
                <input type="text" name="name" />
              </label>
              <input className="goalOfTheWeek" type="submit" value="Submit" />
            </form>
          </Typography> */}
        </Box>
      </Modal>
    </div>
    // <div style={{ flexDirection: "column", display: "flex" }}>
    //   <input placeholder="goal" onChange={(e) => setGoal(e.target.value)} />
    //   <input
    //     placeholder="category"
    //     onChange={(e) => setCategory(e.target.value)}
    //   />
    //   <button onClick={() => handleInput()}>Input</button>
    //   {category ? <p>Welcome {category}</p> : ""}
    // </div>
  );
}
export default SMARTGoal;
