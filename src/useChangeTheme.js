import {useState} from 'react'

export const useChangeTheme = () => {
    const [theme, setTheme] = useState('light')
    const changeTheme = ()=> {
      setTheme(theme === 'light' ? 'dark' : 'light')
      
    }

    return [theme, changeTheme]
}