export default class Node<T> {
    private _value: T;
    private _next: Node<T>;
    private _previous: Node<T>;

    public constructor(value?: T, next?: Node<T>, previous?: Node<T>) {
        this._value = value;
        this._next = next;
        this._previous = previous;
    }

    public get value(): T {
        return this._value;
    }

    public get next(): Node<T> {
        return this._next;
    }

    public get previous(): Node<T> {
        return this._previous;
    }

    public set value(value: T) {
        this._value = value;
    }

    public set next(value: Node<T>) {
        this._next = value;
    }

    public set previous(value: Node<T>) {
        this._previous = value;
    }
}