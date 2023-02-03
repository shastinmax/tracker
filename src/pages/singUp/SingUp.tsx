import React, { ChangeEventHandler, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './SingUp.module.css';
import classForm from './SingUp.module.css';
import Parse from 'parse';
import { useNavigate } from 'react-router-dom';
import { PathNavigation } from '../../enums/Navigation';
interface IFormInput {
  login: string;
  password: string;
  name: string;
  show: boolean;
}

const SingUp = () => {
  const navigate = useNavigate();
  async function addUser(data: IFormInput) {
    const user: Parse.User = new Parse.User();
    user.set('name', data.name);
    user.set('username', data.login);
    user.set('password', data.password);
    try {
      const userResult: Parse.User = await user.signUp();
      console.log('User signed up', userResult);
      navigate(PathNavigation.SING_IN);
    } catch (error) {
      console.error('Error while signing up user', error);
    }
  }
  const [typePassword, setTypePassword] = useState('password');
  const showPassword: ChangeEventHandler = () => {
    if (typePassword === 'password') {
      setTypePassword('text');
    } else {
      setTypePassword('password');
    }
  };
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    addUser(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label>Name</label>
      <input {...register('name', { required: true })} />
      <label>Login</label>
      <input {...register('login', { required: true })} />
      <label>Password</label>
      <input
        className="password"
        type={typePassword}
        {...register('password', { required: true })}
      />
      <div className={classForm.container_password}>
        <label>Show Password</label>
        <input className="show" type={'checkbox'} {...register('show')} onChange={showPassword} />
      </div>
      <input type="submit" />
    </form>
  );
};

export default SingUp;
