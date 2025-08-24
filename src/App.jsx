import './App.css';
import Card from "./Card";
import shortid from "shortid";
import { Component } from "react";

function App() {
  const cardList = [
    {
      img: "https://s3.iimg.su/s/24/gBieoMNxHTHo5vYyQUJYHJNE7SQoLl81m2VlKtmm.jpg",
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the cards`s content",
      button: "Go somewhere",
    },
    {
      img: "",
      title: "Special title tratment",
      text: "With supporting text below as a natural lead-in to additional content.",
      button: "Go somewhere",
    },
  ]

  const cards = () => {
    return cardList.map(item => <Card card={item} key={shortid.generate()} />)
  }

  class CardProps extends Component{
      constructor(props) {
          super(props);
          this.props = props;
      }

      render() {
          return (
              <div>
                  {this.props.children}
              </div>
          );
      }
  }

  return (
    <div className="app">
      <CardProps children={cards()} />
    </div>
  );
}

export default App;
