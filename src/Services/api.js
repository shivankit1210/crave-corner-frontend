import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/orders"; // Change if needed

// Fetch all orders
export const getOrders = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching orders:", error);
        return [];
    }
};

// Create a new order
export const createOrder = async (order) => {
    try {
        const response = await axios.post(API_BASE_URL, order);
        return response.data;
    } catch (error) {
        console.error("Error creating order:", error);
    }
};

// Update an order
export const updateOrder = async (id, updatedOrder) => {
    try {
        await axios.put(`${API_BASE_URL}/${id}`, updatedOrder);
    } catch (error) {
        console.error("Error updating order:", error);
    }
};

// Delete an order
export const deleteOrder = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}/${id}`);
    } catch (error) {
        console.error("Error deleting order:", error);
    }
};
