import './WhiteButton.css'

function BlueButton({ text }: { text: string }) {
  return (
    <button className="WhiteButton">{text}</button>
  );
}

export default BlueButton;