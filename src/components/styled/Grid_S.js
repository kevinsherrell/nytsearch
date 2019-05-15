import styled from 'styled-components'

const Grid_S = styled.div`
    display: grid;
    grid-template-rows: repeat(12, 1fr);
    grid-auto-rows: minmax(100px, auto)
    grid-gap: 5px;
    max-width: 960px;
    margin: 0 auto;
`
export default Grid_S