import './App.css';

import UrlShortener from './components/UrlShortener/UrlShortener';
import ShortlyHeader from './components/ShortlyHeader/ShortlyHeader';
import GetStarted from './components/GetStarted/GetStarted';
import Features from './components/Features/Features';
import Boost from './components/Boost/Boost';

function App() {
// 

  return (
    <div className="app-container">
      <div className="row">
        <ShortlyHeader></ShortlyHeader>
      </div>
      <main className="body">

<div className="row">

        <GetStarted />
</div>
<div className='row'>
        <UrlShortener />
</div>
        <Features />
        <Boost />
        <footer className="footer">
            <div className="container">
              <div className="row">
                <div className="footer-col">
                  <h4>Features</h4>
                  <ul>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">our services</a></li>
                    <li><a href="#">privacy policy</a></li>
                    <li><a href="#">affiliate program</a></li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h4>Resources</h4>
                  <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">shipping</a></li>
                    <li><a href="#">returns</a></li>
                    <li><a href="#">order status</a></li>
                    <li><a href="#">payment options</a></li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h4>Company</h4>
                  <ul>
                    <li><a href="#">watch</a></li>
                    <li><a href="#">bag</a></li>
                    <li><a href="#">shoes</a></li>
                    <li><a href="#">dress</a></li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h4>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  </h4>
                </div>
              </div>
            </div>
          </footer>
      </main>
    </div>
  );
}

export default App;