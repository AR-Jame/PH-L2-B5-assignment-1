function formatString(input: string, toUpper: boolean = true): string {
    if (toUpper === true || toUpper === undefined) return input.toUpperCase();
    else return input.toLowerCase()
}


interface Item { title: string; rating: number }
function filterByRating(items: Item[]): Item[] {
    return items.filter(item => item.rating >= 4)
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat()
}

class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year
    }

    getInfo() {
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }

}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model
    }
    getModel() {
        console.log(`Model: ${this.model}`);
    }
}


function processValue(value: string | number): number {
    if (typeof value === 'string') return value.length;
    else return value * 2;
}

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null
    let desiredObj: Product = products[0];
    products.forEach(item => {
        if (item.price > desiredObj?.price) desiredObj = item
    })
    return desiredObj
}


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return 'Weekend'
    }
    else return "Weekday"
}

async function squareAsync(n: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        if (n >= 0) {
            setTimeout(() => {
                resolve(n * n)
            }, 1000);
        }
        else {
            reject('Error: Negative number not allowed')
        }
    })
}