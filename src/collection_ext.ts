'use strict'

import { AvlTree } from '@datastructures-js/binary-search-tree'
import Node from './Node'

export function toArray<T extends string | number, U = undefined> (tree: AvlTree<T, U>): Array<Node<T, U>> {
  const result: Array<Node<T, U>> = []
  tree.traverseInOrder(node => {
    result.push({ key: node.getKey(), value: node.getValue() })
  })
  return result
}

export function toAvlTree<T extends string | number, U = undefined> (array: Array<Node<T, U>>): AvlTree<T, U> {
  const result = new AvlTree<T, U>()
  for (const node of array) result.insert(node.key, node.value)
  return result
}
