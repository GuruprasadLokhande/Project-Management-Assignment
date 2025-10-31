import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed  inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all ring-1 ring-blue-50">
                <div className="flex justify-between items-start mb-4">
                  <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-blue-800">
                    {title}
                  </Dialog.Title>
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-gray-400 hover:text-blue-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 p-1"
                    aria-label="Close dialog"
                  >
                    ✕
                  </button>
                </div>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;