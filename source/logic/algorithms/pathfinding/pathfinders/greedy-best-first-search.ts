import BestFirstSearch from "./best-first-search";
import PathNode from "../arrangement/path-node";
import {DistanceType} from "../../../math/distance";

export default class GreedyBestFirstSearch extends BestFirstSearch {

    protected updateOrAdd(newNode: PathNode): void {
        if (this._openNodes.contains(newNode)) {
            this._openNodes.remove(newNode);
        }

        let priority: number =
            this._distanceCalculator.getLength(newNode.fieldPos, this._finishNode.fieldPos, DistanceType.Euclidean);

        this._openNodes.enqueue(newNode, priority);
    }
}