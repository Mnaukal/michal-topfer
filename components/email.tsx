import {useEffect, useState} from "react";

export default function Email() {
    const [email, setEmail] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setEmail("topfer@d3s.mff.cuni.cz")
        }, 1000)

        return () => clearTimeout(timeout)
    }, [])

    if (email !== '')
        return <a id="mail" href={`mailto:${email}`}>{email}</a>

    return (
        <a id="mail">jmeno.prijmeni@matfyz.cz</a>
    )
}