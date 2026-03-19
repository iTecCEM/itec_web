import './BlueButton.css'
function BlueButton({ text, onClick }: { text: string; onClick?: () => void }) {
  return (
    <button className="BlueButton" onClick={onClick}>{text}</button>
  );
}

export default BlueButton;