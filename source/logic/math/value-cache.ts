export default class ValueCache {
    private static _sqrt2: number = 1.414213562;

    public static get sqrt2(): number {
        return ValueCache._sqrt2;
    }
}