import React, { useEffect, useState } from 'react';
import { Text as RnText, TextInput } from 'react-native';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import * as SplashScreen from 'expo-splash-screen';
import Toast from 'react-native-toast-message';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from '@store/root.store';
import {
  ConfirmationDialog,
  LoadingOverlay,
  NoConnectionToast,
} from '@components';
import { toastConfig } from '@config/toastConfig';
import axios from 'axios';
import { RootNavigation } from '@navigation/index';

interface TextWithDefaultProps extends Text {
  defaultProps?: { allowFontScaling?: boolean };
}

interface TextInputWithDefaultProps extends TextInput {
  defaultProps?: { allowFontScaling?: boolean };
}

(RnText as unknown as TextWithDefaultProps).defaultProps =
  (RnText as unknown as TextWithDefaultProps).defaultProps || {};
(RnText as unknown as TextWithDefaultProps).defaultProps!.allowFontScaling =
  false;
(TextInput as unknown as TextInputWithDefaultProps).defaultProps =
  (TextInput as unknown as TextInputWithDefaultProps).defaultProps || {};
(TextInput as unknown as TextInputWithDefaultProps).defaultProps!
  .allowFontScaling;

export default function App() {
  const [isConnected, setIsConnected] = useState(true);
  const [loading, setLoading] = useState(false);

  const captureConnectionState = async (state: NetInfoState) => {
    try {
      const res = await axios.get('https://google.com'); // trial to check internet reachablitiy
      if (!(state.isConnected && res.status == 200)) {
        setIsConnected(res.status == 200 || false);
      } else {
        setIsConnected(true);
      }
    } catch (e) {
      setIsConnected(false);
    }
  };

  const unsubscribe = NetInfo.addEventListener(captureConnectionState);

  const retryConnection = async () => {
    setLoading(true);

    try {
      await NetInfo.refresh();
      const state = await NetInfo.fetch();
      captureConnectionState(state);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    SplashScreen.hideAsync();
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Provider store={store}>
      <StatusBar style='auto' />
      <RootNavigation />
      <ConfirmationDialog />
      <LoadingOverlay />
      <Toast config={toastConfig} />
      {!isConnected && (
        <NoConnectionToast loading={loading} retry={retryConnection} />
      )}
    </Provider>
  );
}
