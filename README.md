<!DOCTYPE html>
<html lang="en">

    <head>

        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viweport" content="width=device-width,initial-scale=1.0">
        <title>Who Am I</title>
        <link rel="stylesheet" href="style.css">
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    </head>

    <body>
        <div class="bg"></div> 
        <header class="header" id="home">

            <i class='bx bx-menu' id="menu-icon"></i>

                <nav class="navbar">
                    <a href="#home" style="--i:1;" class="active">Home</a>
                    <a href="#about" style="--i:2;">About</a>
                    <a href="#explore" style="--i:3;">Explore</a>
                    <a href="#" style="--i:4;">Bookmarks</a>
                    <a href="#contact" style="--i:5;">Contact</a>     
                </nav>    
        </header>

        <section class="home">
            <div class="home-content">
                <h3>Hello, It's Me</h3> 
                <h1>Charith Lakshitha</h1>
                <h3>I am <span class="multiple-text"></span></h3>
                <p>Who am I, What do I do, Where am I from, <br>Let's know about me</p>
                <div class="socialM">
                    <a href="#" style="--i:7;"><i class='bx bxl-facebook-circle'></i></a>
                    <a href="#" style="--i:8;"><i class='bx bxl-instagram' ></i></a>
                    <a href="#" style="--i:9;"><i class='bx bxl-linkedin-square' ></i></a>
                    <a href="#" style="--i:10;"><i class='bx bxl-github'></i></a>
                </div>
            </div>

            <div class="home-img">
                <img src="images/profile.png" alt="Profile-Picture">
            </div>

  
        </section>

        <!--about section--> 
        <section class="bgimage" id="about">
            <div class="heading" id="heading">

                <h1>About <span>Me</span></h1>
                
    
            </div>
            <div class="container">
                <section class="about">
                   <div class="about-img">
                    <img src="images/about-photo.png" alt="">
                   </div>
                   <div class="about-content">
                    <h2>Who Am I</h2>
                    <p>Charith Lakshitha Lelwala, born on March 30, 2001, resides in Minuwangoda, Gampaha District. Charith is a multi-talented individual currently pursuing an engineering degree. They excel in various fields including frontend development, graphic design, and UI/UX design. Charith is also a passionate traveler, an IEEE volunteer, and a skilled guitarist, showcasing a diverse range of interests and talents.</p>
                    
                   </div> 
                </section>
            </div>
        </section>

        <!--Explore Section-->
        <section class="explore" id="explore">
            <h2 class="topic"> Explore <Span>Me</Span></h2>

            <div class="p-content">

                <div class="p-box">
                    <img src="images/undergraduate.png" alt="traveler">
                    <div class="p-layers">
                        <h4>Education</h4>
                        <p>csvjfjmj mjdnvjnnvj mdnvjwnhr mndvjnwh mjdsnv jsnhvn</p>
                        <a href="#"><i class='bx bx-link-external'></i></a>
                    </div>                    
                </div>

                <div class="p-box">
                    <img src="images/traveler.png" alt="traveler">
                    <div class="p-layers">
                        <h4>Travelling</h4> 
                        <p>csvjfjmj mjdnvjnnvj mdnvjwnhr mndvjnwh mjdsnv jsnhvn</p>
                        <a href="#"><i class='bx bx-link-external'></i></a>
                    </div>
                    
                </div>

                <div class="p-box">
                    <img src="images/volunteer.png" alt="traveler">
                    <div class="p-layers">
                        <h4>Volunteering</h4>
                        <p>csvjfjmj mjdnvjnnvj mdnvjwnhr mndvjnwh mjdsnv jsnhvn</p>
                        <a href="#"><i class='bx bx-link-external'></i></a>
                    </div>
                    
                </div>

                <div class="p-box">
                    <img src="images/musician.png" alt="traveler">
                    <div class="p-layers">
                        <h4>Music</h4>
                        <p>csvjfjmj mjdnvjnnvj mdnvjwnhr mndvjnwh mjdsnv jsnhvn</p>
                        <a href="#"><i class='bx bx-link-external'></i></a>
                    </div>
                    
                </div>

                <div class="p-box">
                    <img src="images/volunteer.png" alt="traveler">
                    <div class="p-layers">
                        <h4>Designing</h4>
                        <p>csvjfjmj mjdnvjnnvj mdnvjwnhr mndvjnwh mjdsnv jsnhvn</p>
                        <a href="#"><i class='bx bx-link-external'></i></a>
                    </div>
                    
                </div>

            </div>
        </section>

        <!--Contact Section-->
        <section class="contact" id="contact">
            <h2 class="topi"> Contact <Span>Me</Span></h2>

            <form action="#">
                <div class="input-box">
                    <input type="text" placeholder="Full Name">
                    <input type="Email" placeholder="Email Address">
                </div>

                <div class="input-box">
                    <input type="number" placeholder="Mobile Number">
                    <input type="text" placeholder="Email Subject">
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                <input type="submit" value="Send Message" class="btn">
            </form>
        </section>

        <!--Footer Section-->
        <footer>
            <div class="wave">
                <div class="wave" id="wave1"></div>
                <div class="wave" id="wave2"></div>
                <div class="wave" id="wave3"></div>
                <div class="wave" id="wave4"></div>

            </div>

            <div class="social-icon">
                <a href="#" style="--i:7;"><i class='bx bxl-facebook-circle'></i></a>
                <a href="#" style="--i:8;"><i class='bx bxl-instagram' ></i></a>
                <a href="#" style="--i:9;"><i class='bx bxl-linkedin-square' ></i></a>
                <a href="#" style="--i:10;"><i class='bx bxl-github'></i></a>
            </div>
            <ul class="menubar">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Explore</a></li>
                <li><a href="#">Bookmarks</a></li>
                <li><a href="#">Contact</a></li>
                
            </ul>
            <p>&copy;2023 Charith | All Rights Reserved | Design by Charith Lakshitha</p>
        </footer>

        <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
        <script src="script.js"></script>

       


        
    </body>

</html>
