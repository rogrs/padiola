CREATE TABLE IF NOT EXISTS Transactions(
  document jsonb
);


INSERT INTO Transactions VALUES ('{
   "records": {
      "@type": "sObject",
      "type": "FieloPLT__Transaction__c",
      "Id": [
         "a0s1U000000Ncl8QAC",
         "a0s1U000000Ncl8QAC"
      ],
      "CreatedById": "0051U0000026SQoQAM",
      "CreatedDate": "2019-05-28T20:22:03.000Z",
      "FieloPLT__Action__c": {
         "@nil": "true"
      },
      "FieloPLT__ChallengeMember__c": {
         "@nil": "true"
      },
      "FieloPLT__Date__c": "2019-05-28T20:21:59.000Z",
      "FieloPLT__Event__c": {
         "@nil": "true"
      },
      "FieloPLT__IsAdjust__c": "true",
      "FieloPLT__IsCapped__c": "false",
      "FieloPLT__IsOffline__c": "false",
      "FieloPLT__IsProcessed__c": "true",
      "FieloPLT__IsReverted__c": "false",
      "FieloPLT__Member__c": "a0T1U000000PAGtUAO",
      "FieloPLT__PointCost__c": {
         "@nil": "true"
      },
      "FieloPLT__PointExpirationDate__c": "2019-05-14",
      "FieloPLT__Points__c": "1000.0",
      "FieloPLT__RevertedTransaction__c": {
         "@nil": "true"
      },
      "FieloPLT__RewardingSummary__c": {
         "adjust": {
            "Point": {
               "attributes": {
                  "type": "FieloPLT__Point__c",
                  "url": "/services/data/v45.0/sobjects/FieloPLT__Point__c/a0Z1U0000031xe5UAA"
               },
               "Id": "a0Z1U0000031xe5UAA",
               "Name": "P-0000029",
               "FieloPLT__Balance__c": 1000,
               "FieloPLT__Member__c": "a0T1U000000PAGtUAO",
               "FieloPLT__PointType__c": "a0Y1U000001TMlpUAG",
               "FieloPLT__Status__c": "Approved",
               "FieloPLT__Transaction__c": "a0s1U000000Ncl8QAC",
               "FieloPLT__TotalPoints__c": 1000,
               "FieloPLT__UsedPoints__c": 0
            }
         }
      },
      "FieloPLT__Reward__c": {
         "@nil": "true"
      },
      "FieloPLT__SkipEngine__c": "true",
      "FieloPLT__Type__c": "Adjustment",
      "FieloPLT__Value__c": "0.0",
      "IsDeleted": "false",
      "LastModifiedById": "0051U0000026SQoQAM",
      "LastModifiedDate": "2019-05-28T20:22:04.000Z",
      "name": "T-0000025",
      "OwnerId": "0051U0000026SQoQAM",
      "SystemModstamp": "2019-05-28T20:22:04.000Z"
   }
}');
INSERT INTO transactions VALUES ('{
   "records": {
      "@type": "sObject",
      "type": "FieloPLT__Transaction__c",
      "Id": [
         "a0s1U000000Ncl8QAC",
         "a0s1U000000Ncl8QAC"
      ],
      "CreatedById": "0051U0000026SQoQAM",
      "CreatedDate": "2019-05-28T20:22:03.000Z",
      "FieloPLT__Action__c": {
         "@nil": "true"
      },
      "FieloPLT__ChallengeMember__c": {
         "@nil": "true"
      },
      "FieloPLT__Date__c": "2019-05-28T20:21:59.000Z",
      "FieloPLT__Event__c": {
         "@nil": "true"
      },
      "FieloPLT__IsAdjust__c": "true",
      "FieloPLT__IsCapped__c": "false",
      "FieloPLT__IsOffline__c": "false",
      "FieloPLT__IsProcessed__c": "true",
      "FieloPLT__IsReverted__c": "false",
      "FieloPLT__Member__c": "a0T1U000000PAGtUAO",
      "FieloPLT__PointCost__c": {
         "@nil": "true"
      },
      "FieloPLT__PointExpirationDate__c": "2019-05-14",
      "FieloPLT__Points__c": "1000.0",
      "FieloPLT__RevertedTransaction__c": {
         "@nil": "true"
      },
      "FieloPLT__RewardingSummary__c": {
         "adjust": {
            "Point": {
               "attributes": {
                  "type": "FieloPLT__Point__c",
                  "url": "/services/data/v45.0/sobjects/FieloPLT__Point__c/a0Z1U0000031xe5UAA"
               },
               "Id": "a0Z1U0000031xe5UAA",
               "Name": "P-0000029",
               "FieloPLT__Balance__c": 1000,
               "FieloPLT__Member__c": "a0T1U000000PAGtUAO",
               "FieloPLT__PointType__c": "a0Y1U000001TMlpUAG",
               "FieloPLT__Status__c": "Approved",
               "FieloPLT__Transaction__c": "a0s1U000000Ncl8QAC",
               "FieloPLT__TotalPoints__c": 1000,
               "FieloPLT__UsedPoints__c": 0
            }
         }
      },
      "FieloPLT__Reward__c": {
         "@nil": "true"
      },
      "FieloPLT__SkipEngine__c": "true",
      "FieloPLT__Type__c": "Adjustment",
      "FieloPLT__Value__c": "0.0",
      "IsDeleted": "false",
      "LastModifiedById": "0051U0000026SQoQAM",
      "LastModifiedDate": "2019-05-28T20:22:04.000Z",
      "name": "T-0000026",
      "OwnerId": "0051U0000026SQoQAM",
      "SystemModstamp": "2019-05-28T20:22:04.000Z"
   }
}');

CREATE INDEX idxname ON transactions ((document->>'name'));