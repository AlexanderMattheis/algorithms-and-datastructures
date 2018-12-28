import {expect} from 'chai';
import 'mocha';

import AStar from "../../../../../source/logic/algorithms/pathfinding/pathfinders/a-star";
import Map from "../../../../../source/scene/world/map";
import MapLoader from "../../../../../source/scene/world/map-loader";
import PathingManager from "../../../../../source/logic/pathing-manager";
import PathNode from "../../../../../source/logic/algorithms/pathfinding/arrangement/path-node";
import Vector from "../../../../../source/logic/math/vector";

describe('Algorithm - AStar', () => {

    it('From left top to bottom right.', () => {
        let loader: MapLoader = new MapLoader();
        let map: Map = loader.load("../public/assets/maps/default.map");
        let manager: PathingManager = new PathingManager(map);
        let pathFinder: AStar = new AStar(map, manager.tools);
        let path: PathNode[] = pathFinder.getRoute(new Vector(0, 0), new Vector(32, 18));

        let positions: Vector[] = [
            new Vector(0, 0),
            new Vector(1, 0),
            new Vector(2, 0),
            new Vector(3, 0),
            new Vector(4, 0),
            new Vector(5, 0),
            new Vector(6, 0),
            new Vector(7, 0),
            new Vector(8, 0),
            new Vector(9, 0),
            new Vector(10, 0),
            new Vector(11, 0),
            new Vector(12, 0),
            new Vector(13, 0),
            new Vector(14, 0),
            new Vector(15, 0),
            new Vector(15, 1),
            new Vector(16, 1),
            new Vector(16, 2),
            new Vector(17, 2),
            new Vector(17, 3),
            new Vector(18, 3),
            new Vector(18, 4),
            new Vector(19, 4),
            new Vector(19, 5),
            new Vector(19, 6),
            new Vector(19, 7),
            new Vector(20, 7),
            new Vector(20, 8),
            new Vector(21, 8),
            new Vector(22, 8),
            new Vector(23, 8),
            new Vector(23, 9),
            new Vector(24, 9),
            new Vector(24, 10),
            new Vector(25, 10),
            new Vector(25, 11),
            new Vector(26, 11),
            new Vector(26, 12),
            new Vector(27, 12),
            new Vector(28, 12),
            new Vector(28, 13),
            new Vector(28, 14),
            new Vector(29, 14),
            new Vector(29, 15),
            new Vector(30, 15),
            new Vector(30, 16),
            new Vector(31, 16),
            new Vector(31, 17),
            new Vector(32, 17),
            new Vector(32, 18)
        ];

        positions.reverse();  // reverses itself

        for (let i: number = path.length - 1; i >= 0; i--) {
            let pathNode: PathNode = path[i];
            let position: Vector = positions[i];
            expect(pathNode.fieldPos.x).to.equal(position.x);
            expect(pathNode.fieldPos.y).to.equal(position.y);
        }
    });
});
