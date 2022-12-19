import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return <h1>Hello React</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consectetur architecto ab ea cupiditate corrupti nulla aliquam
                aliquid tempora dignissimos, impedit, aut aspernatur natus optio
                nostrum nesciunt officiis ipsum? Quibusdam, dicta.
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consectetur architecto ab ea cupiditate corrupti nulla aliquam
                aliquid tempora dignissimos, impedit, aut aspernatur natus optio
                nostrum nesciunt officiis ipsum? Quibusdam, dicta.
            </p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Title />
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
