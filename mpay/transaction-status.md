---
id: transaction-status
title: Transaction Status
sidebar_position: 3
---

# transaction-status

Many endpoints will return transaction status. Following a list with all transaction outcomes

Status | Description APPROVED | Transaction was approved by the bank DECLINED | Transaction was declined by the bank FAILED | Transaction failed REQUIRES_AUTHENTICATION (3DS only) | User needs to enter OTP in order to proceed with transaction PRE_AUTHORISED | Transaction is pre-authorised. Bank will put a hold on the funds PRE_AUTHORISED_REVERSED | Pre-Authorised is released/reversed/cancelled. Bank will release hold on the amount that were authorised
