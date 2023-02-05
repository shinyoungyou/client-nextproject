import { Box, Button, Input, InputLabel, InputAdornment, FormControl } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

const NicknameEditForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  }
  return (
    <Box sx={{ '& > :not(style)': { m: 1 }, width: '100%' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        <FormControl variant="standard" sx={{ flexGrow: 1 }}>
          <InputLabel htmlFor="input-with-icon-adornment">
            Change Nickname
          </InputLabel>
          <Input
            name="new-nickname"
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Button type="submit" variant="contained">Edit</Button>
        </Box>
      </form>
    </Box>
  );
}

export default NicknameEditForm