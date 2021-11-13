'use strict'

import { toArray, toAvlTree } from '../src/collection_ext.js'
import { AvlTree } from '@datastructures-js/binary-search-tree'

test('empty tree to array', () => {
  expect(toArray(new AvlTree())).toEqual([])
})

test('tree with an element that contains a: 0 to array', () => {
  const tree = new AvlTree<string, number>()
  tree.insert('a', 0)
  expect(toArray(tree)).toEqual([{ key: 'a', value: 0 }])
})

test('tree with an element that contains a: 1 to array', () => {
  const tree = new AvlTree<string, number>()
  tree.insert('a', 1)
  expect(toArray(tree)).toEqual([{ key: 'a', value: 1 }])
})

test('tree with an element that contains a: 2 to array', () => {
  const tree = new AvlTree<string, number>()
  tree.insert('a', 2)
  expect(toArray(tree)).toEqual([{ key: 'a', value: 2 }])
})

test('tree with an element that contains b: 2 to array', () => {
  const tree = new AvlTree<string, number>()
  tree.insert('b', 2)
  expect(toArray(tree)).toEqual([{ key: 'b', value: 2 }])
})

test('tree with an element that contains c: 2 to array', () => {
  const tree = new AvlTree<string, number>()
  tree.insert('c', 2)
  expect(toArray(tree)).toEqual([{ key: 'c', value: 2 }])
})

test('tree with 2 elements to array', () => {
  const tree = new AvlTree<string, number>()
  tree.insert('c', 2)
  tree.insert('a', 1)
  expect(toArray(tree)).toEqual([{ key: 'a', value: 1 }, { key: 'c', value: 2 }])
})

test('tree with 3 elements to array', () => {
  const tree = new AvlTree<string, number>()
  tree.insert('c', 2)
  tree.insert('a', 1)
  tree.insert('b', 3)
  expect(toArray(tree)).toEqual([{ key: 'a', value: 1 }, { key: 'b', value: 3 }, { key: 'c', value: 2 }])
})

test('empty array to tree', () => {
  expect(toAvlTree([])).toEqual(new AvlTree())
})

test('array with an element that contains a: 0 to tree', () => {
  const tree = new AvlTree<string, number>()
  tree.insert('a', 0)
  expect(toAvlTree([{ key: 'a', value: 0 }])).toEqual(tree)
})

test('array with an element that contains a: 1 to tree', () => {
  const tree = new AvlTree<string, number>()
  tree.insert('a', 1)
  expect(toAvlTree([{ key: 'a', value: 1 }])).toEqual(tree)
})

test('array with an element that contains a: 2 to tree', () => {
  const tree = new AvlTree<string, number>()
  tree.insert('a', 2)
  expect(toAvlTree([{ key: 'a', value: 2 }])).toEqual(tree)
})

test('array with an element that contains b: 2 to tree', () => {
  const tree = new AvlTree<string, number>()
  tree.insert('b', 2)
  expect(toAvlTree([{ key: 'b', value: 2 }])).toEqual(tree)
})

test('array with an element that contains c: 2 to tree', () => {
  const tree = new AvlTree<string, number>()
  tree.insert('c', 2)
  expect(toAvlTree([{ key: 'c', value: 2 }])).toEqual(tree)
})

test('array with 2 elements to tree', () => {
  const tree = new AvlTree<string, number>()
  tree.insert('a', 1)
  tree.insert('c', 2)
  expect(toAvlTree([{ key: 'a', value: 1 }, { key: 'c', value: 2 }])).toEqual(tree)
})

test('array with 3 elements to tree', () => {
  const tree = new AvlTree<string, number>()
  tree.insert('c', 2)
  tree.insert('a', 1)
  tree.insert('b', 3)
  expect(toAvlTree([{ key: 'a', value: 1 }, { key: 'b', value: 3 }, { key: 'c', value: 2 }])).toEqual(tree)
})
