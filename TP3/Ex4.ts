// quest1
interface User {
    name: string;
    id: number;
    email?: string;
    readonly isAdmin: boolean;
}
const user1: User = {
    name: "John",
    id: 1,
    isAdmin: false
};
console.log(user1);

// quest2
interface Admin extends User {
    permissions: string[];
}
const admin1: Admin = {
    name: "Alice",
    id: 2,
    isAdmin: true,
    permissions: ["read", "write", "delete"]
};
console.log(admin1);
