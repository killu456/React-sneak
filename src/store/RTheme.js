

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
const defaultTheme = isDarkTheme ? 'dark' : 'light'
document.documentElement.setAttribute('data-theme',localStorage.getItem('app-theme') || defaultTheme)
const DefaultTheme = {
    ThemeDL:localStorage.getItem('app-theme') || defaultTheme
}

const REPLACE_THEME = "REPLACE_THEME";
export const ThemeReducer = (state = DefaultTheme,action) => {
    switch(action.type){
        case REPLACE_THEME:
            console.log(state.ThemeDL)
            document.documentElement.setAttribute('data-theme',!state.ThemeDL)
            localStorage.setItem('app-theme',!state.ThemeDL)
            return {ThemeDL:!state.ThemeDL}
        default:
            return state;
    }
}

export const RepThemeAction = () => ({type:REPLACE_THEME})