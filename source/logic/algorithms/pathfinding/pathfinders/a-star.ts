import BestFirstSearch from "../best-first-search";
import PathNode from "../arrangement/path-node";
import {DistanceType} from "../../../math/distance";

export default class AStar extends BestFirstSearch {

    protected recalcDistToStart(node: PathNode, newNode: PathNode): void {
        let newDistanceToStart: number = node.exactDistanceFromStart
            + this._distanceCalculator.getLength(node.fieldPos, newNode.fieldPos, DistanceType.Edge);

        this.updateDistance(node, newNode, newDistanceToStart);
    }
}