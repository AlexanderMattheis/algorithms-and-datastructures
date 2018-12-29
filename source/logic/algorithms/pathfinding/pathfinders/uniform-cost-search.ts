import BestFirstSearch from "../best-first-search";
import PathNode from "../arrangement/path-node";
import {DistanceType} from "../../../math/distance";

export default class UniformCostSearch extends BestFirstSearch {

    protected updateOrAdd(newNode: PathNode): void {
        if (this._openNodes.contains(newNode)) {
            this._openNodes.remove(newNode);
        }

        this._openNodes.enqueue(newNode, newNode.exactDistanceFromStart);
    }
}