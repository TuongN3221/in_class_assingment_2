// Task 1 
let products = [
    {name: "Laptop", price: 1200, category: "Electronics"},// T
    {name: "Notepad", price: 5, category: "Stationery"},//F
    {name: "Headphones", price: 100, category: "Electronics"}//F
];

function getProductByCategory(products, category) {
    return products.filter(products => products.category === category);
};

console.log(getProductByCategory(products, "Electronics"));

// Task 2
