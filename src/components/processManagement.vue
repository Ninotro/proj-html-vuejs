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
            <h2><span>Process</span>Management</h2>
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
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div class="text-area">
                <h3>Strategic planning</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div class="text-area">
                <h3>Assignment of responsibilities</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div class="text-area">
                <h3>Formatting process</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div class="text-area">
                <h3>Continuity formalization</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            
            
          
           

        </div>
    

   </section>
   
</template>

<style lang="scss" scoped>
@use "../style/general.scss";


#processManagement {
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .container {
        height: 40%;
        width:50% ;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h3 {
            font-size: 20px;
            color : #00a6a5
        }

        h2 {
            margin: 30px auto;
            font-size: 50px;
            font-weight: bold;
            color:#21333e;

            span {
                background-color: #daeced;
                padding: 5px 20px;
                margin-right: 15px;
                color : #00a6a5 ;
            }
        }

        p {
                font-size: 20px;
                color:#95a8b6;
                text-align: center;
            }
    }
}

.line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  height: 5px;
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
  padding: 10px;
  border-radius: 50%;
  color: #248583;
  font-weight: bold;
}

.containers {
    
    height: 30%;
    margin: 30px calc(10% - 110px);
    display: flex;
    
    
   
    justify-content: space-between;

  

    .text-area {
        width: 300px;
        text-align: center;

        h3 {
        font-size: 30px;
        color:#21333e;
        margin-top: 20px;
        font-weight: bold;
        margin-bottom: 30px;

    }

    p {
                font-size: 20px;
                color:#95a8b6
            }

    }
}

</style>
