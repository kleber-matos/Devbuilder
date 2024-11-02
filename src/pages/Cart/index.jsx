import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { FaTrash } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import Aviso from "../../components/Aviso";
import Swal from "sweetalert2";

import * as S from "./styled";

export default function index() {
  const { produto, setProduto } = useContext(CartContext);

  const removerItem = (id) => {
    const filtrado = produto.filter((e) => e.id !== id);
    setProduto(filtrado);
  };

  const finalizar = () => {
    let timerInterval;
    Swal.fire({
      title: "Obrigado(a), volte sempre!",
      html: "Finalizando seu pedido em <b></b> m/s.",
      timer: 4000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
        window.location.pathname = "/";
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  };

  return (
    <>
      {produto.length == 0 ? (
        <Aviso sobre={"Seu carrinho está vazio!"} />
      ) : (
        <S.Container>
          <S.BoxItens>
            {produto.map((e, id) => (
              <S.Produto key={id}>
                <img src={e.imagem} alt={e.name} />
                <div>
                  <h2>{e.name}</h2>
                  <span>R$ {e.preco.toFixed(2).replace(".", ",")}</span>
                </div>

                <button onClick={() => removerItem(e.id)}>
                  <FaTrash />
                </button>
              </S.Produto>
            ))}
            <p>
              Confira as promoções e brindes no seu carrinho! As promoções e
              brindes serão aplicados levando em conta o valor líquido do
              carrinho, considerando todos os descontos aplicados, inclusive com
              os meios de pagamento.
            </p>
          </S.BoxItens>

          <div>
            <S.Box>
              <S.Item>
                <h2>{produto.length > 1 ? `Itens` : `Item`}</h2>
                <h2>{produto.length}</h2>
              </S.Item>

              <S.Preco>
                <h2>Valor total</h2>
                <span>
                  R$
                  {produto
                    .reduce((valor, item) => valor + item.preco, 0)
                    .toFixed(2)
                    .replace(".", ",")}
                </span>
              </S.Preco>

              <button onClick={() => finalizar()}>Finalizar</button>
            </S.Box>

            <S.Seguro>
              <AiFillCheckCircle />
              <h3>COMPRA SEGURA</h3>
            </S.Seguro>
          </div>
        </S.Container>
      )}
    </>
  );
}
