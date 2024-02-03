import React, {useState} from "react";
 function TodoButton(){

    const [cont, setCont] = React.useState(0);
    const [palabra , setPalabra] = React.useState("hola");



 function click(){

    setCont (prevCont => prevCont+1);

 }

}
export default TodoButton;