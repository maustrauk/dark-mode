import useLocalStorage from './useLocalStorage';
import usePrefersDarkMode from './usePrefersDarkMode';

const useDarkMode = () => {
    const prefersDarkMode = usePrefersDarkMode();
    console.log(prefersDarkMode);
    const [someValue, setSomeValue] = useLocalStorage('dark-mode', prefersDarkMode);
    

    return [someValue, setSomeValue];
}

export default useDarkMode;