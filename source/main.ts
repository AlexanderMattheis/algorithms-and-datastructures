import AStar from "./logic/algorithms/pathfinding/pathfinders/a-star";
import Map from "./scene/world/map";
import MapLoader from "./scene/world/map-loader";
import PathingManager from "./logic/pathing-manager";

function main() {
    let loader: MapLoader = new MapLoader();
    let map: Map = loader.load("../public/assets/maps/default.map");
    let manager: PathingManager = new PathingManager();
    let pathFinder: AStar = new AStar(map, manager.tools);
}

// start program
main();