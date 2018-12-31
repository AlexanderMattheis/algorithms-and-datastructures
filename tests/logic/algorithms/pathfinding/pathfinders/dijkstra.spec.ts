import {expect} from 'chai';
import 'mocha';

import Dijkstra from "../../../../../source/logic/algorithms/pathfinding/pathfinders/dijkstra";
import Map from "../../../../../source/scene/world/map";
import MapLoader from "../../../../../source/scene/world/map-loader";
import PathingManager from "../../../../../source/logic/pathing-manager";
import PathNode from "../../../../../source/logic/algorithms/pathfinding/arrangement/path-node";
import Vector from "../../../../../source/logic/math/vector";

describe('Algorithm - Pathfinding - Dijkstra', () => {

    it('From top left to bottom right.', () => {
        let loader: MapLoader = new MapLoader();
        let map: Map = loader.load("../public/assets/maps/default.map");
        let manager: PathingManager = new PathingManager(map);
        let pathFinder: Dijkstra = new Dijkstra(map, manager.tools);
        let path: PathNode[] = pathFinder.getComputed(new Vector(0, 0), new Vector(32, 18));

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
            new Vector(16, 0),
            new Vector(17, 0),
            new Vector(18, 0),
            new Vector(19, 0),
            new Vector(20, 0),
            new Vector(21, 0),
            new Vector(22, 0),
            new Vector(23, 0),
            new Vector(24, 0),
            new Vector(25, 0),
            new Vector(26, 0),
            new Vector(27, 0),
            new Vector(28, 0),
            new Vector(29, 0),
            new Vector(30, 0),
            new Vector(31, 0),
            new Vector(32, 0),
            new Vector(32, 1),
            new Vector(32, 2),
            new Vector(32, 3),
            new Vector(32, 4),
            new Vector(32, 5),
            new Vector(32, 6),
            new Vector(32, 7),
            new Vector(32, 8),
            new Vector(32, 9),
            new Vector(32, 10),
            new Vector(32, 11),
            new Vector(32, 12),
            new Vector(32, 13),
            new Vector(32, 14),
            new Vector(32, 15),
            new Vector(32, 16),
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

    it('Distances from top left.', () => {
        let loader: MapLoader = new MapLoader();
        let map: Map = loader.load("../public/assets/maps/default.map");
        let manager: PathingManager = new PathingManager(map);
        let pathFinder: Dijkstra = new Dijkstra(map, manager.tools);
        let distances: object = pathFinder.getComputed(new Vector(0, 0));

        expect(Object.keys(distances).length).to.equal(570);  // 33*19 = 627 and blocked = 57 -> 627-57

        // a few randomly selected points
        expect(distances[[0,0].toString()]).to.equal(0);
        expect(distances[[0,12].toString()]).to.equal(12);

        expect(distances[[6,3].toString()]).to.equal(9);

        expect(distances[[7,11].toString()]).to.equal(18);
        expect(distances[[7,12].toString()]).to.equal(19);

        expect(distances[[8,5].toString()]).to.equal(17);
        expect(distances[[8,6].toString()]).to.equal(18);

        expect(distances[[10,8].toString()]).to.equal(18);
        expect(distances[[10,12].toString()]).to.equal(22);

        expect(distances[[32,18].toString()]).to.equal(50);  // map: 33 * 19, so 32 + 18

    });
});
