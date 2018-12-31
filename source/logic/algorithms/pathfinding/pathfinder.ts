import ArraySet from "../../data-structures/sets/array-set";
import Distance from "../../math/distance";
import Explorer from "./arrangement/explorer";
import ListPriorityQueue from "../../data-structures/queues/list-priority-queue";
import Map from "../../../scene/world/map";
import Path from "./arrangement/path";
import PathNode from "./arrangement/path-node";
import Vector from "../../math/vector";

import {Tools} from "../../pathing-manager";

export default abstract class Pathfinder {
    protected _map: Map;

    protected _startNode: PathNode;
    protected _finishNode: PathNode;

    // data structures
    protected _closedNodes: ArraySet<PathNode>;
    protected _openNodes: ListPriorityQueue<PathNode>;

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

    public abstract getComputed(start: Vector, end?:Vector): any;
    protected abstract expand(node: PathNode): void;

    protected empty(closedNodes: ArraySet<PathNode>, openNodes: ListPriorityQueue<PathNode>): void {
        closedNodes.clear();
        openNodes.clear();
    }

    protected initNodes(start: Vector, end: Vector): void {
        this._startNode = this._map.nodes[start.x][start.y];
        this._startNode.previous = this._startNode;

        this._finishNode = this._map.nodes[end.x][end.y];
    }
}