type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Nasi Goreng",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/temporary/a1.png",
    price: 4.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Bacon Deluxe",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/temporary/p2.png",
    price: 9.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "croissant",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/temporary/a2.png",
    price: 2.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Spicy Arrabbiata",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/temporary/p4.png",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Jalapeño Fiesta",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/temporary/p5.png",
    price: 29.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Margherita Magic",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/temporary/p6.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 7,
    title: "Garlic Parmesan Linguine",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/temporary/p7.png",
    price: 28.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 8,
    title: "Mediterranean Delight",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/temporary/p8.png",
    price: 32.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 9,
    title: "Hawaiian Teriyaki",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/temporary/p9.png",
    price: 29.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
];




export const pizzas: Products = [
  {
    id: 1,
    title: "Nasi Goreng",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/temporary/a1.png",
    price: 4.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Mediterranean Delight",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/temporary/p8.png",
    price: 32.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "croissant",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/temporary/a2.png",
    price: 2.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Lemon tea",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/temporary/a4.png",
    price: 28.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Veggie Supreme",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/temporary/p11.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Four Cheese Fantasy",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/temporary/p12.png",
    price: 22.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
];

export const singleProduct: Product = 
{
  id: 1,
  title: "Sicilian",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  img: "/temporary/p1.png",
  price: 24.9,
  options: [
    {
      title: "Small",
      additionalPrice: 0,
    },
    {
      title: "Medium",
      additionalPrice: 4,
    },
    {
      title: "Large",
      additionalPrice: 6,
    },
  ],
};



type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "foods",
    title: " foods",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/temporary/m1.png",
    color: "white",
  },
  {
    id: 2,
    slug: "drinks",
    title: "hot & ice drinks",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/temporary/a3.png",
    color: "black",
  },
  {
    id: 3,
    slug: "others",
    title: "snacks",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/temporary/b2.png",
    color: "black",
  },
];
