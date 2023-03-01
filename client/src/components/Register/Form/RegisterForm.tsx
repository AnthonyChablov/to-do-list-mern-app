import { useState } from 'react';
import { motion , AnimatePresence} from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { shallow } from 'zustand/shallow';
import { useUserStore } from '../../../store/User/userStore';
import FormFooter from '../../Common/FormFooter/FormFooter';
import SubmitButton from '../../Common/Buttons/SubmitButton';
import { registerUser } from '../../../api/User/registerUser';

const errorMessageVariants = { // Framer motion config
    initial:{
      opacity: 0
    },
    animate:{
      opacity: 1,
      transition:{
        type:'tween',
        ease:'easeInOut',
        duration: 0.55,
        when: ''
      }
    },
    exit:{
      opacity:0
    }
  };

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
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();

    async function handleRegister(e: React.FormEvent){
        e.preventDefault(); 
        if (password !== confirmPassword){ // check if password and confirmPassword match
            setIsPasswordsMatch(false);
            resetPasswordErrorMessage()
        } else {
            setIsPasswordsMatch(true);
            try{ // error catch api request
                const user = await registerUser({firstName, lastName, password, email});
                navigate('/app');
                console.log(user);
            } catch (error){
                console.error(error);
                setError(true);
                resetErrorMessage();
            }
            resetFormInputs();
        }
    }   

    async function resetErrorMessage(){
        setTimeout(() => {
            setError(false);
        }, 6500);
    }

    async function resetPasswordErrorMessage(){
        setTimeout(() => {
            setIsPasswordsMatch(true);
        }, 6500);
    }

    async function resetFormInputs(){
        setEmail('');
        setFirstName('');
        setLastName('');
        setPassword('');
        setConfirmPassword('');
    }

    function handleClickShowPassword(){
        setShowPassword((show) => !show);
    };

    function handleClickShowConfirmPassword(){
        setShowConfirmPassword((show) => !show);
    };

    function handleMouseDownPassword(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
    };

    return (
    <>
        <form onSubmit={handleRegister}>
        {/* First Name */}
            <TextField 
                error={error}
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
                error={error}
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
                error={error}
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
            <FormControl 
                error={!isPasswordsMatch || error}
                variant='standard' 
                fullWidth
                margin="normal"
                required
                onChange={( e: React.ChangeEvent<HTMLInputElement>) => { 
                    setPassword(e.target.value);
                }}
            >
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <Input
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
            </FormControl>
            {/* <TextField 
                error = {!isPasswordsMatch || error}
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
            </TextField>  */}
        {/* Confirm Password */}
            {/* <TextField 
                error = {!isPasswordsMatch || error}
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
            </TextField> */}
            <FormControl 
                error={!isPasswordsMatch || error}
                variant='standard' 
                fullWidth
                margin="normal"
                required
                onChange={( e: React.ChangeEvent<HTMLInputElement>) => { 
                    setConfirmPassword(e.target.value)
                }}
            >
                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                <Input
                    id="outlined-adornment-password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
            </FormControl>
            <AnimatePresence>
                {
                    error && (
                        <motion.div className="pt-3 text-sm text-center text-red-600"
                            key="error"
                            variants={errorMessageVariants}
                            initial='initial'
                            animate='animate'
                            exit={'exit'}
                        >
                            <p>User already exists. Please use another email address or log in.</p>
                        </motion.div>
                    )
                    
                }
                {
                    !isPasswordsMatch && (
                        <motion.div className="pt-3 text-sm text-center text-red-600"
                            key="error"
                            variants={errorMessageVariants}
                            initial='initial'
                            animate='animate'
                            exit={'exit'}
                        >
                            <p>Passwords do not match.</p>
                        </motion.div>
                    )
                }
            </AnimatePresence>
            <div className='pb-3 pt-5'>
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