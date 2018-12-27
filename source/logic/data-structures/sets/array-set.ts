import DataStructure from "../data-structure";
import {Equality} from "../../../system/typing/equality";

export default class ArraySet<T extends Equality<T>> extends DataStructure<T> {
    private _array: T[];

    public constructor() {
        super();
        this._array = [];
    }

    public add(element: T): void {
        if (this.indexOf(this._array, element) >= 0) {
            this._array.push(element);
            this.count++;
        }
    }

    private indexOf(array: T[], element: T): number {
        for (let i: number = 0; i < array.length; i++) {

            if (array[i].equals(element)) {
                return i;
            }
        }

        return -1;
    }

    public clear(): void {
        this._array = [];
    }

    public contains(element: T) {
        return this.indexOf(this._array, element) >= 0;
    }
}