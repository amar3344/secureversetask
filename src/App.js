import {Component} from 'react'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="bg-container">
          <div className="container-none-smld">
            <div>
              <div className="container-a">
                <img
                  src="https://pbs.twimg.com/profile_images/1527944311718850560/6f8pJAiP_400x400.jpg"
                  alt="logo"
                  className="logo-image"
                />
              </div>
              <div className="heading-container">
                <h1 className="heading">Smart Contract Auditing</h1>
                <p className="tag-line">
                  Get your smart contracts audited quickly to ensure the most
                  secure transactions on the blockchain.
                </p>
                <button type="button" className="connect-wallet-button">
                  <img
                    src="https://archive.org/download/MXPlayerForWindowsPhone/MX-Player-for-Windows-Phone.png"
                    alt=""
                    className="button-logo-image"
                  />
                  Connect Wallet
                </button>
              </div>
              <table className="table-container2">
                <tr>
                  <td className="table-body">Reliability</td>
                  <td className="table-body">security</td>
                  <td className="table-body">Blockchain</td>
                </tr>
                <tr>
                  <td className="table-body">Products</td>
                  <td className="table-body">Low Fees</td>
                  <td className="table-body">Quick Services</td>
                </tr>
              </table>
            </div>
            <div>
              <div className="nav-items-container">
                <p className="nav-items">Tutorials</p>
                <p className="nav-items">Wallet</p>
                <button type="button" className="login-button">
                  Login/Register
                </button>
              </div>
              <div className="safe-transaction-container">
                <div className="container2">
                  <div className="image-container">
                    <img
                      src="https://thumbs.dreamstime.com/b/rhombus-transparent-icon-symbol-design-geometry-co-collection-simple-element-vector-illustration-background-130321072.jpg"
                      alt=""
                      className="image-rhombus"
                    />
                  </div>
                  <h1 className="title">SafeTransactions</h1>
                  <div className="audit-con">
                    <p className="dotted-line">...</p>
                    <p className="audit-text">Audit</p>
                  </div>
                </div>
                <button type="button" className="info-button">
                  <img
                    src="https://png.pngtree.com/png-vector/20190129/ourmid/pngtree-info-vector-icon-png-image_355800.jpg"
                    alt=" "
                    className="info-image"
                  />
                </button>
              </div>

              <div className="chain-container">
                <p className="select-options">
                  Select your chain:
                  <select className="select-text">
                    <option className="options" value="Eherscan" selected>
                      Eth
                    </option>
                    <option className="options" value="Bscoin">
                      BSC
                    </option>
                  </select>
                </p>
                <input
                  type="input"
                  placeholder="Enter Contract Address"
                  className="input-address"
                />
                <hr className="horizontal-line" />
                <button type="button" className="scan-button">
                  Scan Now
                </button>
              </div>
            </div>
          </div>

          <div className="header-container">
            <div className="container-a">
              <img
                src="https://pbs.twimg.com/profile_images/1527944311718850560/6f8pJAiP_400x400.jpg"
                alt="logo"
                className="logo-image"
              />
            </div>
            <button type="button" className="nav-bars-button">
              <img
                src="https://pngset.com/images/hamburger-menu-menu-menu-button-icon-with-and-vector-format-text-symbol-gray-transparent-png-1888371.png"
                alt=""
                className="nav-bars"
              />
            </button>
            <div className="nav-items-container">
              <p className="nav-items">Tutorials</p>
              <p className="nav-items">Wallet</p>
              <button type="button" className="login-button">
                Login/Register
              </button>
            </div>
          </div>

          <div className="heading-container1">
            <h1 className="heading">Smart Contract Auditing</h1>
            <p className="tag-line">
              Get your smart contracts audited quickly to ensure the most secure
              transactions on the blockchain.
            </p>
            <button type="button" className="connect-wallet-button">
              <img
                src="https://archive.org/download/MXPlayerForWindowsPhone/MX-Player-for-Windows-Phone.png"
                alt=""
                className="button-logo-image"
              />
              Connect Wallet
            </button>
          </div>

          <table className="table-container">
            <tr>
              <td className="table-body">Reliability</td>
              <td className="table-body">security</td>
            </tr>
            <tr>
              <td className="table-body">Blockchain</td>
              <td className="table-body">Products</td>
            </tr>
            <tb />
            <tr>
              <td className="table-body">Low Fees</td>
              <td className="table-body">Quick Services</td>
            </tr>
          </table>

          <div className="safe-transaction-container1">
            <div className="container2">
              <div className="image-container">
                <img
                  src="https://thumbs.dreamstime.com/b/rhombus-transparent-icon-symbol-design-geometry-co-collection-simple-element-vector-illustration-background-130321072.jpg"
                  alt=""
                  className="image-rhombus"
                />
              </div>
              <h1 className="title">SafeTransactions</h1>
              <div className="audit-con">
                <p className="dotted-line">...</p>
                <p className="audit-text">Audit</p>
              </div>
            </div>
            <button type="button" className="info-button">
              <img
                src="https://png.pngtree.com/png-vector/20190129/ourmid/pngtree-info-vector-icon-png-image_355800.jpg"
                alt=" "
                className="info-image"
              />
            </button>
          </div>

          <div className="chain-container1">
            <p className="select-options">
              Select your chain:
              <select className="select-text">
                <option className="options" value="Eherscan" selected>
                  Eth
                </option>
                <option className="options" value="Bscoin">
                  BSC
                </option>
              </select>
            </p>
            <input
              type="input"
              placeholder="Enter Contract Address"
              className="input-address"
            />
            <hr className="horizontal-line" />
            <button type="button" className="scan-button">
              Scan Now
            </button>
          </div>

          <div className="container-x">
            <div className="service-container">
              <h1 className="service-text">
                Services that we continue to improve
              </h1>
              <p className="tag-line">
                The best choice for your smart contract needs
              </p>
            </div>
            <div className="list-container2">
              <div className="list-container">
                <div className="image-shield-container">
                  <img
                    src="https://www.seekpng.com/png/small/395-3956580_3d-white-security-shield-featuredsection-security-shield.png"
                    alt=""
                    className="list-images"
                  />
                </div>
                <div>
                  <h1 className="list-heading">Security Gurantee</h1>
                  <p className="list-text">
                    Security is guranteed. we always maintain privacy and
                    maintain the quality of our products
                  </p>
                </div>
              </div>
              <div className="list-container">
                <div className="image-search-container">
                  <img
                    src="https://png.pngitem.com/pimgs/s/559-5590028_magnifier-job-search-icon-png-orange-transparent-png.png"
                    alt=""
                    className="list-images"
                  />
                </div>
                <div>
                  <h1 className="list-heading">Security Gurantee</h1>
                  <p className="list-text">
                    Security is guranteed. we always maintain privacy and
                    maintain the quality of our products
                  </p>
                </div>
              </div>
              <div className="list-container">
                <div className="image-love-container">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrbaBvzGmN7D2RW745iQLiQ-ebOW9u4NiegI_ZuBjGKus879ZwWXogFu3TrkcqSSo3Ytk&usqp=CAU"
                    alt=""
                    className="list-images"
                  />
                </div>
                <div>
                  <h1 className="list-heading">Security Gurantee</h1>
                  <p className="list-text">
                    Security is guranteed. we always maintain privacy and
                    maintain the quality of our products
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-container">
            <div className="footer-container2">
              <div className="logo-image-container">
                <img
                  src="https://pbs.twimg.com/profile_images/1527944311718850560/6f8pJAiP_400x400.jpg"
                  alt="logo"
                  className="logo-image-footer"
                />
              </div>
              <div className="footer-navs-container">
                <p className="footer-navs">Twitter</p>
                <p className="footer-navs">Instagram</p>
                <p className="footer-navs">Reddit</p>
                <p className="footer-navs">Medium</p>
              </div>
            </div>
            <div className="last-tag-container">
              <p className="last-line">
                Reach out to us and get to know more! secureverse@gmail.com
              </p>
            </div>
            <hr className="horizontal-line-2" />
            <div className="footer-last-container">
              <p className="last-tag">@Secureverse</p>
              <p className="last-tag">All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
