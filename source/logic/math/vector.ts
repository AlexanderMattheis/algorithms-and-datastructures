export default class Vector {
    private _x: number;
    private _y: number;

    public constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    public equals(element: Vector) {
        if (this.x === element.x && this.y === element.y) {
            return true;
        }

        return false;
    }

    public get x(): number {
        return this._x;
    }

    public get y(): number {
        return this._y;
    }

    public set x(value: number) {
        this._x = value;
    }

    public set y(value: number) {
        this._y = value;
    }
}