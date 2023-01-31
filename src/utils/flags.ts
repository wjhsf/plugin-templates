/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { Flags } from '@salesforce/sf-plugins-core';
import { Messages } from '@salesforce/core';
Messages.importMessagesDirectory(__dirname);

const messages = Messages.loadMessages('@salesforce/plugin-templates', 'messages');
const lightningMessages = Messages.loadMessages('@salesforce/plugin-templates', 'lightning');

export const outputDirFlag = Flags.string({
  char: 'd',
  summary: messages.getMessage('flags.outputdir'),
  description: messages.getMessage('flags.outputdir.description'),
  default: '.',
  deprecateAliases: true,
  aliases: ['outputdir'],
});

export const outputDirFlagLightning = Flags.string({
  char: 'd',
  summary: messages.getMessage('flags.outputdir'),
  description: messages.getMessage('flags.outputdir.description'),
  default: '.',
  deprecateAliases: true,
  aliases: ['outputdir'],
});

export const internalFlag = Flags.boolean({
  char: 'i',
  summary: lightningMessages.getMessage('flags.internal'),
  hidden: true,
});
