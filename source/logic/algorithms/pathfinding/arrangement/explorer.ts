import Map from "../../../../scene/world/map";
import PathNode from "./path-node";

export default class Explorer {
    protected _graph: Map;

    public constructor(graph: Map) {
        this._graph = graph;
    }

    public getNeighbours(): PathNode[] {
        return [];
    }
}
