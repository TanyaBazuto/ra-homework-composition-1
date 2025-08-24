import { Component } from "react";

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        if (!this.props.card.img) {
            return (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.card.title}</h5>
                        <p className="card-text">{this.props.card.text}</p>
                        <a href="#" className="btn btn-primary">{this.props.card.button}</a>
                    </div>                
                </div>
            );
        }
        else {
            return (
                <div className="card">
                <img src={this.props.card.img} className="card-img-top" onerror="this.src='';" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.card.title}</h5>
                        <p className="card-text">{this.props.card.text}</p>
                        <a href="#" className="btn btn-primary">{this.props.card.button}</a>
                    </div>                
                </div>
            );
        }

    }
}
