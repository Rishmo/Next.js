"use client" // This tells Next.js that this is a client-side component

export default function ProductButton(props) {
    console.log(props); // This will log the props
    return (
        <div>
            <button onClick={() => {console.log(props.price)}}> Click Me </button>
        </div>
    )
}
