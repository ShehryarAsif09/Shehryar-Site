import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
}

export const Modal = ({ isOpen, onClose, title, message }: ModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center px-[24px]">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[#000]/80 backdrop-blur-md cursor-pointer"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative z-10 w-full max-w-md bg-[#0d0d0d] border border-theme-accent/20 p-[40px] md:p-[56px] text-center overflow-hidden"
                    >
                        {/* Decorative background element */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-theme-accent/50 to-transparent" />

                        <div className="slabel mb-[24px]">Status — Info</div>
                        <h3 className="font-syne font-bold text-[28px] md:text-[36px] text-theme-text mb-[16px] leading-tight">
                            {title}
                        </h3>
                        <p className="text-[14px] text-theme-accent font-medium tracking-[0.05em] uppercase mb-[40px]">
                            {message}
                        </p>

                        <button
                            onClick={onClose}
                            className="bg-theme-text text-[#000] font-syne font-bold text-[12px] tracking-[0.15em] uppercase px-[32px] py-[14px] hover:bg-theme-accent transition-colors"
                        >
                            Close
                        </button>

                        {/* Subtle grid pattern */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
