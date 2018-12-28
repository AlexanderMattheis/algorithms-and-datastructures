//import FileReader from "../../system/io/file-reader";
import Map from "./map";
import Symbols from "../../../source/system/symbols";
import TypeConverter from "../../system/typing/type-converter";

export default class MapLoader {
    public load(path: string): Map {
        // read in
        let mapData: object = this.readInMap(path);

        // @ts-ignore: create
        let map: Map = new Map(mapData.width, mapData.height);

        // @ts-ignore
        map.collision = mapData.collisionMap;

        return map;
    }

    private readInMap(path: string): object {
        // let fileReader: FileReader = new FileReader();
        // let mapData: string = fileReader.readInFile(path);

        let map: string =
            ".................................\n" +
            ".................................\n" +
            "....TT........................T..\n" +
            ".....T...........................\n" +
            ".....TTTTT.............TTTTTT....\n" +
            ".......T..................T......\n" +
            ".......T............TT....T......\n" +
            ".......T.............T....T......\n" +
            ".................................\n" +
            "..........................T......\n" +
            "..........................T..TT..\n" +
            ".TTTTTT.TTTT.................T...\n" +
            "........................T........\n" +
            "........................TTTT.....\n" +
            "..TT.....................T.......\n" +
            "...T.....................T.......\n" +
            "...T.............................\n" +
            "......TTTT....T......TT..........\n" +
            ".................................";

        let width: number = 0;
        let height: number = 0;
        let collisionMap: object = {};

        let pos: number = 0;
        let x: number = 0;
        let y: number = 0;

        while(pos < map.length) {
            if (map.charAt(pos) === Symbols.Map.unblocked) {
                collisionMap[[x,y].toString()] = false;
                x++;
            } else if (map.charAt(pos) === Symbols.Map.newLine) {
                y++;
                x = 0;
            } else {
                collisionMap[[x,y].toString()] = true;
                x++;
            }

            pos++;

            if (pos === map.length - 1) {
                height = y + 1;
                width = x + 1;
            }
        }

        return {height: height, width: width, collisionMap: new TypeConverter().to2DArray(collisionMap, width, height)};
    }
}