export class Recipe {
    _id: string;
    name: string;
    typeOfDishes: string;
    elements: {
        stepName: string;
        ingredients: string[];
    }[];
    steps: string[];
    img: string;
}
