import './BlueButton.css'

function BlueButton({ text }: { text: string }) {
  return (
    <button className="BlueButton">{text}</button>
  );
}

export default BlueButton;