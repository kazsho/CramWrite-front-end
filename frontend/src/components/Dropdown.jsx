import React,{ Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { PlusIcon } from '@heroicons/react/20/solid'
import { FolderIcon } from '@heroicons/react/20/solid'
import { DocumentDuplicateIcon } from '@heroicons/react/20/solid'
import { PlusCircleIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
        <button
        type="button"
        className="rounded-full bg-[#E5DEDE] p-2 text-white shadow-sm ml-5"
      >
        <PlusIcon className="h-5 w-5 text-[#533B4D]" aria-hidden="true" />
      </button>
           
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 text-[#533B4D] font-medium rounded-md">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm flex items-center">
                    <FolderIcon className="h-5 w-5 text-[#533B4D] mr-2" aria-hidden="true" />
                  Folder
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm flex items-center">
                  <DocumentDuplicateIcon className="h-5 w-5 text-[#533B4D] mr-2" aria-hidden="true" />
                Flashcard set
              </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm flex items-center">
                  <PlusCircleIcon className="h-5 w-5 text-[#533B4D] mr-2" aria-hidden="true" />
                Create quiz
              </a>
              )}
            </Menu.Item>
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
