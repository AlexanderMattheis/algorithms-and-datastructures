import ArraySet from "./data-structures/sets/array-set";
import Distance from "./math/distance";
import ListPriorityQueue from "./data-structures/queues/list-priority-queue";
import Explorer from "./algorithms/pathfinding/arrangement/explorer";
import PathNode from "./algorithms/pathfinding/arrangement/path-node";
import Map from "../scene/world/map";

/**
 * Allows to change the Pathfinder and many more.
 */
export default class PathingManager {
    private _tools: Tools;

    public constructor(map: Map) {
        this._tools = new Tools(map);
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

    public constructor(map: Map) {
        this._closedNodes = new ArraySet<PathNode>();
        this._openNodes = new ListPriorityQueue<PathNode>();

        this._distanceCalculator = new Distance();
        this._explorer = new Explorer(map);
    }

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
