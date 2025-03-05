import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@mui/material";

const OrderPopup = ({ open, onClose, onConfirm, selectedItem }) => {
  const [name, setName] = useState("");

  const handleConfirmOrder = () => {
    if (name.trim() === "") {
      alert("Please enter your name!");
      return;
    }
    onConfirm(name);
    setName(""); // Reset input after confirmation
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Order {selectedItem?.name}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Enter your name"
          fullWidth
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleConfirmOrder} variant="contained" color="primary">
          Confirm Order
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderPopup;
