import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

test('documents Studio as a concept with explicit implementation gates', async () => {
  const readme = await readFile(path.join(root, 'README.md'), 'utf8');
  assert.match(readme, /Status: concept only/);
  assert.match(readme, /This repository does not contain an implementation/);
  assert.match(readme, /Authentication, credential storage, and CORS handling/);
  assert.match(readme, /Acceptance tests against a disposable Moodle environment/);
});

test('does not accidentally introduce an application before product decisions are complete', async () => {
  for (const relativePath of ['src', 'app', 'server', 'public/index.html']) {
    await assert.rejects(access(path.join(root, relativePath)), `${relativePath} should not exist in the concept repository.`);
  }
});
