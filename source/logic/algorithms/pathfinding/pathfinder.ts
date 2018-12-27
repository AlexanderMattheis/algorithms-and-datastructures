import ArraySet from "../../data-structures/sets/array-set";
import Distance from "../../math/distance";
import ListPriorityQueue from "../../data-structures/queues/list-priority-queue";
import Map from "../../../scene/world/map";
import Explorer from "./explorer";
import {Tools} from "./pathing-manager";
import Vector from "../../math/vector";
import Path from "./path";

export default abstract class Pathfinder {
    protected _map: Map;

    protected _startPos: Vector;
    protected _endPos: Vector;

    // data structures
    protected _closedNodes: ArraySet<Vector>;
    protected _openNodes: ListPriorityQueue<Vector>;

    // tools
    protected _distanceCalculator: Distance;
    protected _explorer: Explorer;

    public constructor(map: Map, tools: Tools) {
        this._map = map;

        this._closedNodes = tools.closedNodes;
        this._openNodes = tools.openNodes;

        this._distanceCalculator = tools.distanceCalculator;
        this._explorer = tools.explorer;
    }

    public abstract route(): Path;

    protected clearDataStructures(): void {
        this._closedNodes.clear();
        this._openNodes.clear();
    }
}