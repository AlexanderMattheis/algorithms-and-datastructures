import PathNode from "../../logic/algorithms/pathfinding/arrangement/path-node";
import Vector from "../../logic/math/vector";

export default class Map {
    private _collision: boolean[][];
    private _nodes: PathNode[][];

    private readonly _height: number;
    private readonly _width: number;

    public constructor(height: number, width: number) {
        this._height = height;
        this._width = width;
        this._nodes = this.getFreshNodes(height, width);
    }

    public get collision(): boolean[][] {
        return this._collision;
    }

    public get nodes(): PathNode[][] {
        return this._nodes;
    }

    public set collision(value: boolean[][]) {
        this._collision = value;
    }

    public set nodes(value: PathNode[][]) {
        this._nodes = value;
    }

    public isBlocked(posX: number, posY: number): boolean {
        if (this.isOutOfBounds(posX, posY)) {
            return true;
        }

        return this._collision[posX][posY];
    }

    public isOutOfBounds(posX: number, posY: number): boolean {
        return posX < 0 || posY < 0 || posX >= this._width || posY >= this._height;
    }

    public getFreshNodes(height: number, width: number): PathNode[][] {
        let nodes: PathNode[][] = [];

        for (let i: number = 0; i < height; i++) {
            nodes[i] = [];

            for (let j: number = 0; j < width; j++) {
                nodes[i][j] = new PathNode(i, j);
            }
        }

        return nodes;
    }
}