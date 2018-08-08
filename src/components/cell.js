import React from 'react'
import styled from 'styled-components'

const CellGroup = styled.div`
`

const CellImage = styled.div`
    width: 60px;
    height: 60px;
    background: black;
    border-radius: 10px;
`

const CellTitle = styled.div`
`

const Cell = props => (
    <CellGroup>
        <CellImage> image = {props.image} </CellImage>
        <CellTitle> {props.title} </CellTitle>
    </CellGroup>
) 

export default Cell