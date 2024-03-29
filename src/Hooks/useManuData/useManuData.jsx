import { useEffect, useState } from "react";

const useManuData = () => {
    const [menuData, setManuData] = useState([])
    const [lodding, setLoding] = useState(true)
    useEffect(() => {
        fetch("http://localhost:5000/menus")
            .then(res => res.json())
            .then(data => {
                setManuData(data)
                setLoding(false)
            })
    }, [])
    return [menuData, lodding]
};

export default useManuData;