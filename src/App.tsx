import "./App.css";
import "./a.css";
function App() {
  const positions = Array.from(Array(100).keys());

  return (
    <>
      <div className="container">
        <div className="cont">
          <div className="letterCont">
            <div className="wrapper">
              <div className="lid one"></div>
              <div className="lid two"></div>
              <div className="envelope"></div>
              <div className="letter">
                <h1>
                  Kính gửi tặng em yêu Hà Phương nhân ngày Phụ nữ Việt Nam
                  (✿◡w◡)
                </h1>
              </div>
            </div>
          </div>
          <div className="roseCont">
            <MainRose />
          </div>
        </div>
        <div>
          {positions.map((p: number) => {
            return <Flower position={`${p}00px`} />;
          })}
        </div>
      </div>
    </>
  );
}
function Flower({ position }: { position: string }) {
  return (
    <div style={{ position: "absolute", left: position, bottom: 240 }}>
      <div className="rose">
        <div className="flower">
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
        </div>
        <div className="leaf">
          <div className="stem"></div>
          <div className="leafs"></div>
          <div className="leafs"></div>
        </div>
      </div>
    </div>
  );
}

function MainRose() {
  return (
    <div className="container2">
      <div className="glass"></div>

      <div className="glow"></div>
      <div className="rose-leaves">
        <div></div>
        <div></div>
      </div>
      <div className="rose-petals">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="sparkles">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
