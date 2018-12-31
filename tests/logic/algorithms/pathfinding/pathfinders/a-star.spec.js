"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
require("mocha");
var a_star_1 = require("../../../../../source/logic/algorithms/pathfinding/pathfinders/a-star");
var map_loader_1 = require("../../../../../source/scene/world/map-loader");
var pathing_manager_1 = require("../../../../../source/logic/pathing-manager");
var vector_1 = require("../../../../../source/logic/math/vector");
describe('Algorithm - Pathfinding - AStar', function () {
    it('From top left to bottom right.', function () {
        var loader = new map_loader_1.default();
        var map = loader.load("../public/assets/maps/default.map");
        var manager = new pathing_manager_1.default(map);
        var pathFinder = new a_star_1.default(map, manager.tools);
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
            new vector_1.default(15, 1),
            new vector_1.default(16, 1),
            new vector_1.default(16, 2),
            new vector_1.default(17, 2),
            new vector_1.default(17, 3),
            new vector_1.default(18, 3),
            new vector_1.default(18, 4),
            new vector_1.default(19, 4),
            new vector_1.default(19, 5),
            new vector_1.default(19, 6),
            new vector_1.default(19, 7),
            new vector_1.default(20, 7),
            new vector_1.default(20, 8),
            new vector_1.default(21, 8),
            new vector_1.default(22, 8),
            new vector_1.default(23, 8),
            new vector_1.default(23, 9),
            new vector_1.default(24, 9),
            new vector_1.default(24, 10),
            new vector_1.default(25, 10),
            new vector_1.default(25, 11),
            new vector_1.default(26, 11),
            new vector_1.default(26, 12),
            new vector_1.default(27, 12),
            new vector_1.default(28, 12),
            new vector_1.default(28, 13),
            new vector_1.default(28, 14),
            new vector_1.default(29, 14),
            new vector_1.default(29, 15),
            new vector_1.default(30, 15),
            new vector_1.default(30, 16),
            new vector_1.default(31, 16),
            new vector_1.default(31, 17),
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
});
//# sourceMappingURL=a-star.spec.js.map