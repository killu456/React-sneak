

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
const defaultTheme = isDarkTheme ? true : false
document.documentElement.setAttribute('data-theme',localStorage.getItem('app-theme') || defaultTheme)
const DefaultSate = {
    ThemeDL:localStorage.getItem('app-theme') || defaultTheme
}

const REPLACE_THEME = "REPLACE_THEME";
export const ThemeReducer = (state = DefaultSate,action) => {
    switch(action.type){
        case REPLACE_THEME:
            document.documentElement.setAttribute('data-theme',!state.ThemeDL)
            localStorage.setItem('app-theme',!state.ThemeDL)
            return {ThemeDL:!state.ThemeDL}
        default:
            return state;
    }
}

export const RepThemeAction = () => ({type:REPLACE_THEME})




