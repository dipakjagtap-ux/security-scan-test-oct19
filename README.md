# Security Scan Test Fixture

This repository fixture is designed to exercise all three Test Hub security scan areas:
1. Application code (JavaScript source)
2. Hardcoded secrets (synthetic test-only values; not real credentials)
3. Dependencies (intentionally old package versions for vulnerability-scanner validation)

## Important
- The values in `config/test-config.js` are fake scanner test strings, not usable credentials.
- Do not replace them with real credentials.
- This fixture intentionally uses old dependency versions. Use it only in a disposable test repository.
- To test pull-request scanning, add these files to a new branch and open a PR against `main`.
