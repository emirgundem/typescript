
//Basic Types
let id: number = 5

let company: string = "test"

let isPublished: boolean = true

let x: any = 'Hello'

let age:number = 25

let ids: number[] = [1,2,3,4,5]

let arr: any[] = [1,true,'hello']



//Tuple

let person: [number,string,boolean] = [1,'emir',true]

//Tuple Array

let employee: [number,string][]

employee = [
    [1,'ABC'],
    [2, 'BCA'],
    [3, 'CEF']
]


//Union
let pid: number | string
pid = 2
pid = "2"



//Enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

//Objects

type User ={
   id: number,
   name: string
}

const user: User = {
    id:1,
    name:'john'
}











