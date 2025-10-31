import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Modal from './Modal';
import { cardSchema } from '../lib/validations';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const AddCard = ({ onAdd }) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: zodResolver(cardSchema) });

  const onSubmit = (data) => {
    onAdd({ id: Date.now(), ...data, createdAt: Date.now() });
    reset();
    setIsOpen(false);
    toast.success('Card added successfully!');
  };

  const handleClose = () => {
    setIsOpen(false);
    reset();
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full mt-3 p-2 text-blue-600 hover:bg-blue-50 rounded text-sm font-medium"
      >
        + Add Card
      </button>

      <Modal isOpen={isOpen} onClose={handleClose} title="Add New Card">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              {...register('title')}
              aria-invalid={errors.title ? 'true' : 'false'}
              aria-describedby={errors.title ? 'title-error' : undefined}
              className={`mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                errors.title ? 'border-red-500' : ''
              }`}
              placeholder="Enter card title"
            />
            {errors.title && (
              <p id="title-error" className="mt-1 text-sm text-red-600">{errors.title?.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              {...register('description')}
              aria-invalid={errors.description ? 'true' : 'false'}
              aria-describedby={errors.description ? 'description-error' : undefined}
              rows={3}
              className={`mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                errors.description ? 'border-red-500' : ''
              }`}
              placeholder="Enter card description"
            />
            {errors.description && (
              <p id="description-error" className="mt-1 text-sm text-red-600">{errors.description?.message}</p>
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
              Add Card
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddCard
