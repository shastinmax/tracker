import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InputLayout } from './types';
import s from './Layout.module.css';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { showHeader } from '../../redux/slices/showHeaderSlice';
const Layout = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(showHeader(true));
  }, [dispatch]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<InputLayout>();

  const onSubmit: SubmitHandler<InputLayout> = (data) => {
    console.log(data.name);
    reset();
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className={s.formLayout}>
        <label className={s.label}>Name</label>
        <input className={s.inputName} {...register('name', { required: true })} />
        <button className={s.submit} type="submit">
          Создать
        </button>
        {errors.name && <p className={s.error}>Заполните поле</p>}
      </form>
    </div>
  );
};

export default Layout;
