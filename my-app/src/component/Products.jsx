import Product from "./Product";
import styles from "./products.module.css";
import { products } from "../data/products";
import Container from "./UI/Container";

function Products() {
  return (
    <Container>
      <div className={styles.products}>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Container>
  );
}

export default Products;
