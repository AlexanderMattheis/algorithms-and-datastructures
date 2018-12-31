import ListPriorityQueue from "../../../data-structures/queues/list-priority-queue";
import Pathfinder from "../pathfinder";
import PathNode from "../arrangement/path-node";
import Vector from "../../../math/vector";
import Path from "../arrangement/path";
import {DistanceType} from "../../../math/distance";

export default class Dijkstra extends Pathfinder {

    /**
     * If an end-vector is specified,
     * the path to the end-vector is returned.
     * Else an associative array with all distances of
     * non-blocked nodes is returned.
     */
    public getComputed(start: Vector, end?:Vector): any {
        this.init(this._openNodes, start, end);

        // let i: number = 1;
        while (!this._openNodes.isEmpty()) {
            let node: PathNode = this._openNodes.dequeue();

            if (end !== undefined) {
                if (this._finishNode.equals(node)) {
                    return new Path().reconstructTo(node);
                }
            }

            this.expand(node);
            // console.log(i);
            // i++;
        }

        return this.getDistances(this._map.nodes);
    }

    private init(priorityQueue: ListPriorityQueue<PathNode>, start: Vector, end: Vector): void {
        for (let posY: number = 0; posY < this._map.height; posY++) {
            for (let posX: number = 0; posX < this._map.width; posX++) {
                if (!this._map.isBlocked(posX, posY)) {
                    let node: PathNode = this._map.nodes[posX][posY];

                    if (node.fieldPos.x === start.x && node.fieldPos.y === start.y) {
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
        let newDistanceToStart: number = node.exactDistanceFromStart +
            this._distanceCalculator.getLength(node.fieldPos, newNode.fieldPos, DistanceType.Edge);

        // if (node.fieldPos.x === 8 && node.fieldPos.y === 5) {
        //     console.log(node.exactDistanceFromStart);
        // }

        if (newDistanceToStart < newNode.exactDistanceFromStart) {
            newNode.previous = node;
            newNode.exactDistanceFromStart = newDistanceToStart;
            this.update(newNode);
        }
    }

    protected update(newNode: PathNode): void {
        if (this._openNodes.contains(newNode)) {
            this._openNodes.remove(newNode);
            this._openNodes.enqueue(newNode, newNode.exactDistanceFromStart);
        }
    }

    private getDistances(nodes: PathNode[][]): object {
        let distanceForPosition = {};

        for (let x: number = 0; x < nodes.length; x++ ) {
            for (let y: number = 0; y < nodes[0].length; y++) {
                if (!this._map.isBlocked(x, y)) {
                    distanceForPosition[[x,y].toString()] = nodes[x][y].exactDistanceFromStart;
                }
            }
        }

        return distanceForPosition;
    }
}