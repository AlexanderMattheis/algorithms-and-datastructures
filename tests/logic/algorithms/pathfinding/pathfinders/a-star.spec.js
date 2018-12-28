"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var a_star_1 = require("../../../../../source/logic/algorithms/pathfinding/pathfinders/a-star");
var map_loader_1 = require("../../../../../source/scene/world/map-loader");
var pathing_manager_1 = require("../../../../../source/logic/pathing-manager");
var vector_1 = require("../../../../../source/logic/math/vector");
describe('AStar', function () {
    it('From left top to bottom right.', function () {
        var loader = new map_loader_1.default();
        var map = loader.load("../public/assets/maps/default.map");
        var manager = new pathing_manager_1.default(map);
        var pathFinder = new a_star_1.default(map, manager.tools);
        var path = pathFinder.getRoute(new vector_1.default(0, 0), new vector_1.default(32, 18));
        for (var i = path.length - 1; i >= 0; i--) {
            var pathNode = path[i];
            console.log(pathNode.fieldPos);
        }
    });
});
//# sourceMappingURL=a-star.spec.js.map