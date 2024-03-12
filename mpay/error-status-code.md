---
id: error-status-code
title: Error/Status Codes
sidebar_position: 4
---

# Error / Status Codes

In terms of error handling there will be 2 cases of errors

- `200 OK` 
- Purchase Successful 
- not an ERROR`200 OK` 
- Purchase Declined ERRORsNon 200 ERRORs

After a call of an endpoint checking the HTTP response code will indicate if the transaction was OK or not.

In case of the 200 response, the status has to be checked to determine APPROVED from DECLINED. All non 200 response codes indicate a failure.

**HTTP 200 Purchase Successful**

That is not an error but just an example of the response you can expect if transaction was processed correctly

```js
{
    "card": {
        "brand": "visa",
        "funding": "credit",
        "country": "US",
        "number": "400000******0259",
        "holder_name": "John Doe"
    },
    "purchase": {
            "transaction_time_utc": "2020-03-26 02:08:38 AM",
            "status": "APPROVED",
            "purchase_reference": "846577135053848833",
            "amount": 110.2,
            "surcharge_amount": 0.0,
            "total_amount": 110.2,
            "currency": "AUD"
    },
    "response_code": "success",
    "response_message": "Your request has been successfully processed."
}
```

**HTTP 200 Error - Purchase Declined**

With all ‘200 errors’ the status of the transaction will be ‘declined’. The response of the ‘200 errors’ will contain the pair response_code and response_message which will have a detailed description of the problem.

```
"response_code": "generic_decline",
"response_message": "The card has been declined. Please use a different card."
```

In the most cases here the credit card is not suitable to be used and the best approach would be to use a different card rather then re-trying which will result in the same declined transaction.

**Examples**
```js
/** Sample : generic decline **/
{
    "card": {
        "brand": "visa",
        "funding": "credit",
        "country": "US",
        "number": "400000******0002",
        "holder_name": "John Doe"
    },
    "purchase": {
        "transaction_time_utc": "2020-03-26 01:50:51 AM",
        "status": "DECLINED",
        "purchase_reference": "335287298017947771",
        "amount": 110.2,
        "surcharge_amount": 0.0,
        "total_amount": 0.0,
        "currency": "AUD"
    },
    "response_code": "generic_decline",
    "response_message": "The card has been declined. Please use a different card."
}
/** Sample : Stolen card **/
 

{
    "card": {
        "brand": "visa",
        "funding": "credit",
        "country": "US",
        "number": "400000******9979",
        "holder_name": "John Doe"
    },
    "purchase": {
        "transaction_time_utc": "2020-03-26 01:57:31 AM",
        "status": "DECLINED",
        "purchase_reference": "247915481936229025",
        "amount": 110.2,
        "surcharge_amount": 0,
        "total_amount": null,
        "currency": "AUD"
    },
        "response_code": "stolen_card",
        "response_message": "A stolen card is being used. Please use a different card."
}


/** Sample : Insufficient funds **/
 
{
    "card": {
        "brand": "visa",
        "funding": "credit",
        "country": "US",
        "number": "400000******9995",
        "holder_name": "John Doe"
    },
    "purchase": {
        "transaction_time_utc": "2020-03-26 02:06:39 AM",
        "status": "DECLINED",
        "purchase_reference": "864559968685000961",
        "amount": 110.2,
        "surcharge_amount": 0,
        "total_amount": null,
        "currency": "AUD"
    },
    "response_code": "insufficient_funds",
    "response_message": "The card has insufficient funds to process this transaction. Please use a different card."
}
```
