#!/usr/bin/env node
'use strict';

require('commander')
  .version(require('../package').version)
  .usage('<command> [options]')
  .command('init', 'generate a new project from a template')
  .command('list', 'list available official templates')
  .parse(process.argv);