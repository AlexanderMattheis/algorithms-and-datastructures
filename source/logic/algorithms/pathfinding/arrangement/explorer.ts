import Map from "../../../../scene/world/map";

export default class Explorer {
    protected _graph: Map;

    public constructor(graph: Map) {
        this._graph = graph;
    }

}

export class QuadExplorer extends Explorer {
}

export class OctaExplorer extends Explorer {
}
