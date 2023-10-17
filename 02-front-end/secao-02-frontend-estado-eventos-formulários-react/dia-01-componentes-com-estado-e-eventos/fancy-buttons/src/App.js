import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.buttonClick_1 = this.buttonClick_1.bind(this);
    this.buttonClick_2 = this.buttonClick_2.bind(this);
    this.buttonClick_3 = this.buttonClick_3.bind(this);

    this.state = {
      buttonClick_1: 0,
      buttonClick_2: 0,
      buttonClick_3: 0,
    };
  }
    buttonClick_1() {
      console.log('Clicou no botão 1!', this);
      this.setState(({ buttonClick_1 }) => ({
        buttonClick_1: buttonClick_1 + 1,
    }));
  }

  buttonClick_2() {
    console.log('Clicou no botão 2!', this);
    this.setState(({ buttonClick_2 }) => ({
      buttonClick_2: buttonClick_2 + 1,
    }));
  }

  buttonClick_3() {
    console.log('Clicou no botão 3!', this);
    this.setState(({ buttonClick_3}) => ({
      buttonClick_3: buttonClick_3 + 1,
    }));
  }
  render() {
    const { buttonClick_1, buttonClick_2, buttonClick_3 } = this.state;
    return (
      <div>
        <button onClick={this.buttonClick_1}>
          {`Cliques no botão 1: ${buttonClick_1}`}
        </button>
        <button onClick={this.buttonClick_2}>
          {`Cliques no botão 2: ${buttonClick_2}`}
        </button>
        <button onClick={this.buttonClick_3}>
          {`Cliques no botão 3: ${buttonClick_3}`}
        </button>
      </div>
    );
  }
} 

export default App;