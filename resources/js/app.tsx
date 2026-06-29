import { createInertiaApp } from '@inertiajs/react';
import { ReactLenis } from 'lenis/react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { initializeTheme } from '@/hooks/use-appearance';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import SettingsLayout from '@/layouts/settings/layout';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const pages = import.meta.glob('./pages/**/*.tsx', { eager: true }) as Record<
    string,
    { default: React.ComponentType }
>;

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => {
        const page = pages[`./pages/${name}.tsx`];

        if (!page) {
            throw new Error(`Page not found: ${name}`);
        }

        return page.default;
    },
    layout: (name) => {
        if (name.startsWith('auth/')) {
            return AuthLayout;
        }

        if (name.startsWith('settings/')) {
            return [AppLayout, SettingsLayout];
        }

        if (name.startsWith('dashboard')) {
            return AppLayout;
        }

        return null;
    },
    strictMode: true,
    withApp(app) {
        return (
            <ReactLenis root>
                <TooltipProvider delayDuration={0}>
                    {app}
                    <Toaster />
                </TooltipProvider>
            </ReactLenis>
        );
    },
    progress: {
        color: '#4B5563',
    },
});

initializeTheme();
