import 'boxicons/css/boxicons.min.css';

const Header = () => {
    // Simple function to toggle the mobile menu
    const toggleMobileMenu = () => {
        // Get the Mobile Menu Element
        const  mobileMenu = document.getElementById
        ('MobileMenu')

        // If it has the 'hidden' class, remove it .otherwise, add it 
        if(mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
        }

    }
  return (
  <header className="flex justify-between items-center py-4 px-4 lg:px-20">
    
    <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="text-3xl md:text-4xl
    lg:text-3xl font-extrabold m-0"
        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
        >
        ORTOMESH
        
    </h1>

    {/* Desktop Navigation */}
    <nav data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" className="hidden md:flex items-center gap-12">
        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#" 
        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
        >
            COMPANY
        </a>

                <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#"
     style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
     >
            FEATURES
        </a>

                <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000"  className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="https://dr-jacobus.github.io/ortoview/"
                    target="_blank"
  rel="noopener noreferrer"
     style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
     >
            RESOURCES
        </a>

                <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2500" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#"
     style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
     >
            DOCS
        </a>
    </nav>
<button className="hidden md:block bg-[#dfdddd] text-black py-3 px-8 rounded-full border-none fonte-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
    SIGNIN
</button>

{/* Mobile Menu Button - Visible only on Mobile */}
<button onClick={toggleMobileMenu} className='md:hidden text-3x1 p-2 z-50'>
< i class='bx  bx-menu'></i> 
</button>

{/* Mobile Menu - Hidden by default */}
<div id='MobileMenu' className='hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-90 backdrop-blur- md'>
    <nav className='flex flex-col gap-6 items-center'>
                <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
            COMPANY
        </a>

                <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
            FEATURES
        </a>

                <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
            RESOURCES
        </a>

                <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
            DOCS
        </a>

    </nav>
</div>

  </header>
  )
}

export default Header
