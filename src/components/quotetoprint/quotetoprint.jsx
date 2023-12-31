import React from "react";

export class QuoteToPrint extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { dados } = this.props;
    const date = new Date();

    let total = dados
      .reduce((acomulator, dado) => {
        return (
          parseFloat(dado.itemPrice.replace(",", ".")) *
            parseInt(dado.itemQuantity) +
          acomulator
        );
      }, 0)
      .toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });

    return (
      <>
        <div class="canvas_div_pdf h-[1600px] w-[1184px] bg-white">
          <div class="quoteheader flex bg-blue-900 justify-center h-[400px]">
            <div class="firstquoteheader grid justify-items-center bg-gradient-to-b  h-[200px] w-[1184px] from-blue-50 to-blue-300 pt-2">
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
                <div class="flex flex-col pt-3 pb-3">
                  <dt class="mb-1 text-gray-500 md:text-md dark:text-gray-400">
                    ENDEREÇO
                  </dt>
                  <dd class="text-md font-semibold">
                    ARISTIDES BORSATO, 111 – FAZENDINHA
                  </dd>
                </div>
                <div class="flex flex-col pt-3">
                  <dt class="mb-1 text-gray-500 md:text-md dark:text-gray-400">
                    CLIENTE
                  </dt>
                  <dd class="text-md font-semibold">
                    {dados[0]?.firstName + " " + dados[0]?.lastName}
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
                  <dd class="text-md font-semibold">
                    {date.toLocaleDateString({ options: "dd/mm/yyyy" })}
                  </dd>
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
                  {dados.length > 0 &&
                    dados.map((m) => (
                      <tr class="bg-blue-500 border-b border-blue-400">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                        >
                          {m.itemDescription}
                        </th>
                        <td class="px-6 py-4"> {m.itemQuantity}</td>
                        <td class="px-6 py-4">
                          {" "}
                          {parseFloat(m.itemPrice).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </td>
                        <td class="px-6 py-4">
                          {" "}
                          {(
                            parseInt(m.itemQuantity) *
                            parseFloat(m.itemPrice.replace(",", "."))
                          ).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </td>
                      </tr>
                    ))}
                  <tr className="bg-blue-600">
                    <th
                      colSpan={3}
                      scope="row"
                      class="px-6 py-4 font-extrabold text-xl text-center text-white whitespace-nowrap "
                    >
                      TOTAL
                    </th>
                    <td className="px-6 py-4 font-extrabold text-xl text-white whitespace-nowrap ">
                      {total}
                    </td>
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
