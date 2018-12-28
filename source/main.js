"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a_star_1 = require("./logic/algorithms/pathfinding/pathfinders/a-star");
var map_loader_1 = require("./scene/world/map-loader");
var pathing_manager_1 = require("./logic/pathing-manager");
function main() {
    var loader = new map_loader_1.default();
    var map = loader.load("../public/assets/maps/default.map");
    var manager = new pathing_manager_1.default();
    var pathFinder = new a_star_1.default(map, manager.tools);
}
// start program
main();
//# sourceMappingURL=main.js.map