import BestFirstSearch from "../best-first-search";
import PathNode from "../arrangement/path-node";
import {DistanceType} from "../../../math/distance";

export default class aStar extends BestFirstSearch {
    protected expand(node: PathNode): void {
        let neighbours: PathNode[] = this._explorer.getNeighbours(node);

        for (let i: number = 0; i < neighbours.length; i++) {
            let newNode: PathNode = neighbours[i];

            if (!this._closedNodes.contains(newNode)) {
                if (!this._openNodes.contains(newNode)) { // create new
                    newNode.previous = null;
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

        if (newDistanceToStart < newNode.exactDistanceFromStart) {
            newNode.previous = node;
            newNode.exactDistanceFromStart = newDistanceToStart;
            this.updateOrAdd(newNode);
        }
    }

    protected updateOrAdd(newNode: PathNode): void {
        if (this._openNodes.contains(newNode)) {
            this._openNodes.remove(newNode);
        }

        let estimatedDistance: number = newNode.exactDistanceFromStart
            + this._distanceCalculator.getLength(newNode.fieldPos, this._finishNode.fieldPos, DistanceType.Euclidean);

        this._openNodes.enqueue(newNode, estimatedDistance);
    }
}