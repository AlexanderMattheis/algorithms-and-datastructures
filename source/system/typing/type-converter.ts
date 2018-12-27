export default class TypeConverter {
    public to2DArray<T>(obj: object, height: number, width: number) {
        let array2D: T[][] = this.init<T>(height);

        for (let i: number = 0; i < height; i++) {
            for (let j: number = 0; j < width; j++) {
                array2D[i][j] = obj[[i,j].toString()];
            }
        }

        return array2D;
    }

    private init<T>(height: number): T[][]  {
        let array2D: T[][] = [];

        for (let i: number = 0; i < height; i++) {
            array2D[i] = [];
        }

        return array2D;
    }
}