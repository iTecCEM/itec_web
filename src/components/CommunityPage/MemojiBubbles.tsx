import Aleks from "../../assets/memojis/Aleks.png";
import Alex from "../../assets/memojis/Alex 1.png"; //Mesa directiva
import David from "../../assets/memojis/David 1.png"; //Mesa directiva
import Emi from "../../assets/memojis/Emi.png"; //Mesa directiva
import Fernando from "../../assets/memojis/Fernando 3.png"; //Mesa directiva
import Gabriel from "../../assets/memojis/Gabriel.png";
import JuanMa from  "../../assets/memojis/JuanMa_2 1.png";  //Mesa directiva
import Ka from "../../assets/memojis/Ka.png";
import Manuel from "../../assets/memojis/Manuel 1.png"; //Mesa directiva

const MemojiBubbles = () => {
  return (
    <section className="memojiSection">
      <div className="memojiRectangle">
        <h1>iTec Community</h1>

        <div className="memojiCanvas">
          <div className="bubble bubbleLarge bubbleOrange bubble 1">
            <img src={Emi} alt="Emi memoji" />
            <img src={Fernando} alt="Fernando memoji" />
          </div>

          <div className="bubble bubbleLarge bubbleBlue bubble 2">
            <img src={Alex} alt="Alex memoji" />
            <img src={David} alt="David memoji" />
            <img src={JuanMa} alt="JuanMa memoji" />
            <img src={Manuel} alt="Manuel memoji" />
          </div>

          <div className="bubble bubbleMedium bubblePink bubble 3">
            <img src={Aleks} alt="Aleks memoji" />
            <img src={Gabriel} alt="Gabriel memoji" />
            <img src={Ka} alt="Ka memoji" />
          </div>

          {/*big dots (100 x 100) colors */}
          <div className="bubble bubbleDot bubbleReddishPink dot1"></div>
          <div className="bubble bubbleDot bubbleReddishSkyBlue dot2"></div>
          <div className="bubble bubbleDot bubbleReddishDarkBlue dot3"></div>
          <div className="bubble bubbleDot bubbleReddishOrange2 dot4"></div>
          <div className="bubble bubbleDot bubbleReddishYellow dot5"></div>
          <div className="bubble bubbleDot bubbleReddishIntenseGreen dot6"></div>
          <div className="bubble bubbleDot bubbleReddishPurplePink dot7"></div>
          <div className="bubble bubbleDot bubbleReddishLiliac dot8"></div>

          {/*medium dots 72x68*/} 
          <div className="bubble bubbleDot bubbleRed2 dot2-1"></div>
          <div className="bubble bubbleDot bubblePaleGreen dot2-2"></div>
          
          {/*small dots 41x38*/}
          <div className="bubble bubbleDot bubbleAmber dot3-1"></div>
          <div className="bubble bubbleDot bubblePalePink dot3-2"></div>
          <div className="bubble bubbleDot bubbleMintGreen dot3-3"></div>
          <div className="bubble bubbleDot bubbleAmber dot3-4"></div>
          <div className="bubble bubbleDot bubbleMintGreen dot3-5"></div>

        </div>
      </div>
    </section>
  );
}



export default MemojiBubbles;