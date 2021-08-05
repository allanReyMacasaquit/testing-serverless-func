const result = document.querySelector(".result");

const fetchProduct = async () => {
  result.innerHTML = `<h4>Loading...</h4>`;
  try {
    const id = window.location.search;
    const {
      data: { fields },
    } = await axios.get(`/api/combined${id}`);
    const { name, description, price, images } = fields;

    const singleProduct = () => {
      return `<h1 class="title">${name}</h1>
  <article class="product">
    <img class="product-img"
    src=${images[0].url}
    alt=${images[0].filename}
    />
    <div class="product-info">
      <h5 class="title">${name}</h5>
      <h5 class="price">$${price}</h5>
      <p class="desc">${description}</p>
    </div>
  </article>`;
    };
    result.innerHTML = singleProduct();
    // console.log(data);
  } catch (error) {
    result.innerHTML = `<h4>There is an Error</h4>`;
  }
};
fetchProduct();
