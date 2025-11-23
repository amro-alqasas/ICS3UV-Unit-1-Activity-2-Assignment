// index.ts
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

// simulate user input for features (for example purposes)
const selectedFeatures = ["yes", "no", "yes", "yes"]; // Replace with actual user input in a real scenario

// ask each feature using a predefined list (simulating user input here)
for (let i = 0; i < FEATURES.length; i++) {
  const ans = selectedFeatures[i]; // This would be user input, but we're simulating it here
  if (ans === "yes") {
    totalCost += FEATURES[i].cost;
    selectedLines.push(`${FEATURES[i].name.padEnd(50)}${FEATURES[i].cost.toFixed(2)}`);
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
