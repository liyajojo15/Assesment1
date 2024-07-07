import './style.css';
function Home(){
    return(
        <div className="homepage">
      <main>
        <section className="hero">
          
          <p>Experience the future of Shopping!"</p>
          <h2> Welcome to Shop Fusion</h2>
          <button className="shop-now">Shop Now</button>
        </section>
        <section className="featured-products">
          <h3>All products</h3>
          <div className="products">

          <div className="product">
              <div className="product-image"></div>
              <h4>Product 1</h4>
              <p>$</p>
            </div>

          <div className="product">
              <div className="product-image"></div>
              <h4>Product 1</h4>
              <p>$</p>
            </div>
        
            <div className="product">
              <div className="product-image"></div>
              <h4>Product 1</h4>
              <p>$</p>
            </div>

            <div className="product">
              <div className="product-image"></div>
              <h4>Product 2</h4>
              <p>$</p>
            </div>

            <div className="product">
              <div className="product-image"></div>
              <h4>Product 3</h4>
              <p>$1</p>
            </div>
          </div> 

        </section>
      </main>
    </div>



    )
}
export default Home;