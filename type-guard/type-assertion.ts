type User = { username: string; address: { zipcode: string; town: string; } };

const str = `{"username": "patty", "town": "Maple Town"}`;
const date: unknown = JSON.parse(str);
const user = date as User;

console.log(user.address.town); // TypeError: Cannot read property 'town' of undefined
