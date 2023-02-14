


export default function Document({ title, content }) {


    const handleScroll = (e) => {
        let element = e.target
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            document.querySelector('button').disabled = false
        }
    }

    return (
        <div>
            <h1 className="title">{title}</h1>
            <p onScroll={handleScroll} style={{ height: "200px", overflow: 'auto' }} className="content">{content}</p>
            <button disabled={true}>I Agree</button>
        </div>


    )
}