export default class Node<T> {
    private _value: T;
    private _next: Node<T>;

    public constructor(value?: T, next?: Node<T>) {
        this._value = value;
        this._next = next;
    }

    public get value(): T {
        return this._value;
    }

    public get next(): Node<T> {
        return this._next;
    }

    public set value(value: T) {
        this._value = value;
    }

    public set next(value: Node<T>) {
        this._next = value;
    }
}