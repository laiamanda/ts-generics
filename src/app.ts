const names: Array<string> = [];
names[0].split(' ');

// const promise = new Promise<number>((resolve,reject) => {
//     setTimeout(() =>{
//         resolve(10)
//     }, 2000 );
// });

// promise.then(data => {
//     // data.split(' ');
// });

// function merge<T, U>(objA: T, objB: U){
//     return Object.assign(objA, objB);
// }

// const mergeObj = merge({name:'Amanda'}, {age: 22});
// console.log(mergeObj.age);

function merge <T extends object, U extends object>(objA: T, objB: U){
    return Object.assign(objA, objB);
}
const mergeObj = merge({name:'Amanda', hobbies: ['sports']}, {age: 22});
console.log(mergeObj);

//////////////////////////////////////////////////////////////////////////////
interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string]{
    let descriptionText = 'Got no value';
    if(element.length === 1) {
        descriptionText = 'Got 1 element'
    } else if (element.length > 1) {
        descriptionText = "Got " + element.length + " element."
    }
    return [element, descriptionText ];
}

console.log(countAndDescribe('Hi There'));
console.log(countAndDescribe(['Sports', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
    ){
    return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Amanda'} , 'name');
///////////////////////////////////////////////
/* class DataStorage<T extends string | number | boolean>{
    private data: T[] = [];

    addItem(item: T){
        this.data.push(item);
    }
    removeItem(item: T){
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems(){
        return[...this.data];
    }
}
const textStorage = new DataStorage<string>();
textStorage.addItem('Amanda');
textStorage.addItem('Johnny');
textStorage.removeItem('Amanda');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number | string>(); */

// const objStorage = new DataStorage<object>();
// objStorage.addItem({name:'Amanda'});
// objStorage.addItem({name: 'Johnny'});

// objStorage.removeItem({name:'Amanda'});
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date,
): CourseGoal{
    let courseGoal: Partial <CourseGoal>  = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const nameReadOnly: Readonly<string[]> = ['Amanda', 'John'];
// nameReadOnly.push('Beth');
// nameReadOnly.pop();

class DataStorage {
    private data: ( string | number | boolean)[] = [];

    addItem(item: ( string | number | boolean)){
        this.data.push(item);
    }
    removeItem(item: ( string | number | boolean)){
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems(){
        return[...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Amanda');
textStorage.addItem('Johnny');
textStorage.removeItem('Amanda');
console.log(textStorage.getItems());

const numberStorage = new DataStorage();