import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="" />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img width={20} height={20} src="/img/card.svg" alt="" />
          </li>

          <span>1205 руб.</span>

          <li>
            <img width={20} height={20} src="/img/heart-card.svg" alt="" />
          </li>
          <li>
            <img width={20} height={20} src="/img/user.svg" alt="" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="card-list">
          <div className="card">
            <img width={133} height={112} src="/img/1.jpg" alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="cardButton ">
              <div className="cost">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/2.jpg" alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="cardButton">
              <div className="cost">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/3.jpg" alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="cardButton">
              <div className="cost">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/4.jpg" alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="cardButton">
              <div className="cost">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
