//import FileReader from "../../system/io/file-reader";
import Map from "./map";
import Symbols from "../../../source/system/symbols";

export default class MapLoader {
    public load(path: string): Map {
        // read in
        let mapData: object = this.readInMap(path);

        // @ts-ignore: create
        let map: Map = new Map(mapData.height, mapData.width);

        // @ts-ignore
        map.collision = mapData.collisionMap;

        return map;
    }

    public readInMap(path: string): object {
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
        let collisionMap: boolean[][] = [];

        let pos: number = 0;
        let i: number = 0;
        let j: number = 0;

        while(pos < map.length) {
            if (map.charAt(pos) === Symbols.Map.unblocked) {
                collisionMap[i][j] = false;
                j++;
            } else if (map.charAt(pos) === Symbols.Map.newLine) {
                i++;
                j = 0;
            } else {
                collisionMap[i][j] = true;
                j++;
            }

            pos++;

            if (pos === map.length - 1) {
                height = i;
                width = j;
            }
        }
        
        return {height: height, width: width, collisionMap: collisionMap};
    }
}