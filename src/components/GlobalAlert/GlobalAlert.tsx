import React from 'react';
import { StyleSheet } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { useSelector } from 'react-redux';
import { commonActions, GlobalAlertType } from '../../slices';
import { RootState, useAppDispatch } from '../../store';

const GlobalAlert: React.FC = () => {
  const { globalAlert } = useSelector((state: RootState) => state.common);
  const dispatch = useAppDispatch();
  const { visible, message, title, type } = globalAlert ?? {};

  const closeAlert = () => {
    dispatch(commonActions.closeAlert());
  };

  return (
    <AwesomeAlert
      show={visible}
      showProgress={false}
      title={title}
      message={message}
      contentStyle={styles.container}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={false}
      useNativeDriver
      //   showCancelButton={true}
      showConfirmButton={true}
      //   cancelText="No, cancel"
      titleStyle={{
        color: type === GlobalAlertType.ERROR ? 'red' : 'green',
      }}
      confirmText="OK"
      confirmButtonColor="#03befc"
      confirmButtonStyle={styles.button}
      //   onCancelPressed={() => {
      //     console.log('cancel');
      //   }}
      onConfirmPressed={() => {
        closeAlert();
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: '#03befc',
  },
  text: {
    color: '#fff',
    fontSize: 15,
  },
  errorText: {
    color: '#fc0356',
    fontSize: 15,
  },
});

export default GlobalAlert;
