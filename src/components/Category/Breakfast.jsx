import { useState } from "react";
import { Box, Typography, styled, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@mui/material";
import React from "react";
import LowerNavbar from "../Navbar/LowerNavbar";
import UperFooter from "../Footer/UperFooter";
import LowerFooter from "../Footer/LowerFooter";
import breakfast from "../../DB/breakfast";
import Cards from "./Cards";
import axios from "axios";

const Container = styled(Box)`
  color: white;
  background: #121212e6;
  width: 100%;
  height: 100%;
`;

const Food = styled(Box)`
  background: "#fafdfb";
  padding: 100px 0px;
`;

const Heading = styled(Box)({
  paddingTop: 10,
  marginBottom: 30,
  "& > p": {
    textAlign: "center",
    fontSize: 35,
    fontWeight: 900,
  },
});

const Item = styled(Box)({
  display: "grid",
  gap: 60,
  gridTemplateColumns: "auto auto auto",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: 50,
  "@media (max-width:1188px)": {
    gridTemplateColumns: "auto auto",
  },
  "@media (max-width:772px)": {
    gridTemplateColumns: "auto",
  },
});

const Breakfast = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");

  const handleOrderClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setName(""); // Reset input field
  };

  const handleConfirmOrder = async () => {
    if (name.trim() === "") {
      alert("Please enter your name!");
      return;
    }

    try {
      const orderData = {
        customerName: name, // Store username dynamically
        foodItem: selectedItem.title, // Assuming `item.title` contains the food name
        Price: selectedItem.pay ?? 0,
      };

      console.log("📤 Sending order:", orderData); // Debugging log

      const token = localStorage.getItem("adminToken");

      // const response = await axios.post("http://localhost:5137/api/orders", orderData, {
      const response = await axios.post("https://restaurantadmin.onrender.com/api/orders", orderData, {
        headers: {
          Authorization: `Bearer ${token}` // Pass the token in the Authorization header
        }
      });

      console.log("✅ Order placed successfully:", response.data);
      
      alert(response.data.message); // Show success message
      handleCloseModal(); // Close the pop-up after successful order
      
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <Container>
      <LowerNavbar />
      <Food>
        <Heading>
          <Typography>Morning Delights</Typography>
        </Heading>
        {/* Food Section */}
        <Item>
          {breakfast.map((item) => (
            <div key={item.id} onClick={() => handleOrderClick(item)}>
              <Cards item={item} />
            </div>
          ))}
        </Item>
      </Food>
      <UperFooter />
      <LowerFooter />

      {/* Order Popup Window */}
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>Order {selectedItem?.title}</DialogTitle>
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
          <Button onClick={handleCloseModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleConfirmOrder} variant="contained" color="primary">
            Confirm Order
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Breakfast;

