# @qmoosa/pqc-slhdsa-dashboard

[![CI Gate](https://github.com/elon00/qmoosa-pqc-slhdsa-dashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/elon00/qmoosa-pqc-slhdsa-dashboard/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> QMOOSA Post-Quantum Cryptography Suite — NIST FIPS 205 SLH-DSA Interactive Quantum Security Terminal & Reality Gate Monitor.

## Overview

`@qmoosa/pqc-slhdsa-dashboard` provides an interactive terminal and reality-gate monitoring interface for NIST FIPS 205 Stateless Hash-Based Digital Signatures (SLH-DSA, formerly SPHINCS+).
It inspects parameter definitions, key sizes, signature byte lengths, WOTS+/FORS/hypertree architectures, and displays the immutable production deployment lock badge.

## Security Posture

- **Deployment Status:** **LOCKED (0 / 1,000 certified)**
- **Cryptographic Grounding:** Hash-based collision and preimage resistance (zero reliance on lattice problems).
- **Quantum Resistance:** Complete immunity against Shor's discrete logarithm and factoring algorithm.

## Testing & Linting

```bash
npm install
npm test
npm run lint
```
