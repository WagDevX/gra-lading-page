import React, { useState, useRef } from 'react';
import ReactToPrint from "react-to-print";
import { QuoteToPrint } from  "../../components/quotetoprint/quotetoprint.jsx";



export default function TableQuoe() {
  const quoteToPrintRef = useRef(null);
  const [table, setTable] = useState([]);

  return (
  <div class="grid w-full">
    <h1 className="text-primary text-3xl font-bold">Geração de orçamentos</h1>
    <div className='hidden'>
    <QuoteToPrint ref={quoteToPrintRef}  dados={table}/>
    </div>  
    <ReactToPrint
              trigger={() => <button  className="bg-primary hover:after:text-white  text-white border-transparent hover:border-[#172554] px-6 py-3  rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
              after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554]
               hover:after:opacity-100 hover:after:scale-[2.5]">Imprimir</button>}
              content={() => quoteToPrintRef.current}
            />
  </div>  
   
  );
};