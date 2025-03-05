import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/system";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

// Styled Container
const Container = styled(Box)({
  width: "100%",
  backgroundColor: "rgba(18, 18, 18, 0.9)",
  minHeight: "100vh",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const SummaryCard = styled(Card)({
  width: "250px",
  background: "#2D2D2D",
  color: "#fff",
  textAlign: "center",
  padding: "15px",
  margin: "10px",
  borderRadius: "10px",
});

const token = localStorage.getItem("adminToken");

const updateStatus = async (id, status, setOrders) => {
  try {
    await axios.put(
      `https://restaurantadmin.onrender.com/api/orders/update-status/${id}`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
        },
      }
    );
    alert(`Order marked as ${status}!`);
    const response = await axios.get("https://restaurantadmin.onrender.com/api/orders", {
      headers: {
        Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
      },
    });
    setOrders(response.data);
  } catch (error) {
    console.error("Error updating status:", error);
    alert("Failed to update order status.");
  }
};

const deleteOrder = async (id, setOrders) => {
  if (
    window.confirm("Are you sure you want to complete and delete this order?")
  ) {
    try {
      await axios.delete(`https://restaurantadmin.onrender.com/api/orders/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
        },
      });
      alert("Order deleted successfully!");
      const response = await axios.get("https://restaurantadmin.onrender.com/api/orders", {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
        },
      });
      setOrders(response.data);
    } catch (error) {
      console.error("Error deleting order:", error);
      alert("Failed to delete order.");
    }
  }
};

const AdminPanel = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        if (!token) {
          console.error("No token found. User is not authenticated.");
          return;
        }
        const response = await axios.get("https://restaurantadmin.onrender.com/api/orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(response.data);
        setFilteredOrders(response.data);
        setTotalOrders(response.data.length);
        setTotalRevenue(
          response.data.reduce((acc, order) => acc + order.price, 0)
        );
      } catch (error) {
        console.error(
          "Error fetching orders:",
          error.response?.data || error.message
        );
      }
    };
    fetchOrders();
  }, []);

  useEffect(() => {
    let filtered = orders;
    if (searchQuery) {
      filtered = filtered.filter(
        (order) =>
          order.customerName
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          order.foodItem.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (filterStatus) {
      filtered = filtered.filter((order) => order.status === filterStatus);
    }
    setFilteredOrders(filtered);
  }, [searchQuery, filterStatus, orders]);

  const orderStatusCount = {
    Pending: orders.filter((o) => o.status === "Pending").length,
    Processing: orders.filter((o) => o.status === "Processing").length,
    Delivered: orders.filter((o) => o.status === "Delivered").length,
  };

  return (
    <Container>
      <Typography
        variant="h3"
        style={{ color: "#fff", fontWeight: "bold", marginBottom: 20 }}
      >
        Admin Panel - Orders
      </Typography>

      <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
              <SummaryCard>
                <Typography variant="h5">Total Orders</Typography>
                <Typography variant="h4">{totalOrders}</Typography>
              </SummaryCard>
              <SummaryCard>
                <Typography variant="h5">Total Revenue</Typography>
                <Typography variant="h4">₹{totalRevenue}</Typography>
              </SummaryCard>
            </Box>

      <Box display="flex" justifyContent="flex-end" width="100%" marginBottom={2} paddingRight={10}>
        <TextField
          label="Search Orders"
          variant="outlined"
          sx={{ width: "25%", background: "white", borderRadius: "5px" }}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Box>

      <Box display="flex" justifyContent="space-between" width="80%">
        <TableContainer
          component={Paper}
          sx={{ width: "65%", background: "#222", borderRadius: "10px" }}
        >
          <Table>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "white" }}>Order ID</TableCell>
                <TableCell sx={{ color: "white" }}>Customer Name</TableCell>
                <TableCell sx={{ color: "white" }}>Food Item</TableCell>
                <TableCell sx={{ color: "white" }}>Price</TableCell>
                <TableCell sx={{ color: "white" }}>Status</TableCell>
                <TableCell sx={{ color: "white" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell sx={{ color: "white" }}>{order.id}</TableCell>
                  <TableCell sx={{ color: "white" }}>
                    {order.customerName}
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>
                    {order.foodItem}
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>₹{order.price}</TableCell>
                  <TableCell sx={{ color: "white" }}>{order.status}</TableCell>
                  {/* <TableCell>
                    <Button onClick={() => updateStatus(order.id, "Processing", setOrders)}>Change Status</Button>
                    {order.status === "Delivered" && <Button onClick={() => deleteOrder(order.id, setOrders)}>Complete</Button>}
                  </TableCell> */}
                  <TableCell>
                    {order.status === "Pending" && (
                      <Button
                        onClick={() =>
                          updateStatus(order.id, "Processing", setOrders)
                        }
                      >
                        Process
                      </Button>
                    )}
                    {order.status === "Processing" && (
                      <Button
                        onClick={() =>
                          updateStatus(order.id, "Delivered", setOrders)
                        }
                      >
                        Deliver
                      </Button>
                    )}
                    {order.status === "Delivered" && (
                      <Button onClick={() => deleteOrder(order.id, setOrders)}>
                        Complete
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box width="30%">
          <Pie
            data={{
              labels: ["Pending", "Processing", "Delivered"],
              datasets: [
                {
                  data: Object.values(orderStatusCount),
                  backgroundColor: ["#FFA500", "#00BFFF", "#32CD32"],
                },
              ],
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default AdminPanel;
