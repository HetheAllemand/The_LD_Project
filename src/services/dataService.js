var catalog = [
    {
        "_id":"1",
        "price": 359.99,
        "title":"Washing Machine",
        "image":"washer.jpg",
        "categorey":"Washers"
      },
    {
        "_id":"2",
        "price": 359.99,
        "title":"Washing Machine",
        "image":"washer 2.jpg",
        "categorey":"Washers"
      },
    {
        "_id":"3",
        "price": 359.99,
        "title":"Standard Refridgerator",
        "image":"fridgebasic.jpeg",
        "categorey":"Refrigerators"
      },
    {
        "_id":"4",
        "price": 359.99,
        "title":"Refrigerator",
        "image":"Refrigerator.png",
        "categorey":"Refrigerators"
      },
    {
        "_id":"5",
        "price": 359.99,
        "title":"double range",
        "image":"double_range.jpeg",
        "categorey":"stoves"
      },   
];

class DataService {
    getProducts() {

        return catalog;
    }

}

export default DataService;