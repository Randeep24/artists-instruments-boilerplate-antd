import React, {useState} from "react";
import {Card} from "antd";
import {EditOutlined} from "@ant-design/icons";
import RemoveArtist from "../buttons/RemoveArtist";

const getStyles = () => ({
    card: {
        width: '500px'
    }
})

const Contact = props => {
    const [id] = useState(props.id)
    const [firstName, setFirstName] = useState(props.firstName)
    const [lastName, setLastName] = useState(props.lastName)

    const styles = getStyles()

    const fullName = () => {
        return `${props.firstName} ${props.lastName}`
    }
    
    return (
        <Card
            style={styles.card}
            extra={<a href={`/`}>Back to Home</a>}
        >
            {fullName()}
        </Card>
    )
}

export default Contact