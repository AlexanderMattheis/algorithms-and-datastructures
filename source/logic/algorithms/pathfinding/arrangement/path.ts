import PathNode from "./path-node";

export default class Path {
    public reconstructTo(node: PathNode): PathNode[] {
        let path: PathNode[] = [];

        while (!node.previous.equals(node)) {
            path.push(node);
            node = node.previous;
        }

        path.push(node);

        return path;
    }
}