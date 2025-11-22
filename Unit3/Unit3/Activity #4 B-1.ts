// Program to calculate the cost of a car with optional features (Deno-friendly using prompt)

const BASE_PRICE: number = 25000;
const FEATURES: { name: string; cost: number }[] = [
  { name: "Floor mats", cost: 500 },
  { name: "Navigation system", cost: 1000 },
  { name: "Heated leather seats", cost: 500 },
  { name: "5-Year extended warranty", cost: 2500 },
];
const TAX_RATE: number = 0.13;

let totalCost: number = BASE_PRICE;
const selectedLines: string[] = [];

// show base price first
console.log(`Base Price${"".padEnd(46)}${BASE_PRICE.toFixed(2)}`);

// ask each feature using Deno's prompt()
for (const feature of FEATURES) {
  const ans = (prompt(`Would you like ${feature.name} for $${feature.cost}? (yes/no): `) ?? "").trim().toLowerCase();
  if (ans === "yes") {
    totalCost += feature.cost;
    selectedLines.push(`${feature.name.padEnd(50)}${feature.cost.toFixed(2)}`);
  }
}

// calculate tax and final cost
const tax: number = totalCost * TAX_RATE;
const finalCost: number = totalCost + tax;

// print selected features (if any) and summary
for (const line of selectedLines) {
  console.log(line);
}
console.log(`13% Taxes${"".padEnd(51)}${tax.toFixed(2)}`);
console.log(`Final cost of car${"".padEnd(42)}${finalCost.toFixed(2)}`);