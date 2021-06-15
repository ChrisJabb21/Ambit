export class Todo {
    id!: number;
    title: string = '';
    isComplete: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
