import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './componets/layout/NavBar'
import Footer from './componets/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { GithubProvider } from './componets/context/github/GithubContext'
import { AlertProvider } from './componets/context/alert/AlertContext'
import Alert from './componets/Alert'
import User from './pages/User'


function App() {


  return (
    <GithubProvider>
      <AlertProvider>
        <Router>

          <div className="flex flex-col justify-between h-screen">
            <NavBar />

            <main className='container mx-auto px-3'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/*' element={<NotFound />} />
                <Route path='/user/:login' element={<User />} />
              </Routes>
            </main>
            <Footer />
          </div>

        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}

export default App
