#!/usr/bin/env node
'use strict';
import { keyInSelect, question, questionNewPassword } from 'readline-sync';
import { readFileSync, writeFileSync } from 'fs';
import { AvlTree } from '@datastructures-js/binary-search-tree';
import clipboard from 'clipboardy';
import { toArray, toAvlTree } from './src/collection_ext.js';
import { showPagination } from './src/components.js';
const secretsFilePath = 'secrets.json';
let secrets;
function saveNewSecret() {
    while (true) {
        console.log();
        const label = question('Please enter a label for the secret > ');
        if (label === '') {
            console.error('Label for the secret must not be empty! Please try again.');
            continue;
        }
        if (secrets.has(label)) {
            console.error('Label for the secret already exists! Please try again.');
            continue;
        }
        const secret = questionNewPassword('Please enter a secret > ', { keepWhitespace: true, charlist: '$< -~>', min: 16, max: 64, confirmMessage: 'Please reenter the new secret > ' });
        secrets.insert(label, secret);
        console.log();
        console.log('You have successfully saved a new secret!');
        break;
    }
    console.log();
}
function copyExistingSecret() {
    const secretArray = toArray(secrets);
    showPagination(secretArray.map(secret => secret.key), {
        query: 'Please type a choice to copy its secret',
        showHeader: () => {
            console.log('         Secret List');
            console.log('-----------------------------');
        },
        onSelected: index => {
            clipboard.writeSync(secretArray[index]?.value ?? '');
            console.log(`The secret of ${secretArray[index]?.key ?? ''} has been successfully copied!`);
        }
    });
    console.log();
}
function updateExistingSecret() {
    const secretArray = toArray(secrets);
    showPagination(secretArray.map(secret => secret.key), {
        query: 'Please type a choice to update its secret',
        showHeader: () => {
            console.log('         Secret List');
            console.log('-----------------------------');
        },
        onSelected: index => {
            secrets.insert(secretArray[index]?.key ?? '', questionNewPassword('Please enter a new secret > ', { keepWhitespace: true, charlist: '$< -~>', min: 16, max: 64, confirmMessage: 'Please reenter the new secret > ' }));
            console.log();
            console.log(`The secret of ${secretArray[index]?.key ?? ''} has been successfully updated!`);
        }
    });
    console.log();
}
function deleteExistingSecret() {
    const secretArray = toArray(secrets);
    showPagination(secretArray.map(secret => secret.key), {
        query: 'Please type a choice to delete it',
        showHeader: () => {
            console.log('         Secret List');
            console.log('-----------------------------');
        },
        onSelected: index => {
            secrets.remove(secretArray[index]?.key ?? '');
            console.log(`The secret of ${secretArray[index]?.key ?? ''} has been successfully deleted!`);
        }
    });
    console.log();
}
try {
    secrets = toAvlTree(JSON.parse(readFileSync(secretsFilePath).toString()));
}
catch (error) {
    secrets = new AvlTree();
}
process.on('exit', () => writeFileSync(secretsFilePath, JSON.stringify(toArray(secrets))));
let isRunning = true;
while (isRunning) {
    console.log('    Secret Manager v1.0.0');
    console.log('-----------------------------');
    switch (keyInSelect(['Save a new secret', 'Copy an existing secret', 'Update an existing secret', 'Delete an existing secret'], 'Please type a choice', { cancel: 'Exit' })) {
        case -1:
            isRunning = false;
            break;
        case 0:
            saveNewSecret();
            break;
        case 1:
            copyExistingSecret();
            break;
        case 2:
            updateExistingSecret();
            break;
        case 3: deleteExistingSecret();
    }
}
