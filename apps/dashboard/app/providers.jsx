"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";



export function Providers({ children, themeProps }) {
  return (
      <NextThemesProvider
        defaultTheme='system'
        attribute='class'
        {...themeProps}>
        {children}
      </NextThemesProvider>

  );
}
