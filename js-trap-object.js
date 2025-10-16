
function trapObject(obj, fn) {
    return new Proxy(obj, {
        get(tar, key) {
            val = tar[key]
            fn("get", key, val)
            return val
        },
        set(tar, ke, v ){
            tar[ke] = v
            return true
        }
    })
}


const logger = (action, key, value, newValue) => {
    if (action === "get") {
        console.log(`Accessed ${key}: ${value}`);
    } else if (action === "set") {
        console.log(`Modified ${key}: ${value} → ${newValue}`);
    }
};

const obj = trapObject({ name: "Alice", age: 25 }, logger);

console.log(obj.name); // Logs: Accessed name: Alice
obj.age = 30; // Logs: Modified age: 25 → 30
console.log(obj.age); // Logs: Accessed age: 30

// $ node main.js
// Accessed name: Alice
// Modified age: 25 → 30
// Accessed age: 30