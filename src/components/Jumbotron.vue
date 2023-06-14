<script>


export default {
    
 
 name :"Jumbotron",

 components : {
    
 },
 data () {
    return {
      
    }
}
 

}


</script>

<template>

   <section id="Jumbotron">
        <div class="container">
            <div class="logo-next-gen">
                <img src="/nexgen-logo.svg" alt="">
            </div>

            <nav>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">SERVICES</a></li>
                    <li><a href="#">PROCESS</a></li>
                    <li><a href="#">TEAM</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><button class="custom-button">GET IN TOUCH</button></li>
                </ul>
            </nav>

        </div>

        
        <div class="container2">
            <div class="insurance-counsulting">
            <div class="form">
                <h3>
                FUSIONS & ACQUISITIONS</h3>
                <h2>INSURANCE CONSULTING</h2>
                <div class="form-row">
                    <div class="custom-input">
                        <input type="text" placeholder="Name" />
                    </div>
                    <div class="custom-input">
                        <input type="text" placeholder="Email" />
                    </div>
                </div>
                <div class="form-row margin-30">
                    <div class="custom-input">
                        <input type="text" placeholder="Phone" />
                    </div>
                    <div class="custom-input">
                        <input type="text" placeholder="More info" />
                    </div>
                </div>
                <button class="custom-button">GET IN TOUCH</button>
                <button class="custom-button inverted">READ MORE</button>

            </div>
           

        </div>
            
        </div>
        
   </section>
       
     
    
   
 </template>

<style lang="scss" scoped>
@use "../style/general.scss";

#Jumbotron {
    
    height: 1400px;
    background-image:url("/bg-6.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
     
    margin: 0 auto; 
    .container {
        padding-top: 30px;
        height: 150px;
        width: 70%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo-next-gen {
            height: 100%;
            width: 30%;
            img {
                height: 100%;
                object-fit: fill;
            }
        }

        ul {
            font-size: 20px;
            display: flex;
            gap: 20px;
            align-items: center;
            a {
               color: #5d6a72
            }
            
        }
    }
    .insurance-counsulting {

        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
        width: 100%;
        margin: 0 auto;

        .form {
            width: 40%;
            h3 {
            color: #00a9b1;
            margin-bottom: 50px;
            font-weight: bold;
        }

        h2 {
            font-weight: bold;
            font-size: 40px;
            margin-bottom: 30px;
        }

        
        }
        
    }
    .form-row {
        display: flex;
        gap: 10px;
        margin-bottom: 10px;

        .custom-input {
          width: 200px
        }
   
    }
    .custom-button.inverted {
    background-color: #fff;
    color: #058283;
    margin-left: 10px;
}




.margin-30 {
    margin-bottom: 40px;
}

.custom-button {
                font-size: 18px;
            }

}

.container2 {
    height: 100%;
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
}

</style>
