import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    <div className='bg-slate-900'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/details' element={<ProjectDetails></ProjectDetails>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
