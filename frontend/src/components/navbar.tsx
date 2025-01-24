import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faUser, faShoppingCart);

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg blur border-radius-sm top-0 z-index-3 shadow position-sticky py-3 start-0 end-0">
            <div className="container px-1">
                {/* 로고 */}
                <a className="navbar-brand font-weight-bolder ms-lg-0" href="/ninescent/landing/">
                    ninescent
                </a>

                {/* 햄버거 메뉴 버튼 */}
                <button
                    className="navbar-toggler shadow-none ms-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navigation"
                    aria-controls="navigation"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon mt-2">
                        <span className="navbar-toggler-bar bar1"></span>
                        <span className="navbar-toggler-bar bar2"></span>
                        <span className="navbar-toggler-bar bar3"></span>
                    </span>
                </button>

                {/* 네비게이션 */}
                <div className="collapse navbar-collapse" id="navigation">
                    <div className="d-flex justify-content-between w-100 align-items-center">
                        {/* 중앙 메뉴 */}
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link text-dark font-weight-bold d-flex align-items-center me-2" aria-current="page" href="/ninescent/">
                                    All Components
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link text-dark dropdown-toggle font-weight-bold d-flex align-items-center me-2"
                                    aria-current="page"
                                    id="pagesExample"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Pages
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="pagesExample">
                                    <li>
                                        <a className="dropdown-item" href="/ninescent/landing/">
                                            Landing Page
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/ninescent/product/">
                                            Product Page
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/ninescent/shopping-cart/">
                                            Shopping Cart
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link text-dark font-weight-bold d-flex align-items-center me-2"
                                    aria-current="page"
                                    href="https://www.creative-tim.com/learning-lab/astro/overview/astro-ecommerce"
                                >
                                    Documentation
                                </a>
                            </li>
                        </ul>                                   

                        {/* 오른쪽 아이콘 */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-dark font-weight-bold d-flex align-items-center me-2" href="/mypage">
                                    <FontAwesomeIcon icon={faUser} className="text-black-50" /> {/* 마이페이지 아이콘 */}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark font-weight-bold d-flex align-items-center me-2" href="/ninescent/shopping-cart/">
                                    <FontAwesomeIcon icon={faShoppingCart} className="text-dark" /> {/* 카트 아이콘 */}
                                </a>
                            </li>                           
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );                                      
};

export default Navbar;                                                                                                                                                                                                                                                                                                                                                                                                              
windo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           