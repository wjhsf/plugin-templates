/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { Flags, loglevel, orgApiVersionFlagWithDeprecations, SfCommand, Ux } from '@salesforce/sf-plugins-core';
import { CreateOutput, LightningInterfaceOptions } from '@salesforce/templates';
import LightningInterfaceGenerator from '@salesforce/templates/lib/generators/lightningInterfaceGenerator';
import { CreateUtil } from '@salesforce/templates/lib/utils';
import { Messages } from '@salesforce/core';
import { getCustomTemplates, runGenerator } from '../../../../utils/templateCommand';
import { internalFlag, outputDirFlagLightning } from '../../../../utils/flags';
const lightningInterfaceFileSuffix = /.intf$/;
const BUNDLE_TYPE = 'Interface';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.loadMessages('@salesforce/plugin-templates', 'lightningCmp');
const lightningCommon = Messages.loadMessages('@salesforce/plugin-templates', 'lightning');

export default class LightningInterface extends SfCommand<CreateOutput> {
  public static readonly summary = lightningCommon.getMessage('summary', [BUNDLE_TYPE]);
  public static readonly description = lightningCommon.getMessage('description', [BUNDLE_TYPE]);
  public static readonly examples = messages.getMessages('examples');

  public static readonly flags = {
    name: Flags.string({
      char: 'n',
      summary: lightningCommon.getMessage('flags.name', [BUNDLE_TYPE]),
      description: lightningCommon.getMessage('flags.name.description', [BUNDLE_TYPE]),
      required: true,
      aliases: ['interfacename'],
      deprecateAliases: true,
    }),
    template: Flags.string({
      char: 't',
      summary: lightningCommon.getMessage('flags.template'),
      description: lightningCommon.getMessage('flags.template.description'),
      default: 'DefaultLightningIntf',
      options: CreateUtil.getCommandTemplatesForFiletype(lightningInterfaceFileSuffix, 'lightninginterface'),
    }),
    'output-dir': outputDirFlagLightning,
    'api-version': orgApiVersionFlagWithDeprecations,
    internal: internalFlag,
    loglevel,
  };

  public async run(): Promise<CreateOutput> {
    const { flags } = await this.parse(LightningInterface);
    const flagsAsOptions: LightningInterfaceOptions = {
      interfacename: flags.name,
      outputdir: flags['output-dir'],
      internal: flags.internal,
      apiversion: flags['api-version'],
      template: 'DefaultLightningIntf',
    };
    return runGenerator({
      generator: LightningInterfaceGenerator,
      opts: flagsAsOptions,
      ux: new Ux({ jsonEnabled: this.jsonEnabled() }),
      templates: getCustomTemplates(this.configAggregator),
    });
  }
}
