import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, FormControl,  InputLabel, Input, InputAdornment, IconButton} from '@mui/material';
import { shallow } from 'zustand/shallow';
import { useUserStore } from '../../../store/User/userStore';
import FormFooter from '../../Common/FormFooter/FormFooter';
import SubmitButton from '../../Common/Buttons/SubmitButton';
import { registerUser } from '../../../api/User/registerUser';

const RegisterForm = () => {

    /* State */
    const {firstName, lastName,password, confirmPassword, email, 
        setFirstName, setLastName, setEmail, setPassword, setConfirmPassword} = useUserStore(
        (state) => ({ 
        firstName: state.firstName,
        lastName : state.lastName, 
        email: state.email,
        password: state.password,
        confirmPassword: state.confirmPassword,
        setFirstName: state.setFirstName,
        setLastName: state.setLastName,
        setEmail: state.setEmail ,
        setPassword: state.setPassword ,
        setConfirmPassword: state.setConfirmPassword,
        }), shallow
    );
    const [isPasswordsMatch, setIsPasswordsMatch] = useState(true);

    async function handleRegister(e: React.FormEvent){
        e.preventDefault();
        // check if password and confirmPassword match 
        if (password !== confirmPassword){
            setIsPasswordsMatch(false);
        } else {
            setIsPasswordsMatch(true);
            await registerUser({firstName, lastName, password, email});
            resetFormInputs();
        }
        resetErrorMessage();
    }   

    async function resetErrorMessage(){
        setTimeout(() => setIsPasswordsMatch(true), 7000);
    }

    async function resetFormInputs(){
        setEmail('');
        setFirstName('');
        setLastName('');
        setPassword('');
        setConfirmPassword('');
    }

    return (
    <>
        <form onSubmit={handleRegister}>
        {/* First Name */}
            <TextField 
                name='FirstName' 
                variant='standard' 
                label='First Name' 
                fullWidth 
                value={firstName} 
                required 
                margin="normal"
                onChange={( e: React.ChangeEvent<HTMLInputElement>) => { 
                    setFirstName(e.target.value)
                }
            }>
            </TextField>
        {/* Last Name */}
            <TextField 
                name='LastName' 
                variant='standard' 
                label='Last Name' 
                fullWidth 
                value={lastName} 
                required 
                margin="normal"
                onChange={( e: React.ChangeEvent<HTMLInputElement>) => { 
                    setLastName(e.target.value)
                }
            }>
            </TextField>

        {/* Email */}
            <TextField 
                name='Email' 
                variant='standard' 
                label='Email' 
                fullWidth 
                value={email} 
                required 
                margin="normal"
                onChange={( e: React.ChangeEvent<HTMLInputElement>) => { 
                    setEmail(e.target.value);
                }
            }>
            </TextField>
        {/* Password */}
            <TextField 
                error = {!isPasswordsMatch}
                helperText={!isPasswordsMatch ? "Passwords do not match." : ''}
                name='Password' 
                variant='standard' 
                label='Password' 
                fullWidth 
                value={password} 
                required 
                margin="normal"
                onChange={( e: React.ChangeEvent<HTMLInputElement>) => { 
                    setPassword(e.target.value);
                }
            }>
            </TextField> 
            {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
            </FormControl> */}
            
        {/* Confirm Password */}
            <TextField 
                error = {!isPasswordsMatch}
                helperText={!isPasswordsMatch? "Passwords do not match." : ''}
                name='ConfirmPassword' 
                variant='standard' 
                label='Confirm Password' 
                fullWidth 
                value={confirmPassword} 
                required 
                margin="normal"
                onChange={( e: React.ChangeEvent<HTMLInputElement>) => { 
                    setConfirmPassword(e.target.value)
                }
            }>
            </TextField>
            <div className='pb-3 pt-9'>
                <SubmitButton name={'Register'}/>
            </div>
        </form>
        <div className="pt-5">
          <FormFooter mode={'register'}/>
        </div>
    </>
    )

}

export default RegisterForm;