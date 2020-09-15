import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Text,
} from 'react-native';
import {connect} from 'react-redux';
import {changeCount, resetCount, increment} from './actions/CountActions';
import {bindActionCreators} from 'redux';


class App extends Component {
  decrementCount() {
    let {count, changeCountAction} = this.props;
    count--;
    changeCountAction.changeCount(count);
  }

  incrementCount() {
    let {count, changeCountAction} = this.props;
    // count++;
    // changeCountAction.changeCount(count);
    changeCountAction.increment(count);
  }

  resetCount() {
    let {changeCountAction} = this.props;
    changeCountAction.resetCount();
  }

  render() {
    const {count} = this.props;
    console.log(this.props);
    return (
      <SafeAreaView>
        <View styles={styles.container}>
          <Button
            title="increment"
            onPress={() => this.incrementCount()}
          />
          <Text>{count}</Text>
          <Button
            title="decrement"
            onPress={() => this.decrementCount()}
          />
          <Button
            title="reset"
            onPress={() => this.resetCount()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  const {countState} = state;
  return ({
    count: countState.count,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    changeCountAction: bindActionCreators({changeCount, resetCount, increment}, dispatch),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
