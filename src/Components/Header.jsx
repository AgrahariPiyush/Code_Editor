
import { AppBar, Toolbar, styled } from '@mui/material'

const Container = styled(AppBar)`
     background: #060606;
     height: 9vh;
`

const Header = () => { 

   const logo = 'D:\desktop\DSA\webd\code editor\code\src\images\logo_for_code_editor-removebg-preview.png'
    return (
        <Container position='static'> 
            <Toolbar>
                <img src={logo} alt = "logo" style={{ width : 40 }} />
            </Toolbar>
        </Container>
    )
}

export default Header;