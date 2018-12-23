export default class Stack<T> {
    private readonly _array: T[];  // means that the array is only assigned in the constructor
    private readonly _size: number;
    private _top: number;

    public constructor(size:number) {
        this._array = new Array(size);
        this._size = size;
        this._top = 0;
    }

    public isEmpty(): boolean {
        return this._top == 0;
    }

    public push(element:T): void {
        if (this._top < this._size) {
            this._array[this._top++] = element;
        }
    }

    public pop(): T {
        if (this._top >= 0) {
            return this._array[this._top--] = undefined;
        }

        return null;
    }

    public peek(): T {
        if (this._top >= 0) {
            return this._array[this._top];
        }

        return null;
    }
}