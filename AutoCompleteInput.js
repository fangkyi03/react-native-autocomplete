// 自动补全编辑框
// createByName fangkyi03
//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';

import PropTypes from 'prop-types';

// create a component
class AutoCompleteInput extends Component {

    /**
     * 失去焦点
     * 
     * @memberof AutoCompleteInput
     */
    blur = () =>{
        this.refs._input.blur()
    }

    /**
     * 编辑框获取焦点
     * 
     * @memberof AutoCompleteInput
     */
    onFocus = (e) =>{
       const {onItemPress} = this.props
       this.refs._input.measureInWindow((x,y,width,height)=>{
           this.context.openModal({x,y,width,height},{blur:this.blur,onItemPress})
       })
    }

    render() {
        const {style,inputStyle} = this.props
        return (
            <View style={[styles.container,style]} ref={'_inputView'}>
                <TextInput
                    ref={'_input'}
                    {...this.props}
                    style={[inputStyle]}
                    onFocus={this.onFocus}
                />
            </View>
        );
    }
}

AutoCompleteInput.contextTypes = {
    openModal:PropTypes.func,
    closeModal:PropTypes.func,
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default AutoCompleteInput;
