export default function Box({ text, onClick }) {
  return (
    <button className="box" type="button" onClick={onClick}>
      {text}
    </button>
  )
}
