<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BookTour</title>

    <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />

    <!-- font link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <!-- css file -->
    <link rel="stylesheet" type="text/css" href="/css/products.css" />
</head>

<body>
    <!-- header -->
    <header class="header">
        <div class="header-1">
            <img src="/images/logo.png" alt="Your Logo" class="logo-image">
            <a href="/products" class="logo"> </i> BookTour</a>

            <form action="{{ route('catalog.index') }}" method="GET" id="searchForm" class="search-form">
                <input type="search" name="searchInput" placeholder="What's your next adventure? Search here..." id="search-box">
                <label for="search-box" class="fas fa-search" id="search-icon" onclick="submitSearchForm()"></label>
                
                <input type="hidden" name="sort" value="title">
            </form>

        <div class="icons">
        <div id="search-btn" class="fas fa-search"></div>
            @auth
            <a href="/readinglist" class="fas fa-heart"></a>
            @endauth
            <a href="/basket/view" class="fas fa-shopping-cart"></a>
            <div id="login-btn" class="fas fa-user dropdown">
                <div class="dropdown-content">
                    @auth()
                    <a href="{{ route('logout') }}" id="xstext" onclick="event.preventDefault();
                    document.getElementById('logout-form').submit();">
       {{ __('Logout') }} </a>
       <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
        @csrf
    </form>
    <a href="/admin" id="xstext">Visit Admin Panel</a>
    @endauth
    @guest
    <a href="/mainlogin" id="xstext">Log In</a>
    <a href="/admin" id="xstext">Visit Admin Panel</a>
    @endguest
                    
                    
                </div>
            </div>
            </div>
        </div>
        <!--navbar-->
        <div class="header-2">
            <nav class="navbar">
                <a href="/products">Home</a>
                <a href="#New Arrivals">New Arrivals</a>
                <a href="#Best Sellers">Best Sellers</a>
                <a href="/catalog">Catalogue</a>
                <a href="#Special Offers">Special Offers</a>
                <a href='/contactus'>Contact Us</a>
                @auth
                <a href="/readinglist">My Reading List</a>
                <a href="/ordersummary">Past Orders</a>
                @endauth

            </nav>
        </div>

    </header>
    <!-- header -->

    <!-- lower navbar -->
    <nav class="lower-navbar">
    <a href="/products" class="fas fa-home"></a>
    <a href="" class="fas fa-search" id="search-nav-icon" onclick="toggleSearchForm(event)"></a>
    <a href="#New Arrivals" class="fas fa-tags"></a>
    @auth
    <a href="/readinglist" class="fas fa-heart"></a>
    @endauth
    <div class="dropdown-container">
        <a href="#" class="fas fa-user" onclick="toggleDropdown(event)"></a>
        <div class="dropdown-content">
            @auth()
            <a href="{{ route('logout') }}" id="xstext" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">{{ __('Logout') }}</a>
            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                @csrf
            </form>
            <a href="/admin" id="xstext">Visit Admin Panel</a>
            @endauth
            @guest
            <a href="/mainlogin" id="xstext">Log In</a>
            <a href="/admin" id="xstext">Visit Admin Panel</a>
            @endguest
        </div>
    </div>
</nav>

    <script src="/js/products.js">
    </script>
    <!-- swiper functioning link -->
    <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
    <script src="/js/products.js">
    </script>

    @yield('content')
</body>

</html>