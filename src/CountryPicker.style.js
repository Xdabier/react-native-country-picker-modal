import { StyleSheet, PixelRatio } from 'react-native'
import { getHeightPercent } from './ratio'
import GlobalSheet from "./globalStyles";

export default StyleSheet.create({
  container: {},
  modalContainer: {
    position: 'absolute',
    top: GlobalSheet.heightPercentageToDP(15),
    elevation: 10,
    backgroundColor: "#fff",
    zIndex: 100,
    padding: GlobalSheet.heightPercentageToDP(3.5),
    width: GlobalSheet.widthPercentageToDP(80),
    height: GlobalSheet.heightPercentageToDP(75),
    alignSelf: 'center'
  },
  popUpBackground: {
    width: GlobalSheet.widthPercentageToDP(100),
    height: GlobalSheet.heightPercentageToDP(100),
    backgroundColor: "#000",
    opacity: 0.4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    fontSize: 18,
    width: GlobalSheet.widthPercentageToDP(65),
    borderBottomColor: '#00FF48',
    borderBottomWidth: 3,
    alignSelf: 'center'
  },
  inputOnly: {
    // marginLeft: '15%'
  },
  touchFlag: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // height: 19,
    flexDirection: 'row'
  },
  touchText:{
    fontSize: 20
  },
  imgStyle: {
    resizeMode: 'contain',
    width: 34,
    height: 28,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: '#eee',
    opacity: 0.8
  },
  emojiFlag: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    width: 30,
    height: 30,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: 'transparent',
    backgroundColor: 'transparent'
  },
  itemCountry: {
    flexDirection: 'row',
    height: GlobalSheet.heightPercentageToDP(8),
    // width: GlobalSheet.widthPercentageToDP(58),
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  itemCountryFlag: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '7%',
    width: '15%'
  },
  itemCountryName: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center'
  },
  countryName: {
    fontSize: getHeightPercent(2.2)
  },
  scrollView: {
    flex: 1
  },
  letters: {
    marginRight: 10,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  letter: {
    height: 25,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  letterText: {
    textAlign: 'center',
    fontSize: getHeightPercent(2.2)
  },
  closeButton: {
    height: 48,
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeButtonImage: {
    height: 24,
    width: 24,
    resizeMode: 'contain'
  },
  headerTitle: {
    fontSize: 20,
    color: "#000",
    marginBottom: 8
  }
})
