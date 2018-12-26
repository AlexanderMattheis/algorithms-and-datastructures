export default class TestHelpers {
    public static getLinkedListValues(startNode: Node<number>, count: number): number[] {
        let values: number[] = new Array(count);

        let currentNode: Node<number> = startNode;

        for (let i: number = 0; i < values.length; i++) {
            values[i] = currentNode.value;
            currentNode = currentNode.next;
        }

        return values;
    }

    public static getDoublyLinkedListValues<T>(list: DoublyLinkedList<T>, count: number, fromRightEnd?: boolean): T[] {
        let values: T[] = new Array(count);

        if (fromRightEnd) {
            let currentNode: Node<T> = list.leaf;

            for (let i: number = values.length - 1; i >= 0; i--) {
                values[i] = currentNode.value;
                currentNode = currentNode.previous;
            }
        } else {
            let currentNode: Node<T> = list.root;

            for (let i: number = 0; i < values.length; i++) {
                values[i] = currentNode.value;
                currentNode = currentNode.next;
            }
        }

        return values;
    }
}


