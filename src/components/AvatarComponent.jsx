
export default function AvatarComponent(props){
    return(
        <section className="border p-8 rounded-2xl ">
            <img src={props.image} alt="" className="w-28 h-45" />
            <h1>Name : {props.name}</h1>
            <h1>Age : {props.age}</h1>
            <h1>Position : {props.position}</h1>
            <img src={props.img} alt="" className="w-50 h-37" />
            <h1>Daily car drive : {props.car}</h1>
        </section>
    )
}


