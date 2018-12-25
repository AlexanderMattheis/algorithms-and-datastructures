import DataStructure from "./data-structure";

export default class FiniteStructure<T> extends DataStructure<T> {
    protected _array: T[];
    protected readonly _size: number;

    public constructor(size: number) {
        super();
        this._array = new Array(size);
        this._size = size;
    }

    public get size(): number {
        return this._size;
    }
}