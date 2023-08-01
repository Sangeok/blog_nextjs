'use client'

import { ThemeProvider } from 'next-themes';

interface ThemePropsInterface {
    children?: JSX.Element | Array<JSX.Element> | React.ReactNode;
}

export default function Prodivers(props:ThemePropsInterface) {
    const {children} = props;
    return (
        <ThemeProvider>{children}</ThemeProvider>
    )
}