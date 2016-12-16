import run from './run';
import copy from './copy';
import clean from './clean';
import bundle from './bundle';
import render from './render';

async function build () {
  await run(clean);
  await run(copy);
  await run(bundle);
}

export default build;
