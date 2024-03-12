---
id: security
title: Security
sidebar_position: 2
---

# Security

### Authentication
mPay uses an API keys to uniquely authenticate requests. Your API key will be issued by Mint during the on-boarding process. Your API keys are very important as using them will allow you to interact with mPay. Please make sure that you store the API keys with caution and never share them publicly to third parties.

### Authorization
Using the API key, mPay will allow you to obtain a transaction token.

Transaction Token is issued by mPay for single use only. Once a token is used it will be invalidated and cannot be used anymore. If e.g. your ‘purchase’ transaction timed out for some reason, you need to request a new token before retrying the ‘purchase’ again. Calling mPay with the same token twice will result in an error.
