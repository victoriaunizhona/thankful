import {createMuiTheme} from '@material-ui/core/styles';

export const THEME = createMuiTheme({
    palette: {
        primary: {
            light: '#ffffff',
            main: '#cfd8dc',
            dark: '#9ea7aa',
            contrastText: '#000000',
        },
        secondary: {
            light: '#fff350',
            main: '#ffc107',
            dark: '#c79100',
            contrastText: '#000000',
        },
    },
});

export default THEME;
