import React from 'react';
import { connect } from 'react-redux';
import { setSelected, setHovered } from '../../redux/meal-reducer';

import Food from './Food';

class FoodContainer extends React.Component {


    render() {
        return <Food meal={this.props.meal} setSelected={this.props.setSelected} setHovered={this.props.setHovered}/>
    }
}

let mapStateToProps = (state) => {
    return {
        meal: state.meal,
    }
}

export default connect(mapStateToProps, {setSelected, setHovered})(FoodContainer);