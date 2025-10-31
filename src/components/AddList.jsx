import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Modal from './Modal';
import { listSchema } from '../lib/validations';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const AddList = ({ onAddList }) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(listSchema) });

  const onSubmit = (data) => {
    onAddList(data.title);
    reset();
    setIsOpen(false);
    toast.success('List added successfully!');
  };

  const handleClose = () => {
    setIsOpen(false);
    reset();
  };

  return (
    <div className="relative w-full">
      {/* Button at top-right */}
      <button
        onClick={() => setIsOpen(true)}
        className="absolute top-4 right-4 flex-shrink-0 w-40 bg-blue-50 rounded-lg p-3 hover:bg-blue-100 text-blue-600 font-medium shadow-md"
      >
        + Add List
      </button>

      <Modal isOpen={isOpen} onClose={handleClose} title="Add New List">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="list-title" className="block text-sm font-medium text-gray-700">
              List Title
            </label>
            <input
              type="text"
              id="list-title"
              {...register('title')}
              aria-invalid={errors.title ? 'true' : 'false'}
              aria-describedby={errors.title ? 'list-title-error' : undefined}
              className={`mt-1 p-2 block w-full rounded-md border ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              } shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
              placeholder="Enter list title"
            />
            {errors.title && (
              <p id="list-title-error" className="mt-1 text-sm text-red-600">
                {errors.title?.message}
              </p>
            )}
          </div>

          <div className="mt-4 flex justify-end space-x-2">
            <button
              type="button"
              onClick={handleClose}
              className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add List
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddList;
