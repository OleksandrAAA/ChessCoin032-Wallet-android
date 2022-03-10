import { getSystemName, isTablet } from 'react-native-device-info';

const isMacCatalina = getSystemName() === 'Mac OS X';

module.exports.isMacCatalina = isMacCatalina;
module.exports.isCatalyst = false;
module.exports.isTablet = isTablet;
