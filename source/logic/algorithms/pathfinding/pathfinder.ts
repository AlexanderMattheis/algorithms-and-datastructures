import MapGraph from "../../../scene/world/map-graph";
import ListPriorityQueue from "../../data-structures/queues/list-priority-queue";
import GraphNode from "./graph-node";

export default class Pathfinder {
    protected graph: MapGraph;
    protected openNodes: ListPriorityQueue<GraphNode>;
    //protected closedNodes: ArraySet<PathNode>;
}