var catalog = [
    {
        "_id":"1",
        "price": 359.99,
        "title":"Samsungwasher1",
        "image":"washer.jpg",
        "category":"Washing Machines"
      },
    {
        "_id":"2",
        "price": 359.99,
        "title":"Samsungwasher2",
        "image":"washer 2.jpg",
        "category":"Washing Machines"
      },
    {
        "_id":"3",
        "price": 359.99,
        "title":"Standard Refrigerator",
        "image":"fridgebasic.jpeg",
        "category":"Refrigerators"
      },
    {
        "_id":"4",
        "price": 359.99,
        "title":"Refrigerator",
        "image":"Refrigerator.png",
        "category":"Refrigerators"
      },
    {
        "_id":"5",
        "price": 359.99,
        "title":"double range",
        "image":"double_range.jpeg",
        "category":"Electric Range"
      },   
];

class DataService {
    getProducts() {

        return catalog;
    }

}

export default DataService;