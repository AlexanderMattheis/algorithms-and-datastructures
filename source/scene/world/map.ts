import Vector from "../../logic/math/vector";

export default class Map {
    private _collision: boolean[][];

    private readonly _height: number;
    private readonly _width: number;

    public constructor(height: number, width: number) {
        this._height = height;
        this._width = width;
    }

    public get collision(): boolean[][] {
        return this._collision;
    }

    public set collision(value: boolean[][]) {
        this._collision = value;
    }

    public isBlocked(position: Vector): boolean {
        if (this.isOutOfBounds(position)) {
            return true;
        }

        return this._collision[position.x][position.y];
    }

    public isOutOfBounds(position: Vector): boolean {
        return position.x < 0 || position.y < 0 || position.x >= this._width || position.y >= this._height;
    }
}