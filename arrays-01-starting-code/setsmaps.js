const ids = new Set(['Good','Evening','Sir']);
ids.add(2);

for (const entry of ids.entries()) {
    console.log(entry);
}

for (const value of ids.values()) {
    console.log(value);
    
}

console.log(ids);
