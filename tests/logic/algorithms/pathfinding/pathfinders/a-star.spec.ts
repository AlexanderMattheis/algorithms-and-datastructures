import { expect } from 'chai';
import 'mocha';

import AStar from "../../../../../source/logic/algorithms/pathfinding/pathfinders/a-star";
import Map from "../../../../../source/scene/world/map";
import MapLoader from "../../../../../source/scene/world/map-loader";
import PathingManager from "../../../../../source/logic/pathing-manager";
import PathNode from "../../../../../source/logic/algorithms/pathfinding/arrangement/path-node";
import Vector from "../../../../../source/logic/math/vector";

describe('AStar', () => {

    it('From left top to bottom right.', () => {
        let loader: MapLoader = new MapLoader();
        let map: Map = loader.load("../public/assets/maps/default.map");
        let manager: PathingManager = new PathingManager(map);
        let pathFinder: AStar = new AStar(map, manager.tools);
        let path: PathNode[] = pathFinder.getRoute(new Vector(0, 0), new Vector(32, 18));

        for (let i: number =  path.length - 1; i >= 0; i--) {
            let pathNode: PathNode = path[i];
            console.log(pathNode.fieldPos);
        }
    });
});
