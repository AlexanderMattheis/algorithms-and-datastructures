//import LinkedList from "./logic/data-structures/linked-list";

import Map from "./scene/world/map";
import MapLoader from "./scene/world/map-loader";

function main() {
    let map: Map = new MapLoader().load("../public/assets/default.map");
}

// start program
main();