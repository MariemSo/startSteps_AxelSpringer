//! Types
//* type is a keyword in TypeScript that we can use to define the shape of data

    // Basic Types
        type StringType = string;
        type BooleanType = boolean;
        type NumberType = number;

        // Arrays
        type ArrayStringType = string[];
        type ArrayNumType = number[];

        // Tuples
        //! Tuples are like advanced arrays with extra features 
        //! Tuples enforce fixed lengths, provide type safety, and allow heterogeneous data
        let tup: [string, number];
        type MyNamedTuple = [name: string, age: number, isAdmin: boolean];

        // Enum
        //! Enums allow us to define a set of named constants. TypeScript provides both numeric and string-based enums.
        enum Color {
            Red,
            Green,
            Blue
        }

        enum Status {
            Active = 'ACTIVE',
            Inactive = 'INACTIVE',
            Pending = 'PENDING'
        }

    // Advanced Types

        // Union Type Array
        type UnionArray = (string | number)[];

        // Interface
        interface Person {
            name: string;
            age: number;
            isAdmin?: boolean; // Optional property
        }

        interface EmployeeType {
            employeId: number;
            department: string;
        }
        // Union Type
        //! Union types allow a variable to hold more than one type
        type StringOrNumber = string | number;

        // Intersection Type
        //! Intersection types allow you to combine multiple types into one
  
        type Admin = Person & EmployeeType; // Intersection of Person and Employee

        // Type Aliases
        //! Type aliases in TypeScript allow you to create a new name for a type
        type User = {
            username: string;
            password: string;
            email: string;
        };

        type ID = number | string;

        const exampleUser: User = {
            username: 'JohnDoe',
            password: 'password123',
            email: 'john.doe@example.com'
        };

        const exampleAdmin: Admin = {
            name: 'Jane Smith',
            age: 30,
            employeId: 12345,
            department: 'HR'
        };

        const exampleUnionArray: UnionArray = [1, 'two', 3, 'four'];
