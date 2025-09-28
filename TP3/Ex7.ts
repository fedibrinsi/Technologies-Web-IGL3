function identity<T>(value: T): T {
    return value;
}

function getFirst<T>(arr: T[]): T | undefined {
    return arr[0];
}

class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }

    remove(item: T): void {
        this.items = this.items.filter(i => i !== item);
    }
}

interface ApiResponse<T> { 
    data: T;
    error?: string;
}

// === identity examples ===
console.log(identity<string>("Hello"));   // "Hello"
console.log(identity<number>(123));       // 123
console.log(identity<boolean>(true));     // true

// === getFirst examples ===
console.log(getFirst<number>([10, 20, 30]));  // 10
console.log(getFirst<string>(["a", "b"]));    // "a"
console.log(getFirst<boolean>([]));           // undefined

// === Repository with primitive type ===
const numberRepo = new Repository<number>();
numberRepo.add(1);
numberRepo.add(2);
numberRepo.remove(1);
console.log(numberRepo.getAll()); // [2]

// === Repository with object type ===
const userRepo = new Repository<{ id: number; name: string }>();
userRepo.add({ id: 1, name: "Alice" });
userRepo.add({ id: 2, name: "Bob" });
userRepo.remove({ id: 1, name: "Alice" }); // Won't remove due to reference check
console.log(userRepo.getAll()); // Still shows both items

// === ApiResponse examples ===
const successResponse: ApiResponse<string> = {
    data: "Operation successful"
};

const errorResponse: ApiResponse<number[]> = {
    data: [],
    error: "Something went wrong"
};

console.log(successResponse);
console.log(errorResponse);
