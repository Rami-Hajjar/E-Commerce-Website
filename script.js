const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Graphics Card",
    price: 2190,
    colors: [
      {
        code: "black",
        img: "./4090.jpg",
      },
      {
        code: "white",
        img: "./white 4090.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Memory",
    price: 250,
    colors: [
      {
        code: "White",
        img: "./White Ram.jpg",
      },
      {
        code: "Black",
        img: "./Black Ram.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "CPU",
    price: 550,
    colors: [
      {
        code: "Ryzen 7",
        img: "./7800x3d.png",
      },
      {
        code: "Ryzen 9",
        img: "./ryzen_9-removebg-preview.png",
      },
    ],
  },
  {
    id: 4,
    title: "Storage",
    price: 200,
    colors: [
      {
        code: "with heatsink",
        img: "./990 heatsink.webp",
      },
      {
        code: "without heatsink",
        img: "./990 ad.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Motherboard",
    price: 350,
    colors: [
      {
        code: "Black",
        img: "./black nzxt.jpg",
      },
      {
        code: "White",
        img: "./white nzxt.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});