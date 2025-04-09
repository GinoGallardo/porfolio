import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import {
  Dialog,
  DialogPanel,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';
import Link from './Link';

function MobileMenu({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Logo />
          <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-[#f97e3e]">
            <span className="sr-only">Cerrar menú</span>
            <XMarkIcon aria-hidden="true" className="size-10" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-[#f97e3e]/50">
            <div className="space-y-2 py-6">
              <Link />
            </div>
            <div className="flex items-center justify-end text-white p-6 gap-4">
              <SocialLinks />
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}

export default MobileMenu;
