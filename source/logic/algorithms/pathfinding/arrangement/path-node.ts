import Vector from "../../../math/vector";
import Map from "../../../../scene/world/map";
import {Equality} from "../../../../system/typing/equality";

export default class PathNode implements Equality<PathNode> {
    private _exactDistanceFromStart: number;  // g(n) in literature
    private _fieldPos: Vector;
    private _previous: PathNode;

    public constructor(posX, posY) {
        this._fieldPos = new Vector(posX, posY);
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

    public set exactDistanceFromStart(value: number) {
        this._exactDistanceFromStart = value;
    }

    public set previous(value: PathNode) {
        this._previous = value;
    }

    public equals(pathNode: PathNode) {
        return this._fieldPos.equals(pathNode._fieldPos);
    }
}