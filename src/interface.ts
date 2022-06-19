interface Course {
    title: string
    description: string
    createdAt: Date
    updatedAt: Date
    price?: number
    currency?: string
    isActive: boolean
}

const webCourse: Course = {
    title: 'Type Script',
    description: 'A course about typescript',
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 10,
    currency: 'TL',
    isActive: true
}


//Extends Interfaces

interface BaseCourse {
    title: string
    description: string
    createdAt: Date
    updatedAt: Date
    price: number
    currency: string
    isActive: boolean
}











