export class Todo {
    id: number;
    label: string = '';
    isCompleted: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}