import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Toast Context
type ToastContextType = {
    showToast: (message: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) throw new Error('useToast must be used within a ToastProvider');
    return context;
};

// Toast Provider
export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    const showToast = useCallback((message: string) => {
        setToastMessage(message);
        setTimeout(() => {
            setToastMessage(null);
        }, 3800);
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <AnimatePresence>
                {toastMessage && (
                    <motion.div
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 80, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed bottom-[28px] right-[28px] bg-theme-accent text-black px-[22px] py-[12px] font-mono text-[11px] font-semibold tracking-[0.05em] z-[10000]"
                        role="status" // Accessibility
                        aria-live="polite" // Accessibility
                    >
                        {toastMessage}
                    </motion.div>
                )}
            </AnimatePresence>
        </ToastContext.Provider>
    );
};
