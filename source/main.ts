import AStar from "./logic/algorithms/pathfinding/pathfinders/a-star";
import Map from "./scene/world/map";
import MapLoader from "./scene/world/map-loader";
import PathingManager from "./logic/pathing-manager";
import PathNode from "./logic/algorithms/pathfinding/arrangement/path-node";
import Vector from "./logic/math/vector";

function main(): void {
    let loader: MapLoader = new MapLoader();
    let map: Map = loader.load("../public/assets/maps/default.map");
    let manager: PathingManager = new PathingManager(map);
    let pathFinder: AStar = new AStar(map, manager.tools);
    let path: PathNode[] = pathFinder.getRoute(new Vector(0, 0), new Vector(32, 18));

    for (let i: number =  path.length - 1; i >= 0; i--) {
        let pathNode: PathNode = path[i];
        console.log(pathNode.fieldPos);
    }
}

// start program
main();