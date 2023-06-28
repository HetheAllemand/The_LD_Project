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
    {
        "_id":"6",
        "price": 247.99,
        "title":"1x6 lumber",
        "image":"1x6.jpeg",
        "category":"Lumber"
      }, 
    {
        "_id":"7",
        "price": 284.99,
        "title":"2x4",
        "image":"2x4.jpeg",
        "category":"Lumber"
      }, 
    {
        "_id":"8",
        "price": 209.99,
        "title":"Plywood",
        "image":"plywood.png",
        "category":"Lumber"
      },
    {
        "_id":"9",
        "price": 211.99,
        "title":"Plywood",
        "image":"plywood_1.jpeg",
        "category":"Lumber"
      },
    {
        "_id":"10",
        "price": 96.99,
        "title":"Carving Knife",
        "image":"badass_knife.jpeg",
        "category":"Knife"
      },
    {
        "_id":"11",
        "price": 305.99,
        "title":"Knife Set",
        "image":"kitchen_knives.jpeg",
        "category":"Knife"
      },
    {
        "_id":"12",
        "price": 897.99,
        "title":"Bed",
        "image":"bed.jpeg",
        "category":"Bed"
      },
    {
        "_id":"13",
        "price": 1097.99,
        "title":"Raised Bed",
        "image":"bed_1.jpeg",
        "category":"Bed"
      },
    {
        "_id":"14",
        "price": 1297.99,
        "title":"Modern Bed",
        "image":"bed_2.jpeg",
        "category":"Bed"
      },
    {
        "_id":"15",
        "price": 199.99,
        "title":"Deck Table",
        "image":"deck_table.jpeg",
        "category":"Patio"
      },
    {
        "_id":"16",
        "price": 149.99,
        "title":"Patio Couch",
        "image":"patio_couch.jpeg",
        "category":"Patio"
      },
    {
        "_id":"17",
        "price": 139.99,
        "title":"Deck Chair Grey",
        "image":"deck_chair_grey.jpeg",
        "category":"Patio"
      },
    {
        "_id":"18",
        "price": 257.99,
        "title":"Grill Basic",
        "image":"grill_basic.jpeg",
        "category":"Grill"
      },
    {
        "_id":"19",
        "price": 1257.99,
        "title":"Grill Silver",
        "image":"grill_silver.webp",
        "category":"Grill"
      },
    {
        "_id":"20",
        "price": 1357.99,
        "title":"Smoker",
        "image":"smoker.jpeg",
        "category":"Grill"
      },
    {
        "_id":"21",
        "price": 23.99,
        "title":"Hammer",
        "image":"hammer.jpeg",
        "category":"Tools"
      },
    {
        "_id":"22",
        "price": 19.99,
        "title":"Hammer Basic",
        "image":"hammer_wood.jpeg",
        "category":"Tools"
      },
    {
        "_id":"23",
        "price": 237.99,
        "title":"Impact Driver",
        "image":"impact_dewalt.jpeg",
        "category":"Tools"
      },
    {
        "_id":"24",
        "price": 637.99,
        "title":"Mitr Saw",
        "image":"mitr_saw.jpg",
        "category":"Tools"
      },
    {
        "_id":"25",
        "price": 837.99,
        "title":"Mitr Saw Craftsman",
        "image":"mitr_saw_craftsman.png",
        "category":"Tools"
      },
    {
        "_id":"26",
        "price": 135.99,
        "title":"Nailer",
        "image":"nailer.jpeg",
        "category":"Tools"
      },
    {
        "_id":"27",
        "price": 235.99,
        "title":"Reciprocating Saw",
        "image":"reciprocating_saw.jpeg",
        "category":"Tools"
      },
    {
        "_id":"28",
        "price": 6.99,
        "title":"Nails",
        "image":"nails.jpeg",
        "category":"Tools"
      },
    {
        "_id":"29",
        "price": 7.99,
        "title":"Screws",
        "image":"screws.jpeg",
        "category":"Tools"
      },
    {
        "_id":"30",
        "price": 4.99,
        "title":"Tape Measure",
        "image":"tape_measure.jpeg",
        "category":"Tools"
      },
    {
        "_id":"31",
        "price": 25.99,
        "title":"Tape Measure Laser",
        "image":"tape_measure_laser.jpeg",
        "category":"Tools"
      },
    {
        "_id":"32",
        "price": 32.99,
        "title":"Tape Measure Lufkin",
        "image":"tape_measure_lufkin.jpeg",
        "category":"Tools"
      },
    {
        "_id":"33",
        "price": 695.99,
        "title":"Pots",
        "image":"pots.jpeg",
        "category":"Cookware"
      },
    {
        "_id":"34",
        "price": 995.99,
        "title":"Pots and Pans",
        "image":"pots_and_pans.jpeg",
        "category":"Cookware"
      },
];

class DataService {
    getProducts() {

        return catalog;
    }

}

export default DataService;