#!/usr/bin/env node

'use strict'

import { keyInSelect, question, questionNewPassword } from 'readline-sync'
import { readFileSync, writeFileSync } from 'fs'
import clipboard from 'clipboardy'
import { AvlTree, showPagination } from '@ii887522/hydro'

const secretsFilePath = 'secrets.json'
const secrets = new AvlTree<string, string>()

function saveNewSecret (): void {
  while (true) {
    console.log()
    const label = question('Please enter a label for the secret > ')
    if (label === '') {
      console.error('Label for the secret must not be empty! Please try again.')
      continue
    }
    if (secrets.get(label) !== undefined) {
      console.error('Label for the secret already exists! Please try again.')
      continue
    }
    const secret = questionNewPassword(
      'Please enter a secret > ', { keepWhitespace: true, charlist: '$< -~>', min: 16, max: 64, confirmMessage: 'Please reenter the new secret > ' }
    )
    secrets.put(label, secret)
    console.log()
    console.log('You have successfully saved a new secret!')
    break
  }
  console.log()
}

function copyExistingSecret (): void {
  const secretArray = secrets.toArrayInorder()
  showPagination(
    secretArray.map(secret => secret.key),
    {
      query: 'Please type a choice to copy its secret',
      showHeader: () => {
        console.log('         Secret List')
        console.log('-----------------------------')
      },
      onSelected: index => {
        clipboard.writeSync(secretArray[index]?.value ?? '')
        console.log(`The secret of ${secretArray[index]?.key ?? ''} has been successfully copied!`)
      }
    }
  )
  console.log()
}

function viewExistingSecret (): void {
  const secretArray = secrets.toArrayInorder()
  showPagination(
    secretArray.map(secret => secret.key),
    {
      query: 'Please type a choice to read its secret',
      showHeader: () => {
        console.log('         Secret List')
        console.log('-----------------------------')
      },
      onSelected: index => {
        console.log(`The secret of ${secretArray[index]?.key ?? ''} is ${secretArray[index]?.value ?? ''}`)
      }
    }
  )
  console.log()
}

function updateExistingSecret (): void {
  const secretArray = secrets.toArrayInorder()
  showPagination(
    secretArray.map(secret => secret.key),
    {
      query: 'Please type a choice to update its secret',
      showHeader: () => {
        console.log('         Secret List')
        console.log('-----------------------------')
      },
      onSelected: index => {
        secrets.put(
          secretArray[index]?.key ?? '',
          questionNewPassword(
            'Please enter a new secret > ', { keepWhitespace: true, charlist: '$< -~>', min: 16, max: 64, confirmMessage: 'Please reenter the new secret > ' }
          )
        )
        console.log()
        console.log(`The secret of ${secretArray[index]?.key ?? ''} has been successfully updated!`)
      }
    }
  )
  console.log()
}

function deleteExistingSecret (): void {
  const secretArray = secrets.toArrayInorder()
  showPagination(
    secretArray.map(secret => secret.key),
    {
      query: 'Please type a choice to delete it',
      showHeader: () => {
        console.log('         Secret List')
        console.log('-----------------------------')
      },
      onSelected: index => {
        secrets.remove(secretArray[index]?.key ?? '')
        console.log(`The secret of ${secretArray[index]?.key ?? ''} has been successfully deleted!`)
      }
    }
  )
  console.log()
}

try {
  secrets.putBulk(...JSON.parse(readFileSync(secretsFilePath).toString()))
} catch (_error: any) { }

process.on('exit', () => writeFileSync(secretsFilePath, JSON.stringify(secrets.toArrayInorder())))

let isRunning = true
while (isRunning) {
  console.log('    Secret Manager v2.0.0')
  console.log('-----------------------------')
  switch (
    keyInSelect(
      ['Save a new secret', 'Copy an existing secret', 'Read an existing secret', 'Update an existing secret', 'Delete an existing secret'],
      'Please type a choice',
      { cancel: 'Exit' }
    )
  ) {
    case -1: isRunning = false
      break
    case 0: saveNewSecret()
      break
    case 1: copyExistingSecret()
      break
    case 2: viewExistingSecret()
      break
    case 3: updateExistingSecret()
      break
    case 4: deleteExistingSecret()
  }
}
