const Book = (props) => {
    const { img, title, author, number} = props
    // const displayTitle = () =>{
    // console.log(title)
    // }
    // console.log(props)
    return (
        <article className='book'>
            {/* <h4 style={{fontSize: '2rem', margin:'0', padding:'0'}}>#{id}</h4> */}
            <span className="number">#{number+1}</span>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    )
}

export default Book;