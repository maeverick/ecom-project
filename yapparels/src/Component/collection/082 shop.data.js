const SHOP_DATA = [
  {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: require("./shop-img/hats/brown-brim.png"),  
        price: 25,
        size: 'M',
        color: 'Brown'
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: require('./shop-img/hats/blue-beanie.png'),
        price: 18,
        size: 'L',
        color: 'Blue'
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: require('./shop-img/hats/brown-cowboy.png'),
        price: 35,
        size: 'M',
        color: 'Brown'
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: require('./shop-img/hats/grey-brim.png'),
        price: 25,
        size: 'S',
        color: 'Grey'
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: require('./shop-img/hats/green-beanie.png'),
        price: 18,
        size: 'L',
        color: 'Green'
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: require('./shop-img/hats/palm-tree-cap.png'),
        price: 14,
        size: 'M',
        color: 'Green'
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: require('./shop-img/hats/red-beanie.png'),
        price: 18,
        size: 'L',
        color: 'Red'
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: require('./shop-img/hats/wolf-cap.png'),
        price: 14,
        size: 'M',
        color: 'Grey'
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: require('./shop-img/hats/blue-snapback.png'),
        price: 16,
        size: 'L',
        color: 'Blue'
      }
    ]
  },
  {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: require('./shop-img/sneakers/adidas-nmd.png'),
        price: 220,
        size: '10',
        color: 'Black'
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: require('./shop-img/sneakers/yeezy.png'),
        price: 280,
        size: '9',
        color: 'Grey'
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: require('./shop-img/sneakers/black-converse.png'),
        price: 110,
        size: '8',
        color: 'Black'
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: require('./shop-img/sneakers/white-nike-high-tops.png'),
        price: 160,
        size: '10',
        color: 'White'
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: require('./shop-img/sneakers/nikes-red.png'),
        price: 160,
        size: '9',
        color: 'Red'
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: require('./shop-img/sneakers/nike-brown.png'),
        price: 160,
        size: '10',
        color: 'Brown'
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: require('./shop-img/sneakers/nike-funky.png'),
        price: 190,
        size: '11',
        color: 'Multi'
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: require('./shop-img/sneakers/timberlands.png'),
        price: 200,
        size: '12',
        color: 'Brown'
      }
    ]
  },
  {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: require('./shop-img/jackets/black-shearling.png'),
        price: 125,
        size: 'M',
        color: 'Black'
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: require('./shop-img/jackets/blue-jean-jacket.png'),
        price: 90,
        size: 'L',
        color: 'Blue'
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: require('./shop-img/jackets/grey-jean-jacket.png'),
        price: 90,
        size: 'M',
        color: 'Grey'
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: require('./shop-img/jackets/brown-shearling.png'),
        price: 165,
        size: 'L',
        color: 'Brown'
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: require('./shop-img/jackets/brown-trench.png'),
        price: 185,
        size: 'M',
        color: 'Tan'
      }
    ]
  },
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: require('./shop-img/womens/blue-tank.png'),
        price: 25,
        size: 'S',
        color: 'Blue'
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: require('./shop-img/womens/floral-blouse.png'),
        price: 20,
        size: 'M',
        color: 'Floral'
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: require('./shop-img/womens/floral-skirt.png'),
        price: 80,
        size: 'L',
        color: 'Floral'
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: require('./shop-img/womens/red-polka-dot-dress.png'),
        price: 80,
        size: 'M',
        color: 'Red'
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: require('./shop-img/womens/striped-sweater.png'),
        price: 45,
        size: 'L',
        color: 'Striped'
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: require('./shop-img/womens/yellow-track-suit.png'),
        price: 135,
        size: 'M',
        color: 'Yellow'
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: require('./shop-img/womens/white-vest.png'),
        price: 20,
        size: 'S',
        color: 'White'
      }
    ]
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: require('./shop-img/mens/camo-vest.png'),
        price: 325,
        size: 'L',
        color: 'Camo'
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: require('./shop-img/mens/floral-shirt.png'),
        price: 20,
        size: 'M',
        color: 'Floral'
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: require('./shop-img/mens/long-sleeve.png'),
        price: 25,
        size: 'L',
        color: 'Black & White'
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: require('./shop-img/mens/pink-shirt.png'),
        price: 25,
        size: 'M',
        color: 'Pink'
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: require('./shop-img/mens/roll-up-jean-shirt.png'),
        price: 40,
        size: 'L',
        color: 'Blue'
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: require('./shop-img/mens/polka-dot-shirt.png'),
        price: 25,
        size: 'M',
        color: 'Burgundy'
      }
    ]
  }
];

export default SHOP_DATA;