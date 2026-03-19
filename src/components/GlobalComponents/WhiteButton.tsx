import './WhiteButton.css'

function WhiteButton({ text, onClick }: { text: string; onClick?: () => void }) {
  return (
    <button className="WhiteButton" onClick={onClick}>{text}</button>
  );
}

export default WhiteButton;