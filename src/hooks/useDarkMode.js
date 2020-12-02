import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage('dark-mode', 'off');

    return [someValue, setSomeValue];
}

export default useDarkMode;