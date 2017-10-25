class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bold: false
    };
  }

  onItemMouseOver() {
    this.setState ({
      bold: !this.state.done
    });
  }

  render() {

    var style = {
      fontWeight: this.state.bold ? 'bold' : '200'
    };

    return (
      <li style={style} onMouseOver={this.onItemMouseOver.bind(this)}> {this.props.item} </li>
    )
  }
}


var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item}/>
    )}
  </ul>
);

ReactDOM.render(<GroceryList items={['Bread', 'Peanut butter']} />, document.getElementById("app"));