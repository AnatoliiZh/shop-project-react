import React from 'react'
import ReactDOM from 'react-dom/client'

type TitleProps = {
    title?: string | number
}

export const Title = (props: TitleProps) => {
    return <h1>Hello {props.title}</h1>
}

// export default Title
