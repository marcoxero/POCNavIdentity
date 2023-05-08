Transactions = [
    {
        "id": "f9ad3871-3903-4835-a81b-1189c050203b",
        "postedDate": "2020-09-15",
        "description": "FRED FLINTSTONE",
        "credit": 1225.00,
        "position": {
        "pageNumber": 1,
        "top": 0.7027637,
        "left": 0.10796657,
        "width": 0.79463303,
        "height": 0.017460346
        }
    },
    {
        "id": "2247a362-3633-4ee8-b33a-0d88656b02f5",
        "postedDate": "2020-09-15",
        "description": "WILMA FLINTSTONE",
        "credit": 50.00,
        "position": {
        "pageNumber": 1,
        "top": 0.7201097,
        "left": 0.10797191,
        "width": 0.79463696,
        "height": 0.01633346
        }
    },
    {
        "id": "128bf838-c716-4ebb-a281-ac7ebd3c4762",
        "postedDate": "2020-09-15",
        "description": "ACME Advertising Advertising",
        "credit": 125.00,
        "position": {
        "pageNumber": 1,
        "top": 0.7548024,
        "left": 0.10794551,
        "width": 0.79408544,
        "height": 0.030128181
        }
    },
    {
        "id": "99c70fb8-be05-4265-bd15-c90e44fb8eea",
        "postedDate": "2020-09-15",
        "description": "Service Charge Rebate",
        "credit": 25.00,
        "position": {
        "pageNumber": 1,
        "top": 0.78482556,
        "left": 0.10795474,
        "width": 0.79408884,
        "height": 0.022129476
        }
    },
    {
        "id": "ffaf4828-2062-4497-9031-2a2226f67885",
        "postedDate": "2020-09-15",
        "description": "ACME Advertising Advertising",
        "debit": 125.00,
        "position": {
        "pageNumber": 2,
        "top": 0.30493778,
        "left": 0.10622705,
        "width": 0.7990435,
        "height": 0.030605733
        }
    },
    {
        "id": "3a579bc3-53ee-4016-bc62-ab4474606f2f",
        "postedDate": "2020-09-16",
        "description": "Bridgerton Logistics 905-555-6543 Description Interstate transportation container division",
        "debit": 125.00,
        "position": {
        "pageNumber": 2,
        "top": 0.33460268,
        "left": 0.10620759,
        "width": 0.79906344,
        "height": 0.054276824
        }
    },
    {
        "id": "35a01bab-35a4-404d-9b55-41c36c1c4b03",
        "postedDate": "2020-09-17",
        "description": "Jumping Jack Jeans Retail Description Item: DJF26482-7364 Quantity: 2",
        "debit": 41.00,
        "position": {
        "pageNumber": 2,
        "top": 0.43893617,
        "left": 0.106036134,
        "width": 0.8013314,
        "height": 0.055984646
        }
    },
    {
        "id": "df169344-2a19-47b9-83d1-e6c750621d4c",
        "postedDate": "2020-09-19",
        "description": "Starbucks #7583 Restaurant",
        "debit": 4.25,
        "position": {
        "pageNumber": 2,
        "top": 0.49394044,
        "left": 0.106025405,
        "width": 0.8013425,
        "height": 0.03039077
        }
    },
    {
        "id": "85e686bc-7b3a-45b6-b1f3-13c75f96395f",
        "postedDate": "2020-09-20",
        "description": "ACME Advertising Advertising",
        "debit": 125.00,
        "position": {
        "pageNumber": 3,
        "top": 0.14580727,
        "left": 0.10773914,
        "width": 0.7948781,
        "height": 0.029386133
        }
    },
    {
        "id": "d85dfc26-2035-48c6-a7d9-82d8f3ec65b6",
        "postedDate": "2020-09-22",
        "description": "Bridgerton Logistics 905-555-6543 Description Interstate transportation container division",
        "debit": 125.00,
        "position": {
        "pageNumber": 3,
        "top": 0.17413968,
        "left": 0.107708424,
        "width": 0.7949021,
        "height": 0.057447016
        }
    }
];

window.AddShape = (position) => {
    var box = new fabric.Rect({ top: position.top * Canvas.height, left: position.left * Canvas.width, width: position.width * Canvas.width, height: position.height * Canvas.height, fill: 'rgba(102, 255, 0, 0.4)' });
    Canvas.add(box);
}

for(var i = 0; i < Transactions.length; i++) {
    var transaction = Transactions[i];
    if(transaction.position.pageNumber == 1){
        AddShape(transaction.position);
    }        
}