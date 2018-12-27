import Map from "./map";

export default class MapLoader {
    public load(path: string): Map {
        // read in
        let height: number = 20;
        let width: number = 20;

        // create
        let map: Map = new Map(height, width);

        return map;
    }
}