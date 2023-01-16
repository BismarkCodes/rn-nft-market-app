import {Colors} from '../../constants/colors';

export const GlobalStyles = {
  text: {
    title: {
      big: {
        fontSize: 26,
        fontWeight: '500',
      },
      mid: {
        fontSize: 22,
        fontWeight: '500',
      },
      small: {
        fontSize: 18,
        fontWeight: '500',
      },
      tiny: {
        fontSize: 16,
        fontWeight: '500',
      },
    },
    text: {
      fontSize: 15,
      fontWeight: '400',
    },
    bold: {
      fontWeight: '700',
    },
  },
  header: {
    default: {
      height: 56,
      paddingHorizontal: 16,
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: Colors.border.light,
    },
    main: {},
    back: {},
  },
  image: {
    miniProfileCard: {
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
    },
    miniProfileImage: {
      width: '100%',
      height: '100%',
      borderRadius: 20,
    },
  },
  button: {
    default: {
      height: 50,
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
      padidngTop: 3,
    },
  },
};
