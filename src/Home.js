import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images.indianexpress.com/2020/11/amazon-prime-video-.jpg?w=640"
          alt=""
        />
        <div className="home__row">
          <Product
            title="Stock Market Wisdom"
            price={19.99}
            image={"https://ttpl.imgix.net/9788194924661L.jpg"}
            rating={5}
          />

          <Product
            title="Earphones"
            price={20.99}
            image={
              "https://zebronics.com/cdn/shop/products/Zeb-star-pic1.jpg?v=1657887447&width=2048"
            }
            rating={4}
          />

          <Product
            title="Black Dress"
            price={13.99}
            image={
              "https://static.zara.net/photos///2023/V/0/1/p/1165/134/800/2/w/824/1165134800_2_1_1.jpg?ts=1681295805272"
            }
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Crockery Set"
            price={100}
            image={
              "https://m.media-amazon.com/images/I/718fa-REjrL._AC_UF894,1000_QL80_.jpg"
            }
            rating={4}
          />

          <Product
            title="Table"
            price={34.99}
            image={
              "https://images.woodenstreet.de/image/cache/data%2Fstudy-table%2Fadolph-study-table%2Fresize%2Fhoney-finish%2F1-810x702.jpg"
            }
            rating={5}
          />

          <Product
            title="TV"
            price={121.98}
            image={
              "https://www.sony.co.in/image/ccbe548efa94995a9c034d96a4a6acbb?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320"
            }
            rating={3}
          />

          <Product
            title="iPhone"
            price={1299.99}
            image={
              "https://rukminim1.flixcart.com/image/850/1000/kg8avm80/mobile/j/f/9/apple-iphone-12-dummyapplefsn-original-imafwg8dkyh2zgrh.jpeg?q=90"
            }
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            title="Heritage Vase"
            price={66.89}
            image={"https://folkways.in/wp-content/uploads/2020/07/A.jpg"}
            rating={5}
          />

          <Product
            title="Samsung Galaxy Book 3"
            price={83.33}
            image={
              "https://images.samsung.com/is/image/samsung/assets/in/computers/galaxy-book3/14951_GB3-PDP-banner_720x720.jpg"
            }
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Macbook Pro"
            price={44}
            image={
              "https://colorworksnursery.com/images/thumbs/0000024_apple-macbook-pro-13-inch_550.jpeg"
            }
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
