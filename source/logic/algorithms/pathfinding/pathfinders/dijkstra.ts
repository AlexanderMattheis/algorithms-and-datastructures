import ListPriorityQueue from "../../../data-structures/queues/list-priority-queue";
import Pathfinder from "../pathfinder";
import PathNode from "../arrangement/path-node";
import Vector from "../../../math/vector";
import Path from "../arrangement/path";

export default class Dijkstra extends Pathfinder {

    /**
     * If an end-vector is specified,
     * the path to the end-vector is returned.
     * Else an associative array with all distances of
     * non-blocked nodes is returned.
     */
    public getComputed(start: Vector, end?:Vector): any {
        this.init(this._openNodes, start, end);

        while (!this._openNodes.isEmpty()) {
            let node: PathNode = this._openNodes.dequeue();

            if (end !== undefined) {
                if (this._finishNode.equals(node)) {
                    return new Path().reconstructTo(node);
                }
            }

            this.expand(node);
        }

        return this.getDistances(this._map.nodes);
    }

    private init(priorityQueue: ListPriorityQueue<PathNode>, start: Vector, end: Vector): void {
        let nonBlockedNode: PathNode[] = [];

        for (let posY: number = 0; posY < this._map.height; posY++) {
            for (let posX: number = 0; posX < this._map.width; posX++) {
                if (!this._map.isBlocked(posX, posY)) {
                    let node: PathNode = this._map.nodes[posX][posY];

                    if (node === this._startNode) {
                        node.exactDistanceFromStart = 0;  // to dequeue this node first
                    } else {
                        node.exactDistanceFromStart = Number.MAX_VALUE;
                    }

                    priorityQueue.enqueue(node, node.exactDistanceFromStart);
                }
            }
        }

        this._startNode = this._map.nodes[start.x][start.y];
        this._startNode.previous = this._startNode;

        if (end !== undefined) {
            this._finishNode = this._map.nodes[end.x][end.y];
        }
    }

    protected expand(node: PathNode): void {
        let neighbours: PathNode[] = this._explorer.getNeighbours(node);

        for (let i: number = 0; i < neighbours.length; i++) {
            let newNode: PathNode = neighbours[i];

            if (this._openNodes.contains(newNode)) {
                this.recalcDistToStart(node, newNode);
            }
        }
    }

    protected recalcDistToStart(node: PathNode, newNode: PathNode): void {
        let newDistanceToStart: number = node.exactDistanceFromStart;

        if (newDistanceToStart < newNode.exactDistanceFromStart) {
            newNode.previous = node;
            newNode.exactDistanceFromStart = newDistanceToStart;
        }
    }

    private getDistances(nodes: PathNode[][]): object {
        let distanceForPosition = {};

        for (let y: number = 0; y < nodes.length; y++) {
            for (let x: number = 0; x < nodes[0].length; x++) {
                if (!this._map.isBlocked(x, y)) {
                    distanceForPosition[[x,y].toString()] = nodes[x][y].exactDistanceFromStart;
                }
            }
        }

        return distanceForPosition;
    }
}