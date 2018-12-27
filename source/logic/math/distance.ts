import Default from "../../../source/system/defaults";
import ValueCache from "./value-cache";
import Vector from "./vector";

enum DistanceType {
    Euclidean = 0,
    Manhattan = 1,
    Chebychev = 2
}

export default class Distance {

    public static getLength(start: Vector, end: Vector, type: DistanceType): number {
        if (type === DistanceType.Chebychev) {
            return Distance.chebychev(start, end);
        } else if (type === DistanceType.Euclidean) {
            return Distance.euclidean(start, end);
        } else if (type === DistanceType.Manhattan) {
            return Distance.manhattan(start, end);
        }

        return Default.error;
    }

    private static chebychev(start: Vector, end: Vector): number {
        let deltaX: number = Math.abs(end.x - start.x);
        let deltaY: number = Math.abs(end.y - start.y);

        return Math.max(deltaX, deltaY);
    }

    private static euclidean(start: Vector, end: Vector): number {
        let deltaX: number = end.x - start.x;
        let deltaY: number = end.y - start.y;

        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }

    private static manhattan(start: Vector, end: Vector): number {
        let deltaX: number = Math.abs(end.x - start.x);
        let deltaY: number = Math.abs(end.y - start.y);

        return deltaX + deltaY;
    }

    private static getEdgeLength(start: Vector, end: Vector) {
        let deltaX: number = end.x - start.x;
        let deltaY: number = end.y - start.y;

        let isDiagonal: boolean = deltaX !== 0 && deltaY !== 0;
        return isDiagonal ? ValueCache.sqrt2 : 1;
    }
}
