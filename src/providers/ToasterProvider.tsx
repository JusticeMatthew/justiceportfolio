import type { FC, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

interface ToastProviderProps {
  children: ReactNode;
}

const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          top: 160,
        }}
        toastOptions={{
          success: {
            duration: 2500,
            iconTheme: {
              primary: '#15db95',
              secondary: 'black',
            },
          },
          error: {
            duration: 4000,
            style: {
              fontSize: '12px',
            },
            iconTheme: {
              primary: 'red',
              secondary: 'black',
            },
          },
          style: {
            backgroundColor: '#18181b',
            color: 'white',
          },
        }}
      />
      {children}
    </>
  );
};

export default ToastProvider;
