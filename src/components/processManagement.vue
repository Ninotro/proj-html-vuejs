<script>
export default {
 name :"processManagement",

 components : {
 },
}
</script>

<template>
   <section id="processManagement">
    
        <div class="container">
            <h3>HOW IT WORKS IN PRACTICE</h3>
            <h2><span>PROCESS</span>MANAGEMENT</h2>
            <p>We work with innovative methodologies to ensure that the entire reformatting process is done from start to finish as planned</p>
        </div>
        <div class="line">
            <div class="dot" v-for="number in 5" :key="number">
            0{{ number }}
            </div>
        </div>

        <div class="containers">
            <div class="text-area">
                <h3>Collection of information</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div class="text-area">
                <h3>Strategic planning</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div class="text-area">
                <h3>Assignment of responsibilities</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div class="text-area">
                <h3>Formatting process</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div class="text-area">
                <h3>Continuity formalization</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            
            
          
           

        </div>
    

   </section>
   
</template>

<style lang="scss" scoped>
@use "../style/general.scss";


#processManagement {
    height: 800px;
    .container {
        height: 70%;
        width:50% ;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h3 {
            font-size: 25px;
            color : #00a6a5
        }

        h2 {
            margin: 50px auto;
            font-size: 40px;
            font-weight: bold;

            span {
                background-color: #daeced;
                padding: 5px 20px;
                margin-right: 15px;
                color : #00a6a5 ;
            }
        }

        p {
                font-size: 20px;
                color:#b6bebc;
                text-align: center;
            }
    }
}

.line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  height: 20px;
  background-color: #daeced;
  border-radius: 10px;
  padding: 0 10%;
}

.dot {
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #daeced;
  padding: 30px;
  border-radius: 50%;
  color: #248583;
  font-weight: bold;
}

.containers {
    
    height: 30%;
    margin: 70px calc(10% - 110px);
    display: flex;
    
    
   
    justify-content: space-between;

  

    .text-area {
        width: 300px;
        text-align: center;

        h3 {
        font-size: 30px;
        
        font-weight: bold;
        margin-bottom: 30px;

    }

    p {
                font-size: 20px;
                color:#b6bebc;
            }

    }
}

</style>
