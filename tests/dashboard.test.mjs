import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.resolve(__dirname, '..', 'public', 'index.html');

test('Dashboard: HTML Static Invariants and Security Guardrails', () => {
  assert.ok(fs.existsSync(htmlPath), 'index.html must exist');
  const html = fs.readFileSync(htmlPath, 'utf8');

  // Verify FIPS 205 Parameter Sets rendered
  assert.ok(html.includes('SLH-DSA-SHA2-128s'), 'Must display SLH-DSA-SHA2-128s');
  assert.ok(html.includes('SLH-DSA-SHA2-128f'), 'Must display SLH-DSA-SHA2-128f');
  assert.ok(html.includes('SLH-DSA-SHA2-192s'), 'Must display SLH-DSA-SHA2-192s');
  assert.ok(html.includes('SLH-DSA-SHA2-256s'), 'Must display SLH-DSA-SHA2-256s');

  // Verify exact byte lengths rendered
  assert.ok(html.includes('32 B'), 'SLH-DSA pk size (32 B)');
  assert.ok(html.includes('7,856 B'), 'SLH-DSA-SHA2-128s sig size');
  assert.ok(html.includes('17,088 B'), 'SLH-DSA-SHA2-128f sig size');
  assert.ok(html.includes('16,224 B'), 'SLH-DSA-SHA2-192s sig size');
  assert.ok(html.includes('29,792 B'), 'SLH-DSA-SHA2-256s sig size');

  // Verify Production Certification Lock
  assert.ok(
    html.includes('DEPLOYMENT: LOCKED (0/1,000 CERTIFIED)'),
    'Must display persistent mainnet deployment lock badge'
  );

  // Verify quantum resistance metrics
  assert.ok(html.includes("Shor's Algorithm"), 'Must analyze Shor vulnerability of classical crypto');
  assert.ok(html.includes("Grover's Algorithm"), 'Must analyze Grover preimage resistance');
  assert.ok(html.includes('WOTS+'), 'Must explain WOTS+ component');
  assert.ok(html.includes('FORS'), 'Must explain FORS component');
});
