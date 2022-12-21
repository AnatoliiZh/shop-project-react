import React from 'react'
import ReactDOM from 'react-dom/client'
import { Title } from './Title'

type ContentProps = {
    p1: string
    p2: string
}

const Content = (props: ContentProps) => {
    return (
        <React.Fragment>
            <p>{props.p1}</p>
            <p>{props.p2}</p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Title title="React" />
            <Title title="TS" />
            <Title title={10} />
            <Content
                p1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facilis quaerat sapiente offic"
                p2="oiho oiyo iyoiyo ioiy"
            />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
