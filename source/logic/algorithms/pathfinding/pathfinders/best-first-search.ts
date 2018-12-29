import Path from "../arrangement/path";
import Pathfinder from "../pathfinder";
import Vector from "../../../math/vector";
import PathNode from "../arrangement/path-node";
import {DistanceType} from "../../../math/distance";

export default abstract class BestFirstSearch extends Pathfinder {

    public getRoute(start: Vector, end:Vector): PathNode[] {
        if (this._map.collision[end.x][end.y]) return null;

        this.empty(this._closedNodes, this._openNodes);
        this.initNodes(start, end);
        this._startNode.exactDistanceFromStart = 0;

        this._openNodes.enqueue(this._startNode,
            this._startNode.exactDistanceFromStart +
            this._distanceCalculator.getLength(this._startNode.fieldPos, this._finishNode.fieldPos, DistanceType.Euclidean));

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

    protected expand(node: PathNode): void {
        let neighbours: PathNode[] = this._explorer.getNeighbours(node);

        for (let i: number = 0; i < neighbours.length; i++) {
            let newNode: PathNode = neighbours[i];

            if (!this._closedNodes.contains(newNode)) {
                if (!this._openNodes.contains(newNode)) {  // create new
                    // newNode.previous = null;  // presumably not necessary
                    newNode.exactDistanceFromStart = Number.MAX_VALUE;
                }
                // "else:" just recalculate the distance from the start for the new node
                this.recalcDistToStart(node, newNode);
            }
        }
    }

    protected recalcDistToStart(node: PathNode, newNode: PathNode): void {
        let newDistanceToStart: number = node.exactDistanceFromStart
            + this._distanceCalculator.getLength(node.fieldPos, newNode.fieldPos, DistanceType.Edge);

        this.updateDistance(node, newNode, newDistanceToStart);
    }

    protected updateDistance(node: PathNode, newNode: PathNode, newDistanceToStart: number): void {
        if (newDistanceToStart < newNode.exactDistanceFromStart) {
            newNode.previous = node;
            newNode.exactDistanceFromStart = newDistanceToStart;
            this.updateOrAdd(newNode);
        }
    }

    protected abstract updateOrAdd(newNode: PathNode);
}