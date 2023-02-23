import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import { shallow } from 'zustand/shallow';
import { useUserStore } from '../../../store/User/userStore';
import FormFooter from '../../Common/FormFooter/FormFooter';
import SubmitButton from '../../Common/Buttons/SubmitButton';

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
    
    function handleSubmit(e: React.FormEvent){
        e.preventDefault();
    }   

    return (
    <>
        <form onSubmit={handleSubmit}>
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
        {/* Confirm Password */}
            <TextField 
                name='ConfirmPassword' 
                variant='standard' 
                label='Confirm Password' 
                fullWidth 
                value={confirmPassword} 
                required 
                margin="normal"
                onChange={( e: React.ChangeEvent<HTMLInputElement>) => { 
                    setConfirmPassword(confirmPassword)
                }
            }>
            </TextField>
            <div className='pb-3 pt-9'>
                <SubmitButton name={'Login'}/>
            </div>
        </form>
        <div className="pt-5">
          <FormFooter mode={'register'}/>
        </div>
    </>
    )

}

export default RegisterForm;