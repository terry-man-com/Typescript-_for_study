export const test = () => {

    // const name:string = "Mike" // string
    // const age:number = 25; // number
    // const isStudent:boolean = false; // boolean
    // const hobbies:string[] = ["Reading", "Coding", "Gaming"]; // array
    // const address:object = {
    //     street: "123 Main St",
    //     city: "Los Angeles",
    //     state: "CA"
    // }; //object
    // const today:Date = new Date(); //date
    // const none:null = null; //null
    // const notDefined:undefined = undefined; //undefined
    // const random: any = "Hello World"; //any
    // const gender: "male" | "female" = "male"; //union
    // const value: string | number | null = "Hello World"; //union
    // // オプション引数
    // const reverseArray = (arr: string[], hatTom?:boolean): string[] => {
    //     const reverseArray:string [] = [];
    //     let index:number = arr.length -1;
    //     while(index >= 0) {
    //         reverseArray.push(arr[index]);
    //         index--;
    //     }

    //     if(hatTom) {
    //         reverseArray.push("Tom");
    //     }
    //     return reverseArray;
    // }
    // console.log(reverseArray(["a", "b", "c"], true));
    interface UserProps {
        userID: Number;
        name: String;
        age: Number;
        email: String;
        isActive: Boolean;
    }

    interface AdminUser extends UserProps {
        roll:string;
    }
}