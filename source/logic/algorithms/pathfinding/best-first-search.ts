import Path from "./arrangement/path";
import Pathfinder from "./pathfinder";
import Vector from "../../math/vector";
import PathNode from "./arrangement/path-node";

export default abstract class BestFirstSearch extends Pathfinder {

    public getRoute(start: Vector, end:Vector): PathNode[] {
        if (this._map.collision[end.x][end.y]) return null;

        this.empty(this._closedNodes, this._openNodes);
        this.initNodes(start, end);
        this._startNode.exactDistanceFromStart = 0;

        this._openNodes.enqueue(this._startNode, 0);

        while (!this._openNodes.isEmpty()) {
            let node: PathNode = this._openNodes.dequeue();
            this._closedNodes.add(node);

            if (this._finishNode.equals(node)) {
                return new Path().reconstructTo(node);
            }

            this.expand(node);
        }

        return null;
    }

    protected abstract expand(node: PathNode): void;
    protected abstract recalcDistToStart(node: PathNode, newNode: PathNode): void;
    protected abstract updateOrAdd(node: PathNode): void;

}