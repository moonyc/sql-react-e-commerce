import { createTheme } from '@material-ui/core/styles';

const lightBlue = "#6B728E"
const blue = "#50577A"
const tan = "#FDF0E0"
const lightGreen = "#C1DEAE"
const green = "#219F94"
const offBlack = "#404258"
const grey = "#747474"

const theme = createTheme({
 palette: {
   primary: {
    main: lightBlue
   },
   secondary: {
    main: blue,
   },
   common: {
    tan,
    lightGreen,
    green,
    offBlack
    
   }
 },
 typography: {
   h1: {
    fontSize : "4.5rem",
    fontFamily: "Philosopher",
    fontStyle: "italic",
    fontWeight: 700,
    color: lightBlue,
   },
   h2: {
    fontFamily: "Montserrat",
    fontSize: "3rem",
    fontWeight: 400,
    color: "#ffffff"
   },
   h3: {
    fontFamily: "Montserrat",
    fontSize: "2rem",
    fontWeight: 300,
    color: lightBlue, 
   },
   h4: {
    fontFamily: "Philosopher",
    fontStyle: "italic",
    fontWeight: 700,
    fontSize: "3rem",
    color: "#ffffff"
   },
   h5: {
     fontFamily: "Philosopher",
     fontSize: "1.5rem",
     fontWeight: 700,
     fontStyle: "italic",
     color: "#ffffff"
   },
   body: {
    fontFamily: "Montserrat",
    fontSize: "1.5rem",
    color: grey,
   },
   body2: {
    fontFamily: "Montserrat",
    fontSize: "2rem",
    color: grey,
   }

 },
 overrides: {
   'MuiChip': {
    root: {
      backgroundColor: blue,
  
     },
     label: {
      fontFamily: 'Montserrat',
      fontSize: '1.5rem',
      color: '#fff',
      fontWeight: 500
     },
   }
 }
})

export default theme