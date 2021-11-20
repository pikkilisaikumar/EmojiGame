/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import './index.css'

class EmojiGame extends Component {
  render() {
    const {emojisList} = this.props
    return (
      <div className="background-details">
        <NavBar />
        <div className="card-itemscontainer">
          <ul className="unorderlistone">
            {emojisList.map(each => (
              <EmojiCard each={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
