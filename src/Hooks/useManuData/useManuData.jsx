import { useEffect, useState } from "react";

const useManuData = () => {
    const [menuData, setManuData] = useState([])
    const [lodding, setLoding] = useState(true)
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                setManuData(data)
                setLoding(false)
            })
    }, [])
    console.log(menuData)
    return [menuData, lodding]
};

export default useManuData;