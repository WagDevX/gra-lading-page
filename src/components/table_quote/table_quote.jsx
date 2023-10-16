import { useState, useRef } from 'react';
import ReactToPrint from "react-to-print";
import { QuoteToPrint } from  "../../components/quotetoprint/quotetoprint.jsx";



export default function TableQuote() {
  const quoteToPrintRef = useRef(null);
  const [table, setTable] = useState([]);

  return (
  <div class="grid w-full">
    <h1 className="text-primary text-3xl font-bold">Geração de orçamentos</h1>
    
<form>
    <div class="grid gap-6 mb-6 md:grid-cols-2 mt-5">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cliente: Primeiro nome</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="João" required />
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cliente: Segundo nome</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pessoa" required />
        </div>
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descrição do item/serviço</label>
            <input type="text" id="item_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nome do Produto/Serviço" required />
        </div>  
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantidade do item</label>
            <input type="number" id="quantity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Quantidade do item" required />
        </div>
        <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preço unitário do item/serviço</label>
            <input type="price" id="item_price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Preço do item" required />
        </div>
        </div>
    <button onClick={() => {}} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Adicionar item</button>
</form>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
              <table
                class="w-full text-sm text-left text-blue-100 dark:text-blue-100"
              >
                <thead
                  class="text-xs text-white uppercase bg-blue-600 dark:text-white"
                >
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Descrição do Produto/Serviço
                    </th>
                    <th scope="col" class="px-6 py-3"> Quantidade</th>
                    <th scope="col" class="px-6 py-3"> Preço unitário</th>
                    <th scope="col" class="px-6 py-3"> Preço final</th>
                  </tr>
                </thead>
                <tbody>
                  {table.length > 0 && table.map( (item) =>
                     <tr class="bg-blue-500 border-b border-blue-400">
                     <th
                       scope="row"
                       class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                     >
                       {item.name}
                     </th>
                     <td class="px-6 py-4"> {item.quantity}</td>
                     <td class="px-6 py-4"> {item.price}</td>
                     <td class="px-6 py-4"> {item.quantity * item.price}</td>
                   </tr>

                  )}
                 
                 
                </tbody>
              </table>
            </div>

    <div className='hidden'>
    <QuoteToPrint ref={quoteToPrintRef}  dados={table}/>
    </div>  
    <ReactToPrint
              trigger={() => <button className=" mt-5 bg-primary hover:after:text-white  text-white border-transparent hover:border-[#172554] px-6 py-3  rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
              after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554]
               hover:after:opacity-100 hover:after:scale-[2.5]">Imprimir</button>}
              content={() => quoteToPrintRef.current}
            />
  </div>  
   
  );
};