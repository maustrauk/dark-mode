import useMedia from 'use-media';

const usePrefersDarkMode = () => {
    return useMedia(['(prefers-color-scheme: dark)'], [true], false);
}

export default usePrefersDarkMode;