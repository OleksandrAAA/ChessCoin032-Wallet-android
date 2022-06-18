import React from 'react';
import { TouchableOpacity, ScrollView, Linking, Image, View, Text, StyleSheet, useWindowDimensions, Platform } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { getApplicationName, getVersion, getBundleId, getBuildNumber, getUniqueId } from 'react-native-device-info';
import Rate, { AndroidMarket } from 'react-native-rate';

import { BlueButton, BlueCard, BlueListItem, BlueSpacing20, BlueTextCentered, BlueCopyToClipboardButton } from '../../BlueComponents';
import navigationStyle from '../../components/navigationStyle';
import loc from '../../loc';

const About = () => {
  const { navigate } = useNavigation();
  const { colors } = useTheme();
  const { width, height } = useWindowDimensions();
  const styles = StyleSheet.create({
    copyToClipboard: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 0,
    },
    logo: {
      width: 124,
      height: 124,
      marginTop: 10,
    },
    textFree: {
      maxWidth: 260,
      marginVertical: 24,
      color: '#9AA0AA',
      fontSize: 15,
      textAlign: 'center',
      fontWeight: '500',
    },
    textBackup: {
      maxWidth: 260,
      marginBottom: 0,
      color: colors.foregroundColor,
      fontSize: 15,
      textAlign: 'center',
      fontWeight: '500',
    },
    buildWith: {
      backgroundColor: colors.inputBackgroundColor,
      padding: 6,
      paddingTop: 0,
      borderRadius: 8,
    },
    buttonLink: {
      backgroundColor: colors.lightButton,
      borderRadius: 12,
      justifyContent: 'center',
      padding: 8,
      flexDirection: 'row',
    },
    textLink: {
      color: colors.foregroundColor,
      marginLeft: 8,
      fontWeight: '600',
    },
  });

  const handleOnReleaseNotesPress = () => {
    navigate('ReleaseNotes');
  };

  const handleOnSelfTestPress = () => {
    navigate('Selftest');
  };

  const handleOnLicensingPress = () => {
    // navigate('Licensing');
  };

  const handleOnTwitterPress = () => {
    Linking.openURL('https://twitter.com/032ChessCoin');
  };

  const handleOnDiscordPress = () => {
    Linking.openURL('https://discord.com/invite/APy2TXKDVZ');
  };

  const handleOnTelegramPress = () => {
    Linking.openURL('https://t.me/joinchat/-I8F2uaxZSRkZDcy');
  };
  const handleOnGithubPress = () => {
    Linking.openURL('https://github.com/AKKPP/ChessCoin032-for-Android-operating-systems.git');
  };
  const handleOnWebsitePress = () => {
    Linking.openURL('https://www.chesscoin032.com/');
  };
  const handleOnRatePress = () => {
    const options = {
      AppleAppID: 'com.electrum.chess032wallet',
      GooglePackageName: 'com.electrum.chess032wallet',
      preferredAndroidMarket: AndroidMarket.Google,
      preferInApp: true,
      openAppStoreIfInAppFails: true,
      fallbackPlatformURL: 'https://www.chesscoin032.com/',
    };
    Rate.rate(options, success => {
      if (success) {
        console.log('User Rated.');
      }
    });
  };

  return (
    <ScrollView testID="AboutScrollView" contentInsetAdjustmentBehavior="automatic">
      <BlueCard>
        <View style={styles.center}>
          <Image style={styles.logo} source={require('../../img/icon.png')} />
          <Text style={styles.textFree}>{loc.settings.about_free}</Text>
          <Text style={styles.textBackup}>{loc.settings.about_backup}</Text>
          {/* <BlueButton onPress={handleOnRatePress} title={loc.settings.about_review + ' ⭐🙏'} /> */}
        </View>
      </BlueCard>
      <BlueListItem
        leftIcon={{
          name: 'twitter',
          type: 'font-awesome',
          color: '#000000',
        }}
        onPress={handleOnTwitterPress}
        title={loc.settings.about_sm_twitter}
      />
      <BlueListItem
        leftIcon={{
          name: 'telegram',
          type: 'font-awesome',
          color: '#000000',
        }}
        onPress={handleOnTelegramPress}
        title={loc.settings.about_sm_telegram}
      />
      <BlueListItem
        leftIcon={{
          name: 'discord',
          type: 'font-awesome-5',
          color: '#000000',
        }}
        onPress={handleOnDiscordPress}
        title={loc.settings.about_sm_discord}
      />
      <BlueListItem
        leftIcon={{
          name: 'info',
          type: 'font-awesome',
          color: '#000000',
        }}
        onPress={handleOnWebsitePress}
        title={loc.settings.about_sm_website}
      />
      <BlueCard>
        <View style={styles.buildWith}>
          <BlueSpacing20 />
          <BlueTextCentered>{loc.settings.about_awesome} 👍</BlueTextCentered>
          <BlueSpacing20 />
          <BlueTextCentered>React Native, bitcoinjs-lib, Nodejs, Electrum server</BlueTextCentered>
          {/* <BlueTextCentered>bitcoinjs-lib</BlueTextCentered>
          <BlueTextCentered>Nodejs</BlueTextCentered>
          <BlueTextCentered>Electrum server</BlueTextCentered> */}
          {/* <BlueSpacing20 /> */}

          <TouchableOpacity onPress={handleOnGithubPress} style={styles.buttonLink}>
            <Icon size={22} name="github" type="font-awesome-5" color={colors.foregroundColor} />
            <Text style={styles.textLink}>{loc.settings.about_sm_github}</Text>
          </TouchableOpacity>
        </View>
      </BlueCard>
      {/* <BlueListItem
        leftIcon={{
          name: 'book',
          type: 'font-awesome',
          color: '#9AA0AA',
        }}
        chevron
        onPress={handleOnReleaseNotesPress}
        title={loc.settings.about_release_notes}
      />
      <BlueListItem
        leftIcon={{
          name: 'law',
          type: 'octicon',
          color: colors.foregroundColor,
        }}
        chevron
        onPress={handleOnLicensingPress}
        title={loc.settings.about_license}
      /> }
      { <BlueListItem
        leftIcon={{
          name: 'flask',
          type: 'font-awesome',
          color: '#FC0D44',
        }}
        chevron
        onPress={handleOnSelfTestPress}
        testID="RunSelfTestButton"
        title={loc.settings.about_selftest}
      />
      <BlueSpacing20 /> */}
      {/* <BlueSpacing20 /> */}
      <BlueTextCentered>
        {getApplicationName()} (Version {getVersion()})
      </BlueTextCentered>
      {/* <BlueTextCentered>{new Date(getBuildNumber() * 1000).toGMTString()}</BlueTextCentered> */}
      <BlueTextCentered>{getBundleId()}</BlueTextCentered>
      {/* <BlueTextCentered>
        w, h = {width}, {height}
      </BlueTextCentered> */}
      {/* <BlueTextCentered>Unique ID: {getUniqueId()}</BlueTextCentered> */}
      {/* <View style={styles.copyToClipboard}>
        <BlueCopyToClipboardButton
          stringToCopy={(Platform.OS === 'android' ? 'user.id:' : 'app.device:') + getUniqueId()}
          displayText={loc.transactions.details_copy}
        />
      </View>
      <BlueSpacing20 /> */}
      <BlueSpacing20 />
    </ScrollView>
  );
};

About.navigationOptions = navigationStyle({}, opts => ({ ...opts, title: loc.settings.about }));
export default About;
