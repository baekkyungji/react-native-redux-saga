import React from 'react';
import {connect} from 'react-redux';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%',
};
const articleStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'olive',
};
let NewsItem = ({news}) => (
  news ?
    <View>
      {news.map((news, i) => (
          <Text key={i}>{news.name}</Text>
        ),
      )}
    </View> :
    null
);

const mapStateToProps = (state) => {
  return ({
    news: state.countState.news,
  });
};
NewsItem = connect(mapStateToProps, null)(NewsItem);
export default NewsItem;
