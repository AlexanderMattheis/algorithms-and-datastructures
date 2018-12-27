import Path from "./arrangement/path";
import Pathfinder from "./pathfinder";
import Vector from "../../math/vector";

export default class BestFirstSearch extends Pathfinder {
    public getRoute(start: Vector, end:Vector): Path {
        if (this._map.collision[end.x, end.y]) return null;

        this.empty(this._closedNodes, this._openNodes);
        this.initNodes(start, end);
    }
}