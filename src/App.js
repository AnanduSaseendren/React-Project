import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10 min-h-screen">
  <div className="max-w-xl space-y-6">
    <h1 className="text-4xl font-bold leading-tight">
      Website <br /> Design
    </h1>
    <p className="text-gray-600 text-base leading-relaxed max-w-sm">
      Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
      Sed eget libero feugiat, faucibus libero id,<br />
      scelerisque quam.
    </p>
    <button className="bg-purple-800 text-white px-6 py-2 rounded-full">Button name</button>
  </div>
  <div className="mt-10 md:mt-0 md:ml-10">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNseLG4s5Lq-3tTBxw-thjGUDEEdO_UBlXog&s"
      alt="Website Illustration"
      className="w-[600px] md:w-[700px]"
    />
  </div>
</div>

  );
}

function About() {
  return <div className="p-10 text-2xl">About Us Page</div>;
}

function Work() {
  return <div className="p-10 text-2xl">Work Page</div>;
}

function Info() {
  return <div className="p-10 text-2xl">Info Page</div>;
}

function GetStarted() {
  return <div className="p-10 text-2xl">Get Started Page</div>;
}

function App() {
  return (
    <BrowserRouter>
      <nav className="flex justify-between items-center p-6 shadow">
        <div className="text-lg italic font-semibold">
          YOUR <span className="font-bold">WEBSITE</span>
        </div>
        <ul className="flex gap-6 text-gray-700">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/info">Info</Link></li>
          <li>
            <Link
              to="/get-started"
              className="bg-purple-800 text-white px-4 py-2 rounded-full hover:bg-purple-900"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/info" element={<Info />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;