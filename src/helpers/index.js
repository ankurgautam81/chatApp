import { NavigationActions } from 'react-navigation';
import { PermissionsAndroid, Vibration, AsyncStorage, Linking, Dimensions } from 'react-native';
import ToastAndroid from 'react-native-simple-toast';


export const helper = {
    getImageDimensionsByDeviceWidth: (width, height, marginLeft = 0, marginRight = 0) => {
        const originalImageHeight = height || 0;
        const originalImageWidth = width || 0;
        const imageWidth = Dimensions.get('window').width - (marginLeft + marginRight);
        const imageHeight = (originalImageHeight * imageWidth) / originalImageWidth;
        return { width: imageWidth, height: imageHeight };
    },
}
