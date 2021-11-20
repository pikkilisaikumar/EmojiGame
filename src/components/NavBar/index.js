import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  state = {count: 0, totalCount: 0}

  render() {
    const {count, totalCount} = this.state
    return (
      <div className="navbarcontainer">
        <nav className="firstnavbarcontainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="emojigameheading">Emoji Game</h1>
        </nav>
        <div className="counttotalcountcontainer">
          <p className="countparagraph">Score:{count}</p>
          <p>Top Score:{totalCount}</p>
        </div>
      </div>
    )
  }
}

export default NavBar
