import React from "react";
import style from './Botao.module.scss'

class Botao extends React.Component <{
  children?: React.ReactNode
  type?: "button" | "submit" | "reset" | undefined
}>{
  render() {
    const { type = "button" } = this.props //pegar tudo que vem no props, porém só pegaremos o tipo. E se o type não vier o tipo vai ser button
    return (
        <button type={type} className={style.botao}>
            {this.props.children}
        </button>
    )
  }
}

export default Botao;
