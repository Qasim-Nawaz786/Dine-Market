

function Uniquelist(props:
    {
      title: string,
      paragraph: string
    }) {
    return (
      <div className="md:w-60 w-48 mt-16">
        <h2 className="text-lg font-bold">{props.title}</h2>
        <p className="text-justify pt-4 text-slate-700 text-md">{props.paragraph}</p>
      </div>
  
    )
  }
  
  export default Uniquelist