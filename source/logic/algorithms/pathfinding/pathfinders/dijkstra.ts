import ListPriorityQueue from "../../../data-structures/queues/list-priority-queue";
import Pathfinder from "../pathfinder";
import PathNode from "../arrangement/path-node";
import Vector from "../../../math/vector";

export default class Dijkstra extends Pathfinder {

    public getComputed(start: Vector, end:Vector): any {
        this.init(start, this._openNodes);

        while (!this._openNodes.isEmpty()) {
            let node: PathNode = this._openNodes.dequeue();
            this.expand(node);
        }
    }

    private init(start: Vector, priorityQueue: ListPriorityQueue<PathNode>): void {
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
}