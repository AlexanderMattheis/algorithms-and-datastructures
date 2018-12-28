import Default from "../../../source/system/defaults";
import ValueCache from "./value-cache";
import Vector from "./vector";

export enum DistanceType {
    Euclidean = 0,
    Manhattan = 1,
    Chebychev = 2,
    Edge
}

export default class Distance {

    public getLength(start: Vector, end: Vector, type: DistanceType): number {
        if (type === DistanceType.Edge) {
            return this.getEdgeLength(start, end);
        } else if (type === DistanceType.Chebychev) {
            return this.chebychev(start, end);
        } else if (type === DistanceType.Euclidean) {
            return this.euclidean(start, end);
        } else if (type === DistanceType.Manhattan) {
            return this.manhattan(start, end);
        }

        return Default.Error.notContained;
    }

    private getEdgeLength(start: Vector, end: Vector) {
        let deltaX: number = end.x - start.x;
        let deltaY: number = end.y - start.y;

        let isDiagonal: boolean = deltaX !== 0 && deltaY !== 0;
        return isDiagonal ? ValueCache.sqrt2 : 1;
    }

    private chebychev(start: Vector, end: Vector): number {
        let deltaX: number = Math.abs(end.x - start.x);
        let deltaY: number = Math.abs(end.y - start.y);

        return Math.max(deltaX, deltaY);
    }

    private euclidean(start: Vector, end: Vector): number {
        let deltaX: number = end.x - start.x;
        let deltaY: number = end.y - start.y;

        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }

    private manhattan(start: Vector, end: Vector): number {
        let deltaX: number = Math.abs(end.x - start.x);
        let deltaY: number = Math.abs(end.y - start.y);

        return deltaX + deltaY;
    }
}
