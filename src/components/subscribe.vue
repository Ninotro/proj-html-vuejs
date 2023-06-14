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
                <h2><span class="the">Know</span>First</h2>
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
     height: 400px;
            
            
            
            background-image: url("/bg-1.jpg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: fill;
            h2 {

font-size: 50px;
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
   font-size: 20px;

}

 p {
    color:#b6bebc;
    font-size: 18px;
    margin-bottom: 40px;

 }
}


.custom-input {
    width: 100%;
    margin-bottom : 15px;
}

.textarea {
    width: 40%;
}

.form {
    width: 50%;
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
    width: 140px;
    font-size: 15px;
}
</style>
