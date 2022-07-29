import { ReactNode, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

type Props = {
  open: boolean
  onClose: () => void
  children: ReactNode
}

export function AppDialog({ children, open, onClose }: Props) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Backdrop
            className="fixed inset-0 bg-black/40"
            aria-hidden="true"
          />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-dialog min-w-dialog sm:w-dialog-sm md:w-dialog-md flex flex-col rounded-[0.6rem] bg-gray-300 py-[1.5rem] px-6 sm:rounded-[1.2rem] sm:px-14 sm:py-[3.6rem] sm:pb-[4.25rem]">
              {children}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
