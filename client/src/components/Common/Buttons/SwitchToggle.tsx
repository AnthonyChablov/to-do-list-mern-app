import  React, { useEffect, useContext } from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch , {SwitchProps}  from '@mui/material/Switch';
import useLocalStorage from "use-local-storage";
import { ColorModeContext } from '../../../App';

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const SwitchToggle = () => {
  const colorMode = React.useContext(ColorModeContext);
  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>(
    'usehooks-ts-dark-mode',
    false,
  );
 
  function handleChange(event:React.ChangeEvent<HTMLInputElement>){
    setDarkMode(event.target.checked); // tailwind toggle
    
  }

  const body = window.document.body;

  useEffect(()=>{
    colorMode.toggleColorMode();
    body.classList.add(!isDarkMode ? 'light' : 'dark');
    body.classList.remove(isDarkMode ? 'light' : 'dark'  );
    
  },[isDarkMode]);

  return (
    <FormGroup>
      <FormControlLabel className='font-Roboto dark:text-gray-100 '
        sx={{
          marginLeft:'0',
          FontFace:'Roboto'
        }}
        control={
          <IOSSwitch 
            sx={{ ml:4.5 }}  
            checked={isDarkMode}
            
            onChange={
              handleChange
            }
            
          />
        }
        label={'Dark Mode'}
        labelPlacement={'start'}
      />
    </FormGroup>
  )
}

export default SwitchToggle