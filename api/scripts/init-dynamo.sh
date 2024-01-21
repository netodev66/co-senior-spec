#!/bin/bash

# -- > Create DynamoDb Table
echo Creating  DynamoDb \'User\' table ...
echo $(awslocal dynamodb create-table --cli-input-json '{"TableName":"user", "KeySchema":[{"AttributeName":"username","KeyType":"HASH"}], "AttributeDefinitions":[{"AttributeName":"id","AttributeType":"S"}, {"AttributeName":"password","AttributeType":"S"}, {"AttributeName":"username","AttributeType":"S"}],"BillingMode":"PAY_PER_REQUEST"}')
echo Creating  DynamoDb \'Products\' table ...
echo $(awslocal dynamodb create-table --cli-input-json '{"TableName":"products", "KeySchema":[{"AttributeName":"id","KeyType":"HASH"},], "AttributeDefinitions":[{"AttributeName":"id","AttributeType":"S"}, {"AttributeName":"product_asset","AttributeType":"S"}, {"AttributeName":"product_name","AttributeType":"S"}, {"AttributeName":"product_price","AttributeType":"N"}],"BillingMode":"PAY_PER_REQUEST"}')

echo $(awslocal dynamodb put-item \
    --table-name Products \
    --item '{ "id": {  "S": "a02930ea-fe86-4b0c-9893-1e3f42ed7766" }, "product_asset": {  "S": "https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_640,q_100/site-ton/maquininhas/release-machine-t3-smart-1" }, "product_name": {  "S": "T3 Smart Básico" }, "product_price": {  "N": "286.8" }}')

echo $(awslocal dynamodb put-item \
    --table-name Products \
    --item '{  "id": {    "S": "cac8bbd6-68d9-4068-bce0-f085c426b062"  },  "product_asset": {    "S": "https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_640,q_100/site-ton/maquininhas/release-machine-t3-smart-1"  },  "product_name": {    "S": "T3 Smart intermediário"  },  "product_price": {    "N": "216.8"  }}')

echo $(awslocal dynamodb put-item \
    --table-name Products \
    --item '{  "id": {    "S": "edb2d31e-e851-484b-82dd-48abe8d4f129"  },  "product_asset": {    "S": "https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_640,q_auto/site-ton/maquininhas/new-t2-1"  },  "product_name": {    "S": "T2 +"  },  "product_price": {    "N": "110"  }}')

echo $(awslocal dynamodb put-item \
    --table-name Products \
    --item '{  "id": {    "S": "828f5258-abff-4cc7-8a5a-df766b8cb92f"  },  "product_asset": {    "S": "https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_640,q_auto/site-ton/maquininhas/new-t2-1"  },  "product_name": {    "S": "T2"  },  "product_price": {    "N": "100"  }}')

echo $(awslocal dynamodb put-item \
    --table-name Products \
    --item '{  "id": {    "S": "3ba3af74-55b5-429f-9172-09a22fe59f38"  },  "product_asset": {    "S": "https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_640,q_auto/site-ton/maquininhas/new-t1-1"  },  "product_name": {    "S": "T1 Chip basic"  },  "product_price": {    "N": "94.9"  }}')

echo $(awslocal dynamodb put-item \
    --table-name Products \
    --item '{  "id": {    "S": "9fd0a7bf-df36-415c-a58e-59b5cd237a92"  },  "product_asset": {    "S": "https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_640,q_auto/site-ton/maquininhas/new-t1-1"  },  "product_name": {    "S": "T1 Basic"  },  "product_price": {    "N": "18"  }}')

# --> List DynamoDb Tables
echo Listing tables ...
echo $(awslocal dynamodb list-tables)