import React, { FC, useContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsList from './components/productsList';
import { ProductContext, ProductProvider } from './context/productContext';
import { Link } from 'react-router-dom';
import { getCurrentUser, logout } from './services/auth.service';
import IUser from './types/user.type';

const App: FC<any> = ({ children }) => {

  const [searchKey, setSearchKey] = useState('')

  const [showProducts, setShowProducts] = useState<boolean>(false)

  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined)

  useEffect(() => {
    const user = getCurrentUser()
    if (user) {
      setCurrentUser(user)
      setShowProducts(true)
    }

  }, [])

  const { products, filteredProducts, setFilteredProducts } = useContext(ProductContext)

  const searchByName = (e: React.FormEvent) => {
    e.preventDefault()

    setFilteredProducts(products.filter(p => p.productName.toLocaleLowerCase()
      .includes(searchKey.toLocaleLowerCase())))
  }
  const logOut = () => {
    logout();

    setShowProducts(false); 
    setCurrentUser(undefined);
  };


  return (


    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          IBM
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>



          {showProducts && (
            <>

              <li className="nav-item">
                <Link to={"/products"} className="nav-link">
                  Products
                </Link>
              </li>
            </>
          )}

          {currentUser && (
            <>
             
              {/* <li className="nav-item">
                <Link to={"/products"} className="nav-link">
                  Products
                </Link>
              </li> */}
            </>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className='container'>
        {children}
      </div>

      <footer className='mt-5 p-3 text-center bg-light'>
        IBM India PVT LTD @copy;
      </footer>
    </div>
  );
}

export default App;