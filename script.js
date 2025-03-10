// Creating the database
use("mydatabase");

// Inserting multiple products
db.products.insertMany([
    { name: "Headphones", category: "Electronics", price: 999, stock: 10 },
    { name: "Monitor", category: "Electronics", price: 15000, stock: 25 },
    { name: "Keyboard", category: "Electronics", price: 2999, stock: 50 },
    { name: "Shoes", category: "Fashion & Apparel", price: 9999, stock: 15 },
    { name: "Watch", category: "Accessories", price: 49000.89, stock: 5 }
]);

// Finding products in a collection
db.products.find({ category: "Electronics" }); //can use .pretty() for more readability

// Updating single product stock
// db.products.updateOne(
//     { name: "Monitor" },
//     { $set: { stock: 15 } }
// );

// Updating mutiples stock
db.products.updateMany(
    { category: { $in: ["Electronics", "Accessories"] } }, 
    { $inc: { stock: 15 } }
);


// Deleting out of stock products
db.products.deleteMany({ stock: { $lte: 0 } });
