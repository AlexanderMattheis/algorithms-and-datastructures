import Map from "../../../../scene/world/map";
import PathNode from "./path-node";

export default class Explorer {
    protected _map: Map;

    public constructor(map: Map) {
        this._map = map;
    }

    public getNeighbours(node: PathNode): PathNode[] {
        let blockedTop: boolean
            = this._map.isBlocked(node.fieldPos.x, node.fieldPos.y - 1);

        let blockedRight: boolean
            = this._map.isBlocked(node.fieldPos.x + 1,  node.fieldPos.y);

        let blockedBottom: boolean
            = this._map.isBlocked(node.fieldPos.x,      node.fieldPos.y + 1);

        let blockedLeft: boolean
            = this._map.isBlocked(node.fieldPos.x - 1,  node.fieldPos.y);

        return this.getCardinalNeighbours(node, blockedTop, blockedRight, blockedBottom, blockedLeft);
    }

    private getCardinalNeighbours(node: PathNode, blockedTop: boolean, blockedRight: boolean,
                                  blockedBottom: boolean, blockedLeft: boolean): PathNode[] {
        let neighbours: PathNode[] = [];

        //  | |o| |
        //  -------
        //  | | | |
        //  -------
        //  | | | |
        if (!blockedTop) {
            neighbours.push(this._map.nodes[node.fieldPos.x][node.fieldPos.y - 1]);
        }

        //  | | | |
        //  -------
        //  | | |o|
        //  -------
        //  | | | |
        if (!blockedRight) {
            neighbours.push(this._map.nodes[node.fieldPos.x + 1][node.fieldPos.y]);
        }

        //  | | | |
        //  -------
        //  | | | |
        //  -------
        //  | |o| |
        if (!blockedBottom) {
            neighbours.push(this._map.nodes[node.fieldPos.x][node.fieldPos.y + 1]);
        }

        //  | | | |
        //  -------
        //  |o| | |
        //  -------
        //  | | | |
        if (!blockedLeft) {
            neighbours.push(this._map.nodes[node.fieldPos.x - 1][node.fieldPos.y]);
        }

        return neighbours;
    }
}
