const products = [
  {
    id: 134,
    img: "src/assets/img/productos/producto-1.png",
    title: "Zapatillas Nike",
    price: "$89000",
    isFavorite: true,
    isNewProduct: true,
    isFreeShipping: false,
    fees: [
      { feesNumber: 6, feesPrice: 120000 },
      { feesNumber: 12, feesPrice: 240000 },
    ],
    category: "Hombres",
    productType: "Zapatillas",
    productSizes: ["40", "41", "42", "43", "44"],
    brand: "Nike",
    description: "Las zapatillas Nike son conocidas por su calidad excepcional y diseño innovador. Estas zapatillas están diseñadas para brindar comodidad y estilo durante tus actividades diarias.",
    gender: "Hombres"
  },
  {
    id: 135,
    img: "src/assets/img/productos/ADHP5789-1.jpeg",
    title: "Zapatillas Running adidas Adistar 2 Hombre",
    price: "$139999",
    isFavorite: false,
    isNewProduct: false,
    isFreeShipping: true,
    fees: [],
    category: "Hombres",
    productType: "Zapatillas",
    productSizes: ["39", "40", "41", "42", "43"],
    brand: "Adidas",
    description: "Estas zapatillas de running adidas Adistar 2 para hombre son ideales para corredores que buscan un calzado cómodo y duradero. Con tecnología de amortiguación Boost para una sensación de retorno de energía.",
    gender: "Hombres"
  },
  {
    id: 136,
    img: "../img/Hombre/AD_GW9088-1.JPG",
    title: "Zapatillas adidas Supernova",
    price: "$99999",
    isFavorite: false,
    isNewProduct: false,
    isFreeShipping: true,
    fees: [],
    category: "Hombres",
    productType: "Zapatillas",
    productSizes: ["40", "41", "42", "43", "44"],
    brand: "Adidas",
    description: "Las zapatillas adidas Supernova están diseñadas para corredores que buscan una combinación de comodidad y rendimiento. Con amortiguación Boost para una mayor capacidad de respuesta y una sensación de retorno de energía.",
    gender: "Hombres"
  },
  {
    id: 137,
    img: "../img/Hombre/ADHP2602-1.JPG",
    title: "Zapatillas adidas Court Revival Hombre",
    price: "$99500",
    isFavorite: false,
    isNewProduct: false,
    isFreeShipping: true,
    fees: [],
    category: "Hombres",
    productType: "Zapatillas",
    productSizes: ["38", "39", "40", "41", "42"],
    brand: "Adidas",
    description: "Las zapatillas adidas Court Revival son perfectas para uso diario y actividades deportivas. Con su diseño clásico y materiales duraderos, te brindan comodidad y estilo a cada paso.",
    gender: "Hombres"
  },
  {
    id: 138,
    img: "../img/Hombre/ADHT3679-1.JPG",
    title: "Camiseta adidas River Plate",
    price: "$69999",
    isFavorite: false,
    isNewProduct: false,
    isFreeShipping: true,
    fees: [],
    category: "Hombres",
    productType: "Camiseta",
    productSizes: ["S", "M", "L", "XL", "XXL"],
    brand: "Adidas",
    description: "La camiseta adidas River Plate es perfecta para los aficionados del fútbol. Con su diseño elegante y materiales de alta calidad, te mantendrá fresco y cómodo durante todo el día.",
    gender: "Hombres"
  },
  {
    id: 139,
    img: "../img/Hombre/ADID1538-1.JPG",
    title: "Zapatillas Entrenamiento adidas Courtjam Control",
    price: "$102999",
    isFavorite: false,
    isNewProduct: false,
    isFreeShipping: true,
    fees: [],
    category: "Hombres",
    productType: "Zapatillas",
    productSizes: ["40", "41", "42", "43", "44"],
    brand: "Adidas",
    description: "Las zapatillas de entrenamiento adidas Courtjam Control ofrecen un excelente soporte y estabilidad para tus sesiones de entrenamiento. Con tecnología de amortiguación Bounce para una mayor comodidad y retorno de energía.",
    gender: "Hombres"
  },
  {
    id: 140,
    img: "../img/Hombre/ADIV1922-1.JPG",
    title: "Camiseta Fútbol Boca Juniors adidas",
    price: "$69999",
    isFavorite: false,
    isNewProduct: false,
    isFreeShipping: true,
    fees: [],
    category: "Hombres",
    productType: "Camiseta",
    productSizes: ["S", "M", "L", "XL", "XXL"],
    brand: "Adidas",
    description: "Demuestra tu apoyo al Boca Juniors con esta camiseta oficial de adidas. Diseñada con los colores y el escudo del equipo, esta camiseta es perfecta para usar en el estadio o en la calle.",
    gender: "Hombres"
  },
  {
    id: 141,
    img: "../img/Hombre/ADIV3066-1.JPG",
    title: "Chomba adidas Argentina",
    price: "$37999",
    isFavorite: false,
    isNewProduct: false,
    isFreeShipping: true,
    fees: [],
    category: "Hombres",
    productType: "Chomba",
    productSizes: ["S", "M", "L", "XL", "XXL"],
    brand: "Adidas",
    description: "La chomba adidas Argentina es perfecta para los fanáticos del fútbol argentino. Con su diseño elegante y materiales de alta calidad, te mantendrá fresco y cómodo durante todo el día.",
    gender: "Hombres"
  },
  {
    id: 142,
    img: "../img/Hombre/NI_CW4555-002-1.JPG",
    title: "Zapatillas Nike Air Max Sc",
    price: "$119999",
    isFavorite: false,
    isNewProduct: false,
    isFreeShipping: true,
    fees: [],
    category: "Hombres",
    productType: "Zapatillas",
    productSizes: ["40", "41", "42", "43", "44"],
    brand: "Nike",
    description: "Las zapatillas Nike Air Max SC ofrecen un estilo clásico y comodidad duradera. Con su unidad Air Max en el talón y su parte superior de malla transpirable, te mantienen fresco y cómodo durante todo el día.",
    gender: "Hombres"
  },
  {
    id: 143,
    img: "../img/logo-productos/931759-800-auto.jpeg",
    title: "Short Adidas D4T",
    price: "$35999",
    isFavorite: false,
    isNewProduct: false,
    isFreeShipping: true,
    fees: [],
    category: "Hombres",
    productType: "Short",
    productSizes: ["S", "M", "L", "XL", "XXL"],
    brand: "Adidas",
    description: "Los shorts adidas D4T son perfectos para actividades deportivas o uso casual. Con su diseño moderno y tejido transpirable, te mantendrán fresco y cómodo en cualquier situación.",
    gender: "Hombres"
  },
  {
    id: 144,
    img: "../img/logo-productos/NI_DD1992-010-1.JPG",
    title: "Remera Nike Pro Dri-Fit",
    price: "$29499",
    isFavorite: false,
    isNewProduct: false,
    isFreeShipping: true,
    fees: [],
    category: "Niños",
    productType: "Remera",
    productSizes: ["S", "M", "L", "XL", "XXL"],
    brand: "Nike",
    description: "La remera Nike Pro Dri-Fit está diseñada para brindarte comodidad y rendimiento durante tus entrenamientos. Con tecnología Dri-Fit que absorbe el sudor y te mantiene seco, esta remera es perfecta para tus actividades deportivas.",
    gender: "Hombres"
  },
  {
    id: 145,
    img: "../img/logo-productos/producto-1.png",
    title: "Botines Puma Future",
    price: "$82999",
    isFavorite: false,
    isNewProduct: false,
    isFreeShipping: true,
    fees: [],
    category: "Mujer",
    productType: "Botines",
    productSizes: ["39", "40", "41", "42", "43"],
    brand: "Puma",
    description: "Los botines Puma Future son ideales para jugadores que buscan velocidad y agilidad en el campo. Con su diseño aerodinámico y suela de tracción, te brindan un control óptimo del balón y velocidad explosiva.",
    gender: "Hombres"
  },
  {
    id: 146,
    img: "../img/logo-productos/Zapatilla-vans-range-exp .jpeg",
    title: "Zapatillas Vans RAnge exp",
    price: "$69299",
    isFavorite: false,
    isNewProduct: false,
    isFreeShipping: true,
    fees: [],
    category: "Mujer",
    productType: "Zapatillas",
    productSizes: ["38", "39", "40", "41", "42"],
    brand: "Vans",
    description: "Las zapatillas Vans Range exp son perfectas para aquellos que buscan un estilo casual y comodidad duradera. Con su diseño clásico y suela acolchada, te mantienen cómodo en cualquier situación.",
    gender: "Hombres"
  }
];


export default products;