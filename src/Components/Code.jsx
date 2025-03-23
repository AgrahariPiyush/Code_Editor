
import Editor from './Editor'
import { Box,styled } from '@mui/material';

import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
    display : flex;
    background-color : #060606;
    height : 63vh;
`



const Code = () => {


    const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

    return (
          <Container>

          <Editor
             headings = "HTML"
             icon="/"
             color = "#FF3C41"
             value = {html}
             onChange = {setHtml}
          />

          <Editor
          headings = "CSS"
          icon="*"
          color = "#0EBEFF"
          value = {css}
             onChange = {setCss}
          />

          <Editor
          headings = "Javascript"
          icon="()"
          color = "#FCD000"
          value = {js}
             onChange = {setJs}
          />

          </Container>
    )
}

export default Code;