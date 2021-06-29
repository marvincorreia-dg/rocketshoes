import React from 'react';
import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-coreracer-masculino/05/NQQ-4635-205/NQQ-4635-205_zoom2.jpg?ts=1612440481&ims=326x"
          alt="Tenis legal"
        />
        <strong>Tenis muito legal</strong>
        <span>R$190,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-coreracer-masculino/05/NQQ-4635-205/NQQ-4635-205_zoom2.jpg?ts=1612440481&ims=326x"
          alt="Tenis legal"
        />
        <strong>Tenis muito legal</strong>
        <span>R$190,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-coreracer-masculino/05/NQQ-4635-205/NQQ-4635-205_zoom2.jpg?ts=1612440481&ims=326x"
          alt="Tenis legal"
        />
        <strong>Tenis muito legal</strong>
        <span>R$190,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-coreracer-masculino/05/NQQ-4635-205/NQQ-4635-205_zoom2.jpg?ts=1612440481&ims=326x"
          alt="Tenis legal"
        />
        <strong>Tenis muito legal</strong>
        <span>R$190,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
