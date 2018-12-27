import ArraySet from "../../data-structures/sets/array-set";
import Distance from "../../math/distance";
import ListPriorityQueue from "../../data-structures/queues/list-priority-queue";
import Vector from "../../math/vector";
import Explorer from "./explorer";

/**
 * Allows to change the Pathfinder and many more.
 */
export default class PathingManager {
    private tools;

    public constructor() {
        this.tools = new Tools();
    }
}

export class Tools {
    //<editor-fold desc="Properties">
    // data structures
    private _closedNodes: ArraySet<Vector>;
    private _openNodes: ListPriorityQueue<Vector>;

    // tools
    private _distanceCalculator: Distance;
    private _explorer: Explorer;
    //</editor-fold>

    // data structures
    public get closedNodes(): ArraySet<Vector> {
        return this._closedNodes;
    }

    public get openNodes():  ListPriorityQueue<Vector> {
        return this._openNodes;
    }

    // tools
    public get distanceCalculator(): Distance {
        return this._distanceCalculator;
    }

    public get explorer(): Explorer {
        return this._explorer;
    }
};
