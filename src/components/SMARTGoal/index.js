import React, { useState } from "react";
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

function SMARTGoal() {
  const [goal, setGoal] = useState("I will drink 5 glasses of water each day.");
  const [category, setCategory] = useState("Nutrition");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {goal} <br /> {category}
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </Typography>
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
