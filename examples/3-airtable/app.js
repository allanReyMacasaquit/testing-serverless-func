const result = document.querySelector(".result");

const fetchProducts = async () => {
  try {
    const { data } = await axios.get("/api/combined");
    const products = data
      .map((product) => {
        const { id, url, price, name } = product;
        return `<a href='product.html?id=${id}' class='product'>
        <img src='${url}' alt='${name}'/>
        <div class='info'>
        <h5>${name}</h5>
        <h5 class='price'> $${price}</h5>
        </div>
        </a>`;
      })
      .join("");

    result.innerHTML = products;
  } catch (error) {
    result.innerHTML = "<h4>There was an error</h4>";
  }
};
fetchProducts();
