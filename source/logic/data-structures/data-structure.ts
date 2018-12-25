export default class DataStructure<T> {
    protected _count: number;

    public constructor() {
        this._count = 0;
    }

    public get count(): number {
        return this._count;
    }

    public set count(value: number) {
        this._count = value;
    }

    public isEmpty(): boolean {
        return this._count == 0;
    }

    protected shift(array: T[]): void {
        for (let i: number = array.length - 1; i > 0; i--) {
            array[i] = array[i-1];
        }
    }
}