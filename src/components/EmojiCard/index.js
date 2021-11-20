// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {each} = props
  const {emojiName, emojiUrl} = each
  return (
    <li className="list-item">
      <img src={emojiUrl} alt={emojiName} />
    </li>
  )
}

export default EmojiCard
