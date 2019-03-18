// 自动补全视图
// createByName fangkyi03
//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions,ScrollView,TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types'

// 获取宽高
const {width, height} = Dimensions.get ('window');

// create a component
class AutoCompleteView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalShow:false,
            layout:{x:0,y:height,width,height}
        }
        this.callBack = {}
    }
    
    openModal = (layout,callBack) =>{
        this.setState({
            layout,
            isModalShow:true
        })
        this.callBack = callBack
    }

    closeModal = () =>{
        this.callBack.blur()
        this.setState({...this.state,layout:{y:height},isModalShow:false})
        this.callBack = {}
    }

    getChildContext = () =>{
        return { openModal: this.openModal, closeModal: this.closeModal}
    }

    onItemPress = (item,txt) =>{
        this.callBack.onItemPress && this.callBack.onItemPress(txt,item);
        this.closeModal()
    }

    renderSelect = () =>{
        const { itemData, itemKey, itemView, itemButtonView, itemTextView } = this.props
        const { layout } = this.state
        return (
            <View style={{ position: 'absolute', top: layout.y, left: 0, right: 0, height, width, }}>
                <View style={[styles.itemMainView, itemView, { marginLeft: layout.x, width: layout.width }]}>
                    <ScrollView
                        style={{ flex: 1, maxHeight: 150, padding: 10 }}
                        showsVerticalScrollIndicator={false}
                    >
                        {
                            itemData ? itemData.map((e, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => this.onItemPress(e, e[itemKey])}
                                        style={[itemButtonView, { minHeight: 30, justifyContent: 'center', alignItems: 'flex-start' }]}
                                    >
                                        <Text style={[itemTextView]}>{e[itemKey]}</Text>
                                    </TouchableOpacity>
                                )
                            })
                                : <View style={{ flex: 1 }}></View>
                        }
                    </ScrollView>
                </View>
                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => this.closeModal()}
                />
            </View>
        )
    }

    render() {
        const {style,itemData} = this.props
        const {isModalShow} = this.state
        return (
          <View style={[styles.container, style]}>
            {this.props.children}
            {itemData && isModalShow && this.renderSelect()}
          </View>
        );
    }
}

AutoCompleteView.childContextTypes = {
    openModal:PropTypes.func,
    closeModal:PropTypes.func,
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemMainView:{
        minHeight:150,
        backgroundColor: 'white',
        borderWidth: 1,
    }
});

//make this component available to the app
export default AutoCompleteView;
