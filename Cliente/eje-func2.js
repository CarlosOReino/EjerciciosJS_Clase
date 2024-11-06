function f1(){
    console.log("Inicio f1");
    f2();
    console.log("Fin f1");
    }
    function f2(){
    console.log("Inicio f2");
    f3();
    console.log("Fin f2");
    }
    function f3(){
    console.log("En función f3");
    }
    f1();