<script>




export default {
    
 
 name :"subscribe",


 
 
 

}


</script>

<template>


   <div id="subscribe">
        <div class="flex">
            <div class="textarea">
                <h3>NEWSLETTER</h3>
                <h2><span class="the">KNOW</span>FIRST</h2>
                <p>Follow closely and receive content about our company and the news of the current market.</p>
       </div>
       <div class="form">
                <div class="custom-input">
                    <input type="text" placeholder="Name" />
                </div>
                <div class="custom-input">
                    <input type="text" placeholder="Email" />
                </div>
                <button class="custom-button">SUBSCRIBE</button>
       </div>
        </div>
       
   </div>
       
    
   
 </template>

<style lang="scss" scoped>
@use "../style/general.scss";

#subscribe {
     height: 800px;
            
            
            
            background-image: url("/bg-1.jpg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            h2 {

font-size: 40px;
color: white;
font-weight: bold;
margin: 30px 0;
.the {
    background-color: #0e272d;
    padding: 5px 15px;
    margin-right: 15px;

    }

}
h3 {
   color : #00a6a5;
   font-size: 25px;

}

 p {
    color:#b6bebc;
    font-size: 25px;
    margin-bottom: 40px;

 }
}


.custom-input {
    width: 80%;
    margin-bottom : 15px;
}

.textarea {
    width: 50%;
}

.form {
    width: 30%;
}


.flex {
    width: 60%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.custom-button {
    width: 200px;
    font-size: 25px;
}
</style>
