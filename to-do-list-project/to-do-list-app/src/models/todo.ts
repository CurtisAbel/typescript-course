export interface Todo {
    id: string;
    todo: string;
    onRemoveToDo?: () => void;
}

export interface Items {
    items: {id:string, todo: string}[];
    onRemoveToDo: (id:string) => void;
}