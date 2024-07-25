'use client';

const NavBar = () => {
    console.log('NavBar rendered');

    const handleClick = () => {
      alert("test")
    }

    return (
      <div className="fixed top-0 right-0 h-screen w-20 flex flex-col justify-evenly bg-slate-300 text-slate-950">
        <div className="w-16 h-16 bg-slate-950 m-2 text-slate-300 rounded-lg hover:slate-300" onClick={handleClick}>
            test
        </div>
        <div className="w-16 h-16 bg-white m-2 text-black rounded-lg" onClick={handleClick}>
            test
        </div>
      </div>
    );
  };
  
  const Icon = () => {
    return (
      <></>
    );
  };
  
export default NavBar;