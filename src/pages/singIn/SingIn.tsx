import React, { ChangeEventHandler, useState } from 'react';
import classForm from '../singUp/SingUp.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import Parse from 'parse';
import { PathNavigation } from '../../enums/Navigation';
import { useNavigate } from 'react-router-dom';
interface IFormInput {
  login: string;
  password: string;
  name: string;
  show: boolean;
}

const SingIn = () => {
  const [typePassword, setTypePassword] = useState('password');
  const navigate = useNavigate();
  const showPassword: ChangeEventHandler = () => {
    if (typePassword === 'password') {
      setTypePassword('text');
    } else {
      setTypePassword('password');
    }
  };
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  async function logInUser(data: IFormInput) {
    // const userName = JSON.stringify(data.login);
    // const userPassword = JSON.stringify(data.password);
    try {
      const user: Parse.User = await Parse.User.logIn(data.login, data.password);
      // const login: string = user.get('username');
      // const password: string = user.get('password');
      // const objectId: string = user.get('objectId');
      // console.log(login);
      // console.log(password);
      // console.log(objectId);
      console.log('Logged in user', user);
      navigate(PathNavigation.LAYOUT);
      // console.log(user.getUsername());
      // console.log(user.id);
    } catch (error) {
      console.error('Error while logging in user', error);
      alert('зарегистрируйся');
    }
  }
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    logInUser(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label>Login</label>
      <input {...register('login')} />
      <label>Password</label>
      <input className="password" type={typePassword} {...register('password')} />
      <div className={classForm.container_password}>
        <label>Show Password</label>
        <input className="show" type={'checkbox'} {...register('show')} onChange={showPassword} />
      </div>
      <input type="submit" />
    </form>
  );
};

export default SingIn;
