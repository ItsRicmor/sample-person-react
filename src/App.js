import React, { Component } from 'react'
import Person from './containers/Person'
import style from './assets/css/style.module.css'
class App extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.header}>
          Header Joshua
        </div>
        <div className={style.menu}>Menu</div>
        <div className={style.content}>
          <Person />
        </div>
        <div className={style.footer}>footer</div>
      </div>
    )
  }
}

export default App;
