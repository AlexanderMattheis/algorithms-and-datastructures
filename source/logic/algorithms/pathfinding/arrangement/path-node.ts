import Vector from "../../../math/vector";
import Map from "../../../../scene/world/map";

export default class PathNode {
    private _exactDistanceFromStart: number;  // g(n) in literature
    private _fieldPos: Vector;
    private _previous: PathNode;

    private _priority: number;  // f(n) = g(n) + h(n)

    public constructor(map: Map, posX, posY) {

    }

    public get exactDistanceFromStart(): number {
        return this._exactDistanceFromStart;
    }

    public get fieldPos(): Vector {
        return this._fieldPos;
    }

    public get previous(): PathNode {  // for path-reconstruction
        return this._previous;
    }

    public get priority(): number {
        return this._priority;
    }

    public set exactDistanceFromStart(value: number) {
        this._exactDistanceFromStart = value;
    }

    public set previous(value: PathNode) {
        this._previous = value;
    }

    public set priority(value: number) {
        this._priority = value;
    }
}