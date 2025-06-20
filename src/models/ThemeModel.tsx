export class ThemeModel {
    theme: 'light' | 'dark'
    constructor(theme: 'light' | 'dark') {
        this.theme = theme
    }
    isLight = (): boolean => {
        return this.theme === 'light' ? true : false
    }
    isDark = (): boolean => {
        return this.theme === 'dark' ? true : false
    }
}