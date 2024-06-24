import './App.css';
import Add_Admin from './Components/add_admin';
import Dashboard from './Components/dashbord';
import Header from './Components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View_Admin from './Components/view_admin';
import Update from './Components/update_admin';
import Add_book from './Components/Books/add_book';
import View_Book from './Components/Books/View_books';
import Addcategory from './Components/category/add_category';
import View_subcategory from './Components/sub_category/view_subcategory';
import Add_subcategory from './Components/sub_category/add_subcategory';
import Brand from './Components/brand/add_brand';
import View_Brand from './Components/brand/view_brand';
import AddProducts from './Components/Products/add_product';
import ViewProducts from './Components/Products/view_products';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/addAdmin' element={<Add_Admin />} />
          <Route path='/viewAdmin' element={<View_Admin />} />
          <Route path='/editData/:id' element={<Update />} />

          <Route path='/Addbook' element={<Add_book />} />
          <Route path='/BookView' element={<View_Book />} />

          <Route path='/add_category' element={<Addcategory />} />

          <Route path='/add_subcategory' element={<Add_subcategory />} />
          <Route path='/view_subcategory' element={<View_subcategory />} />

          <Route path='/add_brand' element={<Brand />} />
          <Route path='/view_brand' element={<View_Brand />} />

          <Route path='/add_products' element={<AddProducts/>} />
          <Route path='/view_products' element={<ViewProducts/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
