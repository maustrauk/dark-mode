import useLocalStorage from './useLocalStorage';

const useDarkMode = (value) => {
    const [someValue, setSomeValue] = useLocalStorage('dark-mode', value);

    return [someValue, setSomeValue];
}

export default useDarkMode;