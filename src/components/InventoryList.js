import { v4 } from 'uuid'; 

const inventoryItems = [
    { id: v4(), flavor: "Chocolate", price: 0.75, inStock: 0, popularity: "High" },
    { id: v4(), flavor: "Cherry", price: 1.25, inStock: 0, popularity: "Medium" },
    { id: v4(), flavor: "Mango", price: 1.25, inStock: 0, popularity: "High" },
    { id: v4(), flavor: "Watermelon", price: 0.50, inStock: 0, popularity: "Medium" },
    { id: v4(), flavor: "Kiwi", price: 1.00, inStock: 0, popularity: "Low" },
    { id: v4(), flavor: "Cookies", price: 0.75, inStock: 0, popularity: "High" }
];

export { inventoryItems };