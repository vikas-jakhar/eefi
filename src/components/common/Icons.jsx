const Icons = (props) => {
    const IconList = {

    }

    return (
        <span className={`flex ${props.className}`}>
            {props.IconName && IconList[props.IconName]}
        </span>
    )
}

export default Icons;