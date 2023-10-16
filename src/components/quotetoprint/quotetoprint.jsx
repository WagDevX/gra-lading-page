import React from "react";

export class QuoteToPrint extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { dados } = this.props;

    return (
      <>
        <div class="canvas_div_pdf h-[1675px] w-[1184px] bg-white">
          <div class="polyg flex bg-blue-900 justify-center h-[400px]">
            <div class="polyg grid justify-items-center bg-gradient-to-b  h-[200px] w-[1184px] from-blue-50 to-blue-300 pt-2">
              <div class="relative">
                <img
                  class=""
                  src="/logos/gralogo.png"
                  alt=""
                  width="250"
                  height="200"
                />
                <span class="absolute top-[65%] left-[17%] font-semibold drop-shadow-lg text-2xl text-blue-400">
                  AUTOMAÇÕES
                </span>
              </div>
            </div>
          </div>
          <div class="px-20">
            <h1 class="text-5xl font-bold">ORÇAMENTO</h1>
            <div class="flex gap-5">
              <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:divide-gray-700 mt-5">
                <div class="flex flex-col pb-3">
                  <dt class="mb-1 text-gray-500 md:text-md dark:text-gray-400">
                    NOME FANTASIA
                  </dt>
                  <dd class="text-md font-semibold">GRA AUTOMATIZAÇÕES</dd>
                </div>
                <div class="flex flex-col py-3">
                  <dt class="mb-1 text-gray-500 md:text-md dark:text-gray-400">
                    RAZÃO SOCIAL
                  </dt>
                  <dd class="text-md font-semibold">
                    31394 – ELISABETE DAS GRAÇAS FERREIRA DA SILVA
                  </dd>
                </div>
                <div class="flex flex-col pt-3">
                  <dt class="mb-1 text-gray-500 md:text-md dark:text-gray-400">
                    ENDEREÇO
                  </dt>
                  <dd class="text-md font-semibold">
                    ARISTIDES BORSATO, 111 – FAZENDINHA
                  </dd>
                </div>
              </dl>
              <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:divide-gray-700 mt-5">
                <div class="flex flex-col pb-3">
                  <dt class="mb-1 text-gray-500 md:text-md dark:text-gray-400">
                    CONTATO
                  </dt>
                  <dd class="text-md font-semibold">
                    41 997171486 / 41 996750253
                  </dd>
                </div>
                <div class="flex flex-col py-3">
                  <dt class="mb-1 text-gray-500 md:text-md dark:text-gray-400">
                    CNPJ
                  </dt>
                  <dd class="text-md font-semibold">
                    25.062.411/0001-32 IE: ISENTO
                  </dd>
                </div>
                <div class="flex flex-col pt-3">
                  <dt class="mb-1 text-gray-500 md:text-md dark:text-gray-400">
                    DATA DE EMISSÃO
                  </dt>
                  <dd class="text-md font-semibold">14 de Outubro de 2023</dd>
                </div>
              </dl>
            </div>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
              <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100">
                <thead class="text-xs text-white uppercase bg-blue-600 dark:text-white">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Descrição do Produto/Serviço
                    </th>
                    <th scope="col" class="px-6 py-3">
                      {" "}
                      Quantidade
                    </th>
                    <th scope="col" class="px-6 py-3">
                      {" "}
                      Preço unitário
                    </th>
                    <th scope="col" class="px-6 py-3">
                      {" "}
                      Preço final
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-blue-500 border-b border-blue-400">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                    >
                      Terminal dedicado XPE 1013 1/4
                    </th>
                    <td class="px-6 py-4"> 28</td>
                    <td class="px-6 py-4"> R$ 620,00</td>
                    <td class="px-6 py-4"> R$ 17.360,00</td>
                  </tr>
                  <tr class="bg-blue-500 border-b border-blue-400">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                    >
                      Cabo cat5e
                    </th>
                    <td class="px-6 py-4"> White</td>
                    <td class="px-6 py-4"> Laptop PC</td>
                    <td class="px-6 py-4"> $1999</td>
                  </tr>
                  <tr class="bg-blue-500 border-b border-blue-400">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                    >
                      MIP 1000
                    </th>
                    <td class="px-6 py-4"> Black</td>
                    <td class="px-6 py-4"> Accessories</td>
                    <td class="px-6 py-4"> $99</td>
                  </tr>
                  <tr class="bg-blue-500 border-b border-blue-400">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                    >
                      Eletroímã PPA
                    </th>
                    <td class="px-6 py-4"> Gray</td>
                    <td class="px-6 py-4"> Phone</td>
                    <td class="px-6 py-4"> $799</td>
                  </tr>
                  <tr class="bg-blue-500 border-blue-40">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                    >
                      Fonte Chaveada
                    </th>
                    <td class="px-6 py-4"> Red</td>
                    <td class="px-6 py-4"> Wearables</td>
                    <td class="px-6 py-4"> $999</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
