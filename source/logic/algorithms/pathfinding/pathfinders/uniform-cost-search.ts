import BestFirstSearch from "../best-first-search";
import PathNode from "../arrangement/path-node";
import {DistanceType} from "../../../math/distance";

export default class GreedyBestFirstSearch extends BestFirstSearch {

    protected recalcDistToStart(node: PathNode, newNode: PathNode): void {
        this.updateDistance(node, newNode, node.exactDistanceFromStart);
    }
}