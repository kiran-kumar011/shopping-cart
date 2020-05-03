import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filters from './Filters';
class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchItem: '',
    };
  }

  handleAddToCart = (item) => {
    console.log(item, 'add to cart item');
    item.quantity = 1;
    this.props.dispatch({ type: 'ADD_CART_ITEM', payload: item });
  };

  filterArray = (value) => {
    this.props.dispatch({ type: 'SORT_ITEMS', payload: value });
  };

  filteredItems = (arr, text) => {
    return arr.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
  };

  render() {
    const { products, searchText } = this.props;
    console.log(searchText, 'search text');
    // const { searchText } = this.state;
    const renderItem = searchText
      ? this.filteredItems(products, searchText)
      : products;
    console.log(renderItem, 'renderItem');

    return (
      <div style={{}}>
        <Filters filter={this.filterArray} />
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
            boxSizing: 'border-box',
          }}
        >
          {renderItem.map((dataDetails) => {
            return (
              <div
                style={{
                  width: '10rem',
                  height: '17rem',
                  padding: '0 0.5rem',
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                key={dataDetails.name}
              >
                <img
                  style={{
                    width: '9rem',
                    height: '11rem',
                    objectFit: 'center',
                    //   border: '1px solid blue',
                  }}
                  src={dataDetails.image}
                  alt={dataDetails.name}
                />
                <div style={{ height: '3rem' }}>
                  <p
                    style={{
                      fontSize: '0.8rem',
                      textAlign: 'left',
                    }}
                  >
                    {dataDetails.name}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      margin: '0.5rem 0',
                    }}
                  >
                    <p style={{ fontSize: '0.8rem', fontWeight: '600' }}>
                      <i
                        className="fas fa-rupee-sign"
                        style={{ color: 'rgba(0,0,0,0.5)', fontSize: '0.6rem' }}
                      />
                      {dataDetails.price.actual}
                    </p>
                    <p
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        color: 'rgba(0,0,0,0.4)',
                        textDecoration: 'line-through',
                      }}
                    >
                      {dataDetails.price.display}
                    </p>
                    <p
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        color: 'rgb(67, 191, 6)',
                      }}
                    >
                      {dataDetails.discount}
                    </p>
                  </div>
                  <button
                    onClick={() => this.handleAddToCart(dataDetails)}
                    style={{
                      backgroundColor: 'orange',
                      padding: '0.5rem 0.7rem',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      borderRadius: '1rem',
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
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

export default connect(mapStateToProps)(ShoppingList);
