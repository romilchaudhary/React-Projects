import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [{
  id: "p1",
  name: "first item",
  price: 6,
  description: 'This is a first product - amazing!'
}, {
  id: "p2",
  name: "second product",
  price: 12,
  description: 'This is a sec product - amazing!'
}];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_PRODUCTS.map((item) =>
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.name}
              price={item.price}
              description={item.description}
            />)
        }
      </ul>
    </section>
  );
};

export default Products;
