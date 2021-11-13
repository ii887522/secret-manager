'use strict';
import { AvlTree } from '@datastructures-js/binary-search-tree';
export function toArray(tree) {
    const result = [];
    tree.traverseInOrder(node => {
        result.push({ key: node.getKey(), value: node.getValue() });
    });
    return result;
}
export function toAvlTree(array) {
    const result = new AvlTree();
    for (const node of array)
        result.insert(node.key, node.value);
    return result;
}
