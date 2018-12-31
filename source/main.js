"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dijkstra_1 = require("./logic/algorithms/pathfinding/pathfinders/dijkstra");
var map_loader_1 = require("./scene/world/map-loader");
var pathing_manager_1 = require("./logic/pathing-manager");
var vector_1 = require("./logic/math/vector");
function main() {
    var loader = new map_loader_1.default();
    var map = loader.load("../public/assets/maps/default.map");
    var manager = new pathing_manager_1.default(map);
    var pathFinder = new dijkstra_1.default(map, manager.tools);
    var distances = pathFinder.getComputed(new vector_1.default(0, 0));
    console.log("Done!");
}
// start program
main();
//# sourceMappingURL=main.js.map