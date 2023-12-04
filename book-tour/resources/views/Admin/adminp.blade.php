<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Admin Products</title>
    <!-- font link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <!-- css file -->
    <link rel="stylesheet" type="text/css" href="/css/admin.css"/>
</head>
<body>
    <div class="sidebar">
        <div class="sidebar-menu">
            <ul>
                <li>
                    <a href="/admin/dashboard"><span class="dashboard"></span>
                    <span>Dashboard</span></a>
                </li>
                <li>
                    <a href="/admin/products"><span class="products"></span>
                    <span>Products</span></a>  
                </li>
                <li>
                    <a href="/admin/customers"><span class="customers"></span>
                    <span>Customers</span></a> 
                </li>
                <li>
                    <a href="/admin/orders"><span class="orders"></span>
                    <span>Orders</span></a> 
                </li>
            </ul>
        </div>
    </div>

    <div class="main-content">
        <header>
            <h2>
                <label for="">
                    <span class="las la-bars"></span>
                </label>

                Products
            </h2>
            <div class="search-wrapper">
                <span class="las la-search"></span>
                <input type="search" placeholder="Search Here" />
            </div>

            <div class="user-wrapper">
                <img src="img.jpg" width="40px" height="40px" alt="">
                <div>
                    <h4>Zahid Faqiri</h4>
                    <small>Admin</small>
                </div>
            </div>
        </header>

        <main>
                <div class="projects">
                    <div class="card">
                        <div class="card-header">
                            <h2>New Books</h2>
                        </div>

                        <div class="card-body">
                            <table width="100%">
                                <thead>
                                    <tr>
                                        <td>Book Title</td>
                                        <td>Author</td>
                                        <td>Genre</td>
                                        <td>Price</td>
                                        <td>Stock</td>
                                        <td>Image</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($books as $book)
                                    <tr>
                                        <td>{{$book->Title}}</td>
                                        <td>{{$book->Author}}</td>
                                        <td>{{$book->Genre}}</td>
                                        <td>{{$book->Price}}</td>
                                        <td>{{$book->Stock}}</td>
                                        <td><img src="/images/{{$book->file}}" width="60px" height="80px" alt="{{$book->Book_ID}}"></td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            <div class="cards">
                <a href="adminaddproducts" class="add-product-btn">Add New</a>
            </div>

        </main>
    </div>
</body>
</html>