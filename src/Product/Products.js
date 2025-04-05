import img1 from ".././Images/q1.jpg";
import img2 from ".././Images/q2.jpg";
import img3 from ".././Images/q3.jpg";
import img4 from ".././Images/q4.jpg";
import img5 from ".././Images/q5.jpg";
import img6 from ".././Images/q6.jpg";
import img7 from ".././Images/q7.jpg";
import img8 from ".././Images/q8.jpg";
import img9 from ".././Images/q9.jpg";
import img10 from ".././Images/q10.jpg";
import img11 from ".././Images/q11.jpg";
import img12 from ".././Images/q12.jpg";
import img13 from ".././Images/q13.jpg";
import img14 from ".././Images/q14.jpg";
import img15 from ".././Images/q15.jpg";
import img16 from ".././Images/q16.jpg";
import img17 from ".././Images/q17.jpg";
import img18 from ".././Images/q18.jpg";
import img19 from ".././Images/q19.jpg";
import img20 from ".././Images/q20.jpg";
import img21 from ".././Images/q21.jpg";
import img22 from ".././Images/q22.jpg";
import img23 from ".././Images/q23.jpg";

const products = [
  {
    id: "A1B2C3D4",
    name: "Yam Flour",
    img: img6,
    price: 25.99,
    category: "Flour & Grains",
    description:
      "Premium-quality pounded yam flour for making smooth, stretchy fufu. Perfect with any Nigerian soup.",
  },
  {
    id: "E5F6G7H8",
    name: "Palm Oil",
    img: img2,
    price: 12.5,
    category: "Oils & Sauces",
    description:
      "Rich, unrefined red palm oil sourced from West Africa. Adds authentic flavor and color to your dishes.",
  },
  {
    id: "I9J1K2L3",
    name: "Egusi Seeds",
    img: img3,
    price: 18.75,
    category: "Seeds & Nuts",
    description:
      "High-quality, sun-dried Egusi seeds used for preparing thick, delicious Nigerian melon soup.",
  },
  {
    id: "M4N5O6P7",
    name: "Dried Stockfish",
    img: img4,
    price: 40.0,
    category: "Seafood",
    description:
      "Authentic dried stockfish for rich, umami flavor in traditional African soups and stews.",
  },
  {
    id: "Q8R9S1T2",
    name: "Ogi ",
    img: img5,
    price: 14.99,
    category: "Flour & Grains",
    description:
      "Finely milled pap powder (ogi) made from fermented maize. A nutritious and delicious breakfast porridge.",
  },
  {
    id: "U3V4W5X6",
    name: "Suya Spice ",
    img: img1,
    price: 8.99,
    category: "Spices & Seasoning",
    description:
      "A bold and flavorful spice blend for making authentic Nigerian suya (spicy grilled meat skewers).",
  },
  {
    id: "Y7Z8A1B2",
    name: "Dried Crayfish",
    img: img7,
    price: 22.5,
    category: "Seafood",
    description:
      "Premium dried crayfish for enhancing the taste of your soups, stews, and sauces with deep seafood flavor.",
  },
  {
    id: "C3D4E5F6",
    name: "Bitter Leaf",
    img: img8,
    price: 10.99,
    category: "Vegetables",
    description:
      "Dried bitter leaf, carefully processed for use in making traditional Nigerian Bitterleaf Soup (Ofe Onugbu).",
  },
  {
    id: "G7H8I9J1",
    name: "Groundnut Paste",
    img: img9,
    price: 16.25,
    category: "Spreads & Butters",
    description:
      "Smooth and creamy groundnut paste (peanut butter) for cooking or spreading on bread.",
  },
  {
    id: "K2L3M4N5",
    name: "Gari ",
    img: img10,
    price: 19.75,
    category: "Flour & Grains",
    description:
      "High-quality cassava flakes (gari) perfect for making eba or enjoying as a crunchy snack.",
  },
  {
    id: "O6P7Q8R9",
    name: "Plantain Chips",
    img: img11,
    price: 5.99,
    category: "Snacks",
    description:
      "Crispy, lightly salted plantain chips made from ripe plantains. A perfect on-the-go snack.",
  },
  {
    id: "S1T2U3V4",
    name: "Okra Powder",
    img: img12,
    price: 13.5,
    category: "Vegetables",
    description:
      "Finely ground okra powder for making easy, nutritious, and thick okra soup.",
  },
  {
    id: "W5X6Y7Z8",
    name: "Chin Chin",
    img: img13,
    price: 7.99,
    category: "Snacks",
    description:
      "Crunchy and sweet Nigerian chin chin, a delicious deep-fried snack perfect for any occasion.",
  },
  {
    id: "A9B8C7D6",
    name: "Beans Flour",
    img: img14,
    price: 21.5,
    category: "Flour & Grains",
    description:
      "Premium beans flour, ideal for making akara (bean cakes) or moi moi (steamed bean pudding).",
  },
  {
    id: "E5F4G3H2",
    name: "Dried Ugu ",
    img: img15,
    price: 15.0,
    category: "Vegetables",
    description:
      "Carefully dried ugu leaves (fluted pumpkin leaves) rich in nutrients for delicious soups and stews.",
  },
  {
    id: "I6J5K4L3",
    name: "Ofada Rice",
    img: img16,
    price: 28.99,
    category: "Flour & Grains",
    description:
      "Premium unpolished Ofada rice, known for its unique aroma and delicious taste in traditional Nigerian cuisine.",
  },
  {
    id: "M2N1O9P8",
    name: "Dried Pepper ",
    img: img17,
    price: 11.75,
    category: "Spices & Seasoning",
    description:
      "A blend of dried bell pepper, chili, and cayenne for making spicy and flavorful African dishes.",
  },
  {
    id: "Q7R6S5T4",
    name: "Locust Beans ",
    img: img18,
    price: 9.5,
    category: "Spices & Seasoning",
    description:
      "Traditional fermented locust beans (iru) to enhance the umami depth in soups and stews.",
  },

  {
    id: "Y8Z7A6B5",
    name: "Kuli Kuli",
    img: img22,
    price: 6.25,
    category: "Snacks",
    description:
      "Crunchy and protein-rich Kuli Kuli made from groundnuts, a perfect Nigerian snack.",
  },
  {
    id: "C4D3E2F1",
    name: "Dried Periwinkle",
    img: img19,
    price: 23.5,
    category: "Seafood",
    description:
      "Premium dried periwinkle for enhancing the flavor of soups, especially Afang and Edikang Ikong.",
  },
  {
    id: "U3V2W1X9",
    name: "Banga ",
    img: img21,
    price: 17.99,
    category: "Oils & Sauces",
    description:
      "Rich palm fruit concentrate for preparing authentic Banga soup, a Nigerian delicacy.",
  },
  {
    id: "G9H8I7J6",
    name: "Akamu ",
    img: img20,
    price: 12.25,
    category: "Flour & Grains",
    description:
      "Smooth and nutritious fermented corn starch (Akamu) for making traditional Nigerian pap.",
  },
  {
    id: "K5L4M3N2",
    name: "Pepper Soup ",
    img: img23,
    price: 10.99,
    category: "Spices & Seasoning",
    description:
      "Aromatic spice mix for preparing rich, flavorful Nigerian pepper soup with fish, meat, or chicken.",
  },
];

export default products;
