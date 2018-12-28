import ArraySet from "./data-structures/sets/array-set";
import Distance from "./math/distance";
import ListPriorityQueue from "./data-structures/queues/list-priority-queue";
import Explorer from "./algorithms/pathfinding/arrangement/explorer";
import PathNode from "./algorithms/pathfinding/arrangement/path-node";

/**
 * Allows to change the Pathfinder and many more.
 */
export default class PathingManager {
    private _tools: Tools;

    public constructor() {
        this._tools = new Tools();
    }

    public get tools(): Tools {
        return this._tools;
    }
}

export class Tools {
    //<editor-fold desc="Properties">
    // data structures
    private _closedNodes: ArraySet<PathNode>;
    private _openNodes: ListPriorityQueue<PathNode>;

    // tools
    private _distanceCalculator: Distance;
    private _explorer: Explorer;
    //</editor-fold>

    // data structures
    public get closedNodes(): ArraySet<PathNode> {
        return this._closedNodes;
    }

    public get openNodes():  ListPriorityQueue<PathNode> {
        return this._openNodes;
    }

    // tools
    public get distanceCalculator(): Distance {
        return this._distanceCalculator;
    }

    public get explorer(): Explorer {
        return this._explorer;
    }
}
