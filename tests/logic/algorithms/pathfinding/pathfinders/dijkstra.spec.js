"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
require("mocha");
var dijkstra_1 = require("../../../../../source/logic/algorithms/pathfinding/pathfinders/dijkstra");
var map_loader_1 = require("../../../../../source/scene/world/map-loader");
var pathing_manager_1 = require("../../../../../source/logic/pathing-manager");
var vector_1 = require("../../../../../source/logic/math/vector");
describe('Algorithm - Pathfinding - Dijkstra', function () {
    it('From top left to bottom right.', function () {
        var loader = new map_loader_1.default();
        var map = loader.load("../public/assets/maps/default.map");
        var manager = new pathing_manager_1.default(map);
        var pathFinder = new dijkstra_1.default(map, manager.tools);
        var path = pathFinder.getComputed(new vector_1.default(0, 0), new vector_1.default(32, 18));
        var positions = [
            new vector_1.default(0, 0),
            new vector_1.default(1, 0),
            new vector_1.default(2, 0),
            new vector_1.default(3, 0),
            new vector_1.default(4, 0),
            new vector_1.default(5, 0),
            new vector_1.default(6, 0),
            new vector_1.default(7, 0),
            new vector_1.default(8, 0),
            new vector_1.default(9, 0),
            new vector_1.default(10, 0),
            new vector_1.default(11, 0),
            new vector_1.default(12, 0),
            new vector_1.default(13, 0),
            new vector_1.default(14, 0),
            new vector_1.default(15, 0),
            new vector_1.default(16, 0),
            new vector_1.default(17, 0),
            new vector_1.default(18, 0),
            new vector_1.default(19, 0),
            new vector_1.default(20, 0),
            new vector_1.default(21, 0),
            new vector_1.default(22, 0),
            new vector_1.default(23, 0),
            new vector_1.default(24, 0),
            new vector_1.default(25, 0),
            new vector_1.default(26, 0),
            new vector_1.default(27, 0),
            new vector_1.default(28, 0),
            new vector_1.default(29, 0),
            new vector_1.default(30, 0),
            new vector_1.default(31, 0),
            new vector_1.default(32, 0),
            new vector_1.default(32, 1),
            new vector_1.default(32, 2),
            new vector_1.default(32, 3),
            new vector_1.default(32, 4),
            new vector_1.default(32, 5),
            new vector_1.default(32, 6),
            new vector_1.default(32, 7),
            new vector_1.default(32, 8),
            new vector_1.default(32, 9),
            new vector_1.default(32, 10),
            new vector_1.default(32, 11),
            new vector_1.default(32, 12),
            new vector_1.default(32, 13),
            new vector_1.default(32, 14),
            new vector_1.default(32, 15),
            new vector_1.default(32, 16),
            new vector_1.default(32, 17),
            new vector_1.default(32, 18)
        ];
        positions.reverse(); // reverses itself
        for (var i = path.length - 1; i >= 0; i--) {
            var pathNode = path[i];
            var position = positions[i];
            chai_1.expect(pathNode.fieldPos.x).to.equal(position.x);
            chai_1.expect(pathNode.fieldPos.y).to.equal(position.y);
        }
    });
    it('Distances from top left.', function () {
        var loader = new map_loader_1.default();
        var map = loader.load("../public/assets/maps/default.map");
        var manager = new pathing_manager_1.default(map);
        var pathFinder = new dijkstra_1.default(map, manager.tools);
        var distances = pathFinder.getComputed(new vector_1.default(0, 0));
        chai_1.expect(Object.keys(distances).length).to.equal(570); // 33*19 = 627 and blocked = 57 -> 627-57
        // a few randomly selected points
        chai_1.expect(distances[[0, 0].toString()]).to.equal(0);
        chai_1.expect(distances[[0, 12].toString()]).to.equal(12);
        chai_1.expect(distances[[6, 3].toString()]).to.equal(9);
        chai_1.expect(distances[[7, 11].toString()]).to.equal(18);
        chai_1.expect(distances[[7, 12].toString()]).to.equal(19);
        chai_1.expect(distances[[8, 5].toString()]).to.equal(17);
        chai_1.expect(distances[[8, 6].toString()]).to.equal(18);
        chai_1.expect(distances[[10, 8].toString()]).to.equal(18);
        chai_1.expect(distances[[10, 12].toString()]).to.equal(22);
        chai_1.expect(distances[[32, 18].toString()]).to.equal(50); // map: 33 * 19, so 32 + 18
    });
});
//# sourceMappingURL=dijkstra.spec.js.map