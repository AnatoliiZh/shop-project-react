import React from 'react'
import ReactDOM from 'react-dom/client'

type TitleProps = {
    title: string
}

const Title = (props: TitleProps) => {
    return <h1>Hello {props.title}</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                veniam est nemo cumque nulla iste magni unde corporis earum
                placeat exercitationem, sapiente culpa rerum repellat! Fuga
                optio nemo quae doloribus.
            </p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Title title="React" />
            <Title title="TS" />
            <Title title="JS" />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
