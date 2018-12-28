import BestFirstSearch from "../best-first-search";
import PathNode from "../arrangement/path-node";
import {DistanceType} from "../../../math/distance";

export default class GreedyBestFirstSearch extends BestFirstSearch {

    protected recalcDistToStart(node: PathNode, newNode: PathNode): void {
        let newDistanceToStart: number =
            this._distanceCalculator.getLength(node.fieldPos, newNode.fieldPos, DistanceType.Edge);

        this.updateDistance(node, newNode, newDistanceToStart);
    }
}