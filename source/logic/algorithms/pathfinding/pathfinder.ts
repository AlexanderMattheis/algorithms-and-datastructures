import ArraySet from "../../data-structures/sets/array-set";
import Distance from "../../math/distance";
import Explorer from "./arrangement/explorer";
import ListPriorityQueue from "../../data-structures/queues/list-priority-queue";
import Map from "../../../scene/world/map";
import Path from "./arrangement/path";
import PathNode from "./arrangement/path-node";
import Vector from "../../math/vector";

import {Tools} from "./pathing-manager";

export default abstract class Pathfinder {
    protected _map: Map;

    protected _startNode: PathNode;
    protected _finishNode: PathNode;

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

    public abstract getRoute(start: Vector, end:Vector): Path;

    protected empty(closedNodes: ArraySet<Vector>, openNodes: ListPriorityQueue<Vector>): void {
        closedNodes.clear();
        openNodes.clear();
    }

    protected initNodes(start: Vector, end: Vector): void {
        this._startNode = this._map.nodes[start.y][start.x];
        this._startNode.previous = this._startNode;
    }
}