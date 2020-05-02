import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import ProductList from '../Components/ShoppingList';
import { items } from '../JSON/JSONData.json';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchInputActive: false,
    };
  }

  componentDidMount() {
    console.log('Home screen mounted', this.props);
    this.props.dispatch({ type: 'ADD_ITEMS', payload: items });
  }

  handleSearchButton = () => {
    console.log('handleSearchButton');
    this.setState({ isSearchInputActive: !this.state.isSearchInputActive });
  };

  render() {
    const { products } = this.props;
    const { isSearchInputActive } = this.state;

    return (
      <div style={{ backgroundColor: '#ccc' }}>
        <Header
          isActive={isSearchInputActive}
          handleInputClick={this.handleSearchButton}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 20px',
          }}
        >
          <div
            style={{
              width: '25%',
              height: '200px',
              // backgroundColor: 'red',
              border: '1px solid black',
              padding: '10px',
            }}
          >
            filter
          </div>
          <div style={{}}>
            <ProductList data={products} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(Home);
