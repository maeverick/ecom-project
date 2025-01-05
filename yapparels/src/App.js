import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Pages/sign/sign-in.component";
import SignUp from "./Pages/sign/sign-up.component";
import { useLocation } from "react-router-dom";
import Footer from "./Component/footer/footer.component";
import Navbar from "./Component/navbar/navbar.component";
import Home from "./Pages/home/home.components";
import Story from "./Pages/story/story.component";
import Products from "./Pages/products/products.component";
import ProductDetail from "./Component/product-details/details.component";
import Contact from "./Pages/contact/contact.component";
import FAQS from "./Pages/FAQs/faq.component";
import ScrollToTop from "./scrollToTop";
import React from "react";
import { auth, createUser } from "./firebase/firebase.utils";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribtion = null;
  componentDidMount() {
    this.unsubscribtion = auth.onAuthStateChanged((user) => {
      createUser(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribtion();
  }
  render() {
    return (
      <div className="App">
        <ScrollToTop />
        <PageLayout>
          <Routes>
            <Route Component={SignIn} exact path="/sign-in" />
            <Route Component={SignUp} exact path="/sign-up" />
            <Route Component={Home} exact path="/" />
            <Route Component={""} exact path="/:directory" />
            <Route
              Component={ProductDetail}
              exact
              path="/products/:productName"
            />
            <Route Component={Story} exact path="/story" />
            <Route Component={Products} exact path="/products" />
            <Route Component={FAQS} exact path="/faqs" />
            <Route Component={Contact} exact path="/contacts" />
          </Routes>
        </PageLayout>
      </div>
    );
  }
}

function PageLayout({ children }) {
  const location = useLocation();
  const noNavbarFooterRoutes = ["/sign-in", "/sign-up"];

  const showNavbarAndFooter = !noNavbarFooterRoutes.includes(location.pathname);

  return (
    <div>
      {showNavbarAndFooter && <Navbar />}
      {children}
      {showNavbarAndFooter && <Footer />}
    </div>
  );
}

export default App;
