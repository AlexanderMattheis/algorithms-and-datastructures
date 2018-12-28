import DataStructure from "../data-structure";
import Defaults from "../../../system/defaults";

export default class ArraySet<T> extends DataStructure<T> {
    private _array: T[];

    public constructor() {
        super();
        this._array = [];
    }

    public add(element: T): void {
        if (this.indexOf(this._array, element) === Defaults.Error.notContained) {
            this._array.push(element);
            this.count++;
        }
    }

    private indexOf(array: T[], element: T): number {
        for (let i: number = 0; i < array.length; i++) {

            if (array[i] === element) {
                return i;
            }
        }

        return Defaults.Error.notContained;
    }

    public clear(): void {
        this._array = [];
        this._count = 0;
    }

    public contains(element: T) {
        return this.indexOf(this._array, element) >= 0;
    }
}